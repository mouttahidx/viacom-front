import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/blog/auth";
import {
  LocalizedText,
  readBlogStore,
  slugify,
  withCategories,
  writeBlogStore,
} from "@/lib/blog/store";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}

function emptyLocalized(): LocalizedText {
  return { fr: "", en: "" };
}

export async function GET() {
  if (!isAdminAuthenticated()) return unauthorized();
  const store = readBlogStore();
  return NextResponse.json({
    posts: store.posts.map((p) => withCategories(p, store.categories)),
    categories: store.categories,
  });
}

export async function POST(req: NextRequest) {
  if (!isAdminAuthenticated()) return unauthorized();
  const body = await req.json();
  const store = readBlogStore();
  const now = new Date().toISOString().slice(0, 19).replace("T", " ");

  const title: LocalizedText = {
    fr: body.title?.fr || "",
    en: body.title?.en || "",
  };
  const slug: LocalizedText = {
    fr: body.slug?.fr || (title.fr ? slugify(title.fr) : ""),
    en: body.slug?.en || (title.en ? slugify(title.en) : ""),
  };

  const post = {
    id: store.nextPostId++,
    title,
    slug,
    image: body.image || "",
    meta_description: body.meta_description || emptyLocalized(),
    keywords: body.keywords || emptyLocalized(),
    content: body.content || emptyLocalized(),
    created_at: now,
    updated_at: now,
    category_ids: Array.isArray(body.category_ids) ? body.category_ids : [],
  };

  store.posts.unshift(post);
  writeBlogStore(store);
  return NextResponse.json(withCategories(post, store.categories), {
    status: 201,
  });
}
