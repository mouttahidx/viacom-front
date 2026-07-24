import { NextRequest, NextResponse } from "next/server";
import { findPostBySlug, normalizePostHtml } from "@/lib/blog/store";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const post = await findPostBySlug(params.slug);
  if (!post) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    ...post,
    content: {
      fr: normalizePostHtml(post.content?.fr),
      en: normalizePostHtml(post.content?.en),
    },
  });
}
