"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "./_components/Loading";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("/api/admin/auth")
      .then((r) => r.json())
      .then((data) => {
        if (data.authenticated) router.replace("/admin/posts");
        else setChecking(false);
      })
      .catch(() => setChecking(false));
  }, [router]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Mot de passe incorrect");
        return;
      }
      router.replace("/admin/posts");
    } catch {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_#eef2ff_0%,_#f8fafc_50%,_#f1f5f9_100%)]">
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <Spinner className="h-10 w-10" />
          <p className="text-sm animate-pulse">Vérification de la session...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_#eef2ff_0%,_#f8fafc_50%,_#f1f5f9_100%)] p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5"
      >
        <div className="bg-[#0C2249] px-8 py-7 text-white">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            VIA Communication
          </p>
          <h1 className="mt-2 text-2xl font-bold">Blog Admin</h1>
          <p className="mt-1 text-sm text-white/70">
            Connectez-vous pour gérer vos articles
          </p>
        </div>
        <div className="space-y-4 px-8 py-7">
          <label className="block text-sm font-medium text-slate-700">
            Mot de passe
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none ring-[#F05423]/25 focus:ring-2"
              autoFocus
              required
            />
          </label>
          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F05423] py-3 text-sm font-semibold text-white transition hover:bg-[#d9481c] disabled:opacity-60"
          >
            {loading && <Spinner className="h-4 w-4 border-white/30 border-t-white" />}
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </div>
      </form>
    </main>
  );
}
