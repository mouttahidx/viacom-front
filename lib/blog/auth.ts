import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "via_blog_admin";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecret() {
  return (
    process.env.ADMIN_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "change-me-via-blog-admin"
  );
}

function sign(value: string): string {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

function shouldUseSecureCookie(secure?: boolean): boolean {
  if (typeof secure === "boolean") return secure;
  if (process.env.ADMIN_COOKIE_SECURE === "true") return true;
  if (process.env.ADMIN_COOKIE_SECURE === "false") return false;
  // Only default to Secure on known HTTPS hosts (e.g. Vercel).
  // Do not key off NODE_ENV alone — .env often sets NODE_ENV=production on HTTP.
  return Boolean(process.env.VERCEL);
}

export function createAdminSessionToken(): string {
  const payload = `admin:${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyAdminSessionToken(token?: string | null): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = sign(payload);
  try {
    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function setAdminSessionCookie(options?: { secure?: boolean }) {
  const token = createAdminSessionToken();
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: shouldUseSecureCookie(options?.secure),
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export function clearAdminSessionCookie(options?: { secure?: boolean }) {
  cookies().set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: shouldUseSecureCookie(options?.secure),
    path: "/",
    maxAge: 0,
  });
}

export function isAdminAuthenticated(): boolean {
  const token = cookies().get(COOKIE_NAME)?.value;
  return verifyAdminSessionToken(token);
}

export function requireAdmin() {
  if (!isAdminAuthenticated()) {
    throw new Error("UNAUTHORIZED");
  }
}

export function checkAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD || "admin";
  try {
    const a = Buffer.from(password);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
