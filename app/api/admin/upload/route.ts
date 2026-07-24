import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { isAdminAuthenticated } from "@/lib/blog/auth";
import { BLOB_ACCESS, useBlobStorage } from "@/lib/blog/store";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ message: "No file" }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name) || ".webp";
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
  const blobPath = `blog-uploads/${safeName}`;

  try {
    if (useBlobStorage()) {
      await put(blobPath, bytes, {
        access: BLOB_ACCESS,
        contentType: file.type || undefined,
        addRandomSuffix: false,
        allowOverwrite: true,
      });
      // Private blobs are served through our proxy (not a direct blob URL)
      return NextResponse.json({ path: `/api/blog-media/${blobPath}` });
    }

    if (process.env.VERCEL) {
      return NextResponse.json(
        {
          message:
            "BLOB_READ_WRITE_TOKEN manquant: configurez Vercel Blob pour les uploads.",
        },
        { status: 500 }
      );
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads", "blog");
    await mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, safeName), bytes);
    return NextResponse.json({ path: `/uploads/blog/${safeName}` });
  } catch (err) {
    console.error("Upload failed", err);
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ message }, { status: 500 });
  }
}
