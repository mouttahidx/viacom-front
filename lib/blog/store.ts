import fs from "fs";
import path from "path";
import { get, put } from "@vercel/blob";

export type LocalizedText = { fr?: string; en?: string };
export { getBlogImageUrl, normalizePostHtml, slugify } from "@/lib/blog/images";

export type Category = {
  id: number;
  title: LocalizedText;
  slug: LocalizedText;
  description?: LocalizedText;
  created_at?: string | null;
  updated_at?: string | null;
};

export type Post = {
  id: number;
  title: LocalizedText;
  slug: LocalizedText;
  image: string;
  meta_description: LocalizedText;
  keywords: LocalizedText;
  content: LocalizedText;
  created_at?: string | null;
  updated_at?: string | null;
  category_ids: number[];
};

export type BlogStore = {
  nextPostId: number;
  nextCategoryId: number;
  categories: Category[];
  posts: Post[];
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "blog.json");
export const BLOG_BLOB_PATHNAME = "blog/data.json";
export const BLOB_ACCESS = "private" as const;

function emptyStore(): BlogStore {
  return {
    nextPostId: 1,
    nextCategoryId: 1,
    categories: [],
    posts: [],
  };
}

export function useBlobStorage() {
  const token = process.env.BLOB_READ_WRITE_TOKEN?.trim() || "";
  // Ignore placeholder values like "vercel_blob_rw_..."
  return Boolean(token) && !token.endsWith("...") && token.length > 20;
}

function readLocalStore(): BlogStore {
  if (!fs.existsSync(DATA_FILE)) {
    return emptyStore();
  }
  const raw = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(raw) as BlogStore;
}

function writeLocalStore(store: BlogStore) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  const payload = JSON.stringify(store, null, 2);
  const tmpFile = `${DATA_FILE}.tmp`;
  fs.writeFileSync(tmpFile, payload, "utf8");
  fs.copyFileSync(tmpFile, DATA_FILE);
  fs.unlinkSync(tmpFile);
}

async function streamToText(stream: ReadableStream<Uint8Array>): Promise<string> {
  return new Response(stream).text();
}

async function readBlobStore(): Promise<BlogStore> {
  const result = await get(BLOG_BLOB_PATHNAME, {
    access: BLOB_ACCESS,
    useCache: false,
  });

  if (!result) {
    const seeded = readLocalStore();
    await writeBlobStore(seeded);
    return seeded;
  }

  if (result.statusCode !== 200 || !result.stream) {
    throw new Error("Failed to read blog blob");
  }

  const text = await streamToText(result.stream);
  return JSON.parse(text) as BlogStore;
}

async function writeBlobStore(store: BlogStore) {
  await put(BLOG_BLOB_PATHNAME, JSON.stringify(store, null, 2), {
    access: BLOB_ACCESS,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
  });
}

export async function readBlogStore(): Promise<BlogStore> {
  if (useBlobStorage()) {
    return readBlobStore();
  }
  return readLocalStore();
}

export async function writeBlogStore(store: BlogStore): Promise<void> {
  if (useBlobStorage()) {
    await writeBlobStore(store);
    return;
  }

  if (process.env.VERCEL) {
    throw new Error(
      "BLOB_READ_WRITE_TOKEN manquant: configurez Vercel Blob pour enregistrer les articles."
    );
  }

  writeLocalStore(store);
}

export function withCategories(post: Post, categories: Category[]) {
  const cats = categories.filter((c) => post.category_ids.includes(c.id));
  return { ...post, categories: cats };
}

export async function listPosts(page = 1, perPage = 10) {
  const store = await readBlogStore();
  const total = store.posts.length;
  const lastPage = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), lastPage);
  const start = (safePage - 1) * perPage;
  const data = store.posts
    .slice(start, start + perPage)
    .map((post) => withCategories(post, store.categories));

  return {
    data,
    total,
    last_page: lastPage,
    current_page: safePage,
    per_page: perPage,
  };
}

export async function findPostBySlug(slug: string) {
  const store = await readBlogStore();
  const post = store.posts.find(
    (p) => p.slug?.fr === slug || p.slug?.en === slug
  );
  if (!post) return null;
  return withCategories(post, store.categories);
}

export async function findPostById(id: number) {
  const store = await readBlogStore();
  const post = store.posts.find((p) => p.id === id);
  if (!post) return null;
  return withCategories(post, store.categories);
}
