import fs from "fs";
import path from "path";

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

function emptyStore(): BlogStore {
  return {
    nextPostId: 1,
    nextCategoryId: 1,
    categories: [],
    posts: [],
  };
}

export function readBlogStore(): BlogStore {
  if (!fs.existsSync(DATA_FILE)) {
    return emptyStore();
  }
  const raw = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(raw) as BlogStore;
}

export function writeBlogStore(store: BlogStore) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  const payload = JSON.stringify(store, null, 2);
  const tmpFile = `${DATA_FILE}.tmp`;
  fs.writeFileSync(tmpFile, payload, "utf8");
  // Windows cannot rename over an existing file
  fs.copyFileSync(tmpFile, DATA_FILE);
  fs.unlinkSync(tmpFile);
}

export function withCategories(post: Post, categories: Category[]) {
  const cats = categories.filter((c) => post.category_ids.includes(c.id));
  return { ...post, categories: cats };
}

export function listPosts(page = 1, perPage = 10) {
  const store = readBlogStore();
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

export function findPostBySlug(slug: string) {
  const store = readBlogStore();
  const post = store.posts.find(
    (p) => p.slug?.fr === slug || p.slug?.en === slug
  );
  if (!post) return null;
  return withCategories(post, store.categories);
}

export function findPostById(id: number) {
  const store = readBlogStore();
  const post = store.posts.find((p) => p.id === id);
  if (!post) return null;
  return withCategories(post, store.categories);
}
