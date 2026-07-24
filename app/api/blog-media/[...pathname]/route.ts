import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/blob";
import { BLOB_ACCESS, useBlobStorage } from "@/lib/blog/store";

export const dynamic = "force-dynamic";

/**
 * Stream private Vercel Blob uploads to the public site.
 * Only pathnames under blog-uploads/ are allowed.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { pathname: string[] } }
) {
  const pathname = (params.pathname || []).join("/");
  if (!pathname || pathname.includes("..")) {
    return NextResponse.json({ message: "Invalid path" }, { status: 400 });
  }
  if (!pathname.startsWith("blog-uploads/")) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  if (!useBlobStorage()) {
    return NextResponse.json(
      { message: "Blob storage not configured" },
      { status: 503 }
    );
  }

  try {
    const ifNoneMatch = req.headers.get("if-none-match") || undefined;
    const result = await get(pathname, {
      access: BLOB_ACCESS,
      ifNoneMatch,
    });

    if (!result) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    if (result.statusCode === 304) {
      return new NextResponse(null, {
        status: 304,
        headers: {
          ETag: result.headers.get("etag") || "",
          "Cache-Control":
            result.headers.get("cache-control") || "public, max-age=3600",
        },
      });
    }

    return new NextResponse(result.stream, {
      status: 200,
      headers: {
        "Content-Type": result.blob.contentType || "application/octet-stream",
        "Content-Length": String(result.blob.size ?? ""),
        "Cache-Control":
          result.headers.get("cache-control") || "public, max-age=3600",
        ETag: result.blob.etag || result.headers.get("etag") || "",
      },
    });
  } catch (err) {
    console.error("blog-media proxy failed", err);
    return NextResponse.json({ message: "Failed to load media" }, { status: 500 });
  }
}
