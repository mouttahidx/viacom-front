const DEFAULT_BASE = "/uploads/blog";

export function getBlogImageUrl(image?: string | null): string {
  if (!image) return "/img/ad.webp";

  const rewritten = rewriteStorageUrl(image);
  if (rewritten) return rewritten;

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("/")
  ) {
    return image;
  }

  const base =
    (typeof process !== "undefined" &&
      process.env.NEXT_PUBLIC_BLOG_IMAGE_BASE_URL?.replace(/\/$/, "")) ||
    DEFAULT_BASE;
  return `${base}/${image.replace(/^\//, "")}`;
}

/** Map legacy Laravel /storage URLs to local uploads */
function rewriteStorageUrl(url: string): string | null {
  const patterns = [
    /^https?:\/\/laravel\.devvia\.ca\/+storage\/(?:posts\/|uploads\/)?(.+)$/i,
    /^\/\/storage\/(?:posts\/|uploads\/)?(.+)$/i,
    /^\/storage\/(?:posts\/|uploads\/)?(.+)$/i,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      const file = match[1].split("/").pop() || match[1];
      return `${DEFAULT_BASE}/${file}`;
    }
  }
  return null;
}

export function normalizePostHtml(
  html: string | undefined,
  baseUrl?: string
): string {
  if (!html) return "";
  const base =
    baseUrl?.replace(/\/$/, "") ||
    process.env.BLOG_IMAGE_BASE_URL?.replace(/\/$/, "") ||
    DEFAULT_BASE;

  return html
    .replace(
      /src="https?:\/\/laravel\.devvia\.ca\/+storage\/(?:posts\/|uploads\/)?([^"]+)"/gi,
      (_full, filePath: string) => {
        const file = String(filePath).split("/").pop();
        return `src="${base}/${file}"`;
      }
    )
    .replace(
      /src="\/\/storage\/(?:posts\/|uploads\/)?([^"]+)"/gi,
      (_full, filePath: string) => {
        const file = String(filePath).split("/").pop();
        return `src="${base}/${file}"`;
      }
    )
    .replace(
      /src="\/storage\/(?:posts\/|uploads\/)?([^"]+)"/gi,
      (_full, filePath: string) => {
        const file = String(filePath).split("/").pop();
        return `src="${base}/${file}"`;
      }
    );
}

export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}
