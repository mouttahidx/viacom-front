import { NextRequest, NextResponse } from "next/server";
import { findPostBySlug, listPosts, normalizePostHtml } from "@/lib/blog/store";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || "1");
  const perPage = Number(searchParams.get("per_page") || "10");
  const result = listPosts(page, perPage);

  return NextResponse.json({
    ...result,
    data: result.data.map((post) => ({
      ...post,
      content: {
        fr: normalizePostHtml(post.content?.fr),
        en: normalizePostHtml(post.content?.en),
      },
    })),
  });
}
