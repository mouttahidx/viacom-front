import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { isAdminAuthenticated } from "@/lib/blog/auth";

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

  try {
    if (process.env.BLOB_READ_WRITE_TOKEN?.trim()) {
      const blob = await put(`blog-uploads/${safeName}`, bytes, {
        access: "public",
        contentType: file.type || undefined,
      });
      return NextResponse.json({ path: blob.url });
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
    return NextResponse.json({ message: "Upload failed" }, { status: 500 });
  }
}
