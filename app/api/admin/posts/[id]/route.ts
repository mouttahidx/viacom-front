import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/blog/auth";
import {
  readBlogStore,
  slugify,
  withCategories,
  writeBlogStore,
} from "@/lib/blog/store";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAdminAuthenticated()) return unauthorized();
  const id = Number(params.id);
  const store = readBlogStore();
  const post = store.posts.find((p) => p.id === id);
  if (!post) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(withCategories(post, store.categories));
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAdminAuthenticated()) return unauthorized();
  const id = Number(params.id);
  const store = readBlogStore();
  const index = store.posts.findIndex((p) => p.id === id);
  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const body = await req.json();
  const existing = store.posts[index];
  const now = new Date().toISOString().slice(0, 19).replace("T", " ");

  const title = {
    fr: body.title?.fr ?? existing.title.fr ?? "",
    en: body.title?.en ?? existing.title.en ?? "",
  };
  const slug = {
    fr:
      body.slug?.fr ??
      existing.slug.fr ??
      (title.fr ? slugify(title.fr) : ""),
    en:
      body.slug?.en ??
      existing.slug.en ??
      (title.en ? slugify(title.en) : ""),
  };

  const updated = {
    ...existing,
    title,
    slug,
    image: body.image ?? existing.image,
    meta_description: body.meta_description ?? existing.meta_description,
    keywords: body.keywords ?? existing.keywords,
    content: body.content ?? existing.content,
    category_ids: Array.isArray(body.category_ids)
      ? body.category_ids
      : existing.category_ids,
    updated_at: now,
  };

  store.posts[index] = updated;
  writeBlogStore(store);
  return NextResponse.json(withCategories(updated, store.categories));
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAdminAuthenticated()) return unauthorized();
  const id = Number(params.id);
  const store = readBlogStore();
  const before = store.posts.length;
  store.posts = store.posts.filter((p) => p.id !== id);
  if (store.posts.length === before) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  writeBlogStore(store);
  return NextResponse.json({ ok: true });
}
