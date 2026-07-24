import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { isAdminAuthenticated } from "@/lib/blog/auth";
import { writeBlogStore, type BlogStore } from "@/lib/blog/store";

export const dynamic = "force-dynamic";

/**
 * Force-import bundled data/blog.json into the active store (Blob on Vercel).
 * POST /api/admin/seed
 */
export async function POST(_req: NextRequest) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const dataFile = path.join(process.cwd(), "data", "blog.json");
    if (!fs.existsSync(dataFile)) {
      return NextResponse.json(
        { message: "data/blog.json introuvable dans le déploiement" },
        { status: 404 }
      );
    }

    const store = JSON.parse(fs.readFileSync(dataFile, "utf8")) as BlogStore;
    await writeBlogStore(store);

    return NextResponse.json({
      ok: true,
      posts: store.posts?.length ?? 0,
      categories: store.categories?.length ?? 0,
      nextPostId: store.nextPostId,
    });
  } catch (err) {
    console.error("Seed blog failed", err);
    const message =
      err instanceof Error ? err.message : "Échec de l'import";
    return NextResponse.json({ message }, { status: 500 });
  }
}
