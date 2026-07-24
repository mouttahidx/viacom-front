import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/blog/auth";
import {
  LocalizedText,
  PostStatus,
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
  const store = await readBlogStore();
  return NextResponse.json({
    posts: store.posts.map((p) => withCategories(p, store.categories)),
    categories: store.categories,
  });
}

export async function POST(req: NextRequest) {
  if (!isAdminAuthenticated()) return unauthorized();
  try {
    const body = await req.json();
    const store = await readBlogStore();
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");

    const title: LocalizedText = {
      fr: body.title?.fr || "",
      en: body.title?.en || "",
    };
    const slug: LocalizedText = {
      fr: body.slug?.fr || (title.fr ? slugify(title.fr) : ""),
      en: body.slug?.en || (title.en ? slugify(title.en) : ""),
    };

    if (!title.fr && !title.en) {
      return NextResponse.json(
        { message: "Le titre est requis (FR ou EN)" },
        { status: 400 }
      );
    }

    const post = {
      id: store.nextPostId++,
      title,
      slug,
      image: body.image || "",
      meta_description: body.meta_description || emptyLocalized(),
      keywords: body.keywords || emptyLocalized(),
      content: body.content || emptyLocalized(),
      status: (body.status === "draft" ? "draft" : "published") as PostStatus,
      created_at: now,
      updated_at: now,
      category_ids: Array.isArray(body.category_ids) ? body.category_ids : [],
    };

    store.posts.unshift(post);
    await writeBlogStore(store);
    return NextResponse.json(withCategories(post, store.categories), {
      status: 201,
    });
  } catch (err) {
    console.error("POST /api/admin/posts failed", err);
    const message =
      err instanceof Error ? err.message : "Erreur serveur lors de l'enregistrement";
    return NextResponse.json({ message }, { status: 500 });
  }
}
