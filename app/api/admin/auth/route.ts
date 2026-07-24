import { NextRequest, NextResponse } from "next/server";
import {
  checkAdminPassword,
  clearAdminSessionCookie,
  isAdminAuthenticated,
  setAdminSessionCookie,
} from "@/lib/blog/auth";
import { verifyRecaptchaToken } from "@/lib/blog/recaptcha";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ authenticated: isAdminAuthenticated() });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const password = String(body.password || "");
  const recaptchaToken = String(body.recaptchaToken || "");

  const captcha = await verifyRecaptchaToken(
    recaptchaToken,
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.ip ||
      null
  );
  if (!captcha.success) {
    return NextResponse.json({ message: "recaptcha" }, { status: 400 });
  }

  if (!checkAdminPassword(password)) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }
  const secure = req.nextUrl.protocol === "https:";
  setAdminSessionCookie({ secure });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const secure = req.nextUrl.protocol === "https:";
  clearAdminSessionCookie({ secure });
  return NextResponse.json({ ok: true });
}
