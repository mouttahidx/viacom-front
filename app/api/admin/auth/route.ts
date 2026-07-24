import { NextRequest, NextResponse } from "next/server";
import {
  checkAdminPassword,
  clearAdminSessionCookie,
  isAdminAuthenticated,
  setAdminSessionCookie,
} from "@/lib/blog/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ authenticated: isAdminAuthenticated() });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const password = String(body.password || "");
  if (!checkAdminPassword(password)) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }
  setAdminSessionCookie();
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  clearAdminSessionCookie();
  return NextResponse.json({ ok: true });
}
