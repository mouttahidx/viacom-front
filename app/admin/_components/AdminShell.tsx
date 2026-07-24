"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export default function AdminShell({
  children,
  title,
  subtitle,
  actions,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function logout() {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.replace("/admin");
    } finally {
      setLoggingOut(false);
    }
  }

  const nav = [
    { href: "/admin/posts", label: "Articles" },
    { href: "/admin/posts/new", label: "Nouvel article" },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#eef2ff_0%,_#f8fafc_45%,_#f1f5f9_100%)]">
      <div className="flex min-h-screen w-full gap-0 md:gap-6 p-0 md:p-4 lg:p-6">
        <aside className="hidden w-64 shrink-0 lg:w-72 md:block">
          <div className="sticky top-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur">
            <div className="border-b border-slate-100 bg-[#0C2249] px-5 py-5 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                VIA Admin
              </p>
              <p className="mt-1 text-lg font-semibold">Blog</p>
            </div>
            <nav className="space-y-1 p-3">
              {nav.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/admin/posts/new" &&
                    pathname.startsWith(item.href) &&
                    !pathname.includes("/new"));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      active
                        ? "bg-[#F05423] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-slate-100 p-3">
              <a
                href="/blogue"
                target="_blank"
                rel="noreferrer"
                className="mb-2 block rounded-xl px-3 py-2 text-sm text-slate-500 hover:bg-slate-100"
              >
                Voir le site ↗
              </a>
              <button
                onClick={logout}
                disabled={loggingOut}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 disabled:opacity-60"
              >
                {loggingOut ? "Déconnexion..." : "Déconnexion"}
              </button>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 px-4 py-4 backdrop-blur md:mb-6 md:rounded-2xl md:border md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                {title && (
                  <h1 className="text-xl font-bold tracking-tight text-[#0C2249] md:text-2xl">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex gap-2 md:hidden">
                  <Link
                    href="/admin/posts"
                    className="rounded-lg border px-3 py-1.5 text-sm"
                  >
                    Articles
                  </Link>
                  <button
                    onClick={logout}
                    className="rounded-lg border px-3 py-1.5 text-sm"
                  >
                    Quitter
                  </button>
                </div>
                {actions}
              </div>
            </div>
          </header>
          <main className="px-4 pb-10 md:px-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
