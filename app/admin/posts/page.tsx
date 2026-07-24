"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlogImageUrl } from "@/lib/blog/images";
import AdminShell from "../_components/AdminShell";
import { PageLoader, PostsTableSkeleton, Spinner } from "../_components/Loading";

type PostRow = {
  id: number;
  title: { fr?: string; en?: string };
  slug: { fr?: string; en?: string };
  image?: string;
  updated_at?: string | null;
  created_at?: string | null;
};

export default function AdminPostsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [seedMessage, setSeedMessage] = useState("");

  async function load() {
    setLoading(true);
    try {
      const auth = await fetch("/api/admin/auth").then((r) => r.json());
      if (!auth.authenticated) {
        router.replace("/admin");
        return;
      }
      const data = await fetch("/api/admin/posts").then((r) => r.json());
      setPosts(data.posts || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function seedFromBundle() {
    if (
      !confirm(
        "Importer les articles depuis data/blog.json vers le stockage (Blob) ? Cela écrase le contenu actuel."
      )
    ) {
      return;
    }
    setSeeding(true);
    setSeedMessage("");
    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSeedMessage(data?.message || "Import impossible");
        return;
      }
      setSeedMessage(
        `Import OK — ${data.posts} article(s), ${data.categories} catégorie(s)`
      );
      await load();
    } catch {
      setSeedMessage("Erreur réseau pendant l'import");
    } finally {
      setSeeding(false);
    }
  }

  async function removePost(id: number) {
    if (!confirm("Supprimer cet article ?")) return;
    setDeletingId(id);
    try {
      await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } finally {
      setDeletingId(null);
    }
  }

  const filtered = posts.filter((post) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const hay = `${post.title.fr || ""} ${post.title.en || ""} ${post.slug.fr || ""} ${post.slug.en || ""}`.toLowerCase();
    return hay.includes(q);
  });

  return (
    <AdminShell
      title="Articles"
      subtitle={
        loading ? "Chargement du blog..." : `${posts.length} article(s) au total`
      }
      actions={
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={seedFromBundle}
            disabled={seeding || loading}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
          >
            {seeding ? "Import..." : "Importer data/blog.json"}
          </button>
          <Link
            href="/admin/posts/new"
            className="rounded-xl bg-[#F05423] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d9481c]"
          >
            + Nouvel article
          </Link>
        </div>
      }
    >
      {seedMessage && (
        <div className="mb-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          {seedMessage}
        </div>
      )}
      {loading ? (
        <div className="space-y-4">
          <PageLoader label="Chargement des articles..." />
          <PostsTableSkeleton />
        </div>
      ) : (
        <>
          <div className="mb-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un article..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none ring-[#F05423]/20 focus:ring-2 md:max-w-md"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            <div className="hidden grid-cols-[88px_1fr_1fr_140px] gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 md:grid">
              <span>Image</span>
              <span>Titre</span>
              <span>Slug</span>
              <span>Actions</span>
            </div>

            {filtered.length === 0 && (
              <div className="px-4 py-16 text-center text-sm text-slate-500">
                Aucun article trouvé
              </div>
            )}

            <ul className="divide-y divide-slate-100">
              {filtered.map((post) => (
                <li
                  key={post.id}
                  className="grid grid-cols-1 items-center gap-3 px-4 py-3 transition hover:bg-slate-50/80 md:grid-cols-[88px_1fr_1fr_140px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getBlogImageUrl(post.image)}
                    alt=""
                    className="h-14 w-20 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-[#0C2249]">
                      {post.title.fr || post.title.en || `#${post.id}`}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {post.updated_at || post.created_at || ""}
                    </p>
                  </div>
                  <p className="hidden truncate font-mono text-xs text-slate-500 md:block">
                    {post.slug.fr || post.slug.en}
                  </p>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/posts/${post.id}`}
                      className="rounded-lg bg-[#0C2249] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#16356e]"
                    >
                      Modifier
                    </Link>
                    <button
                      onClick={() => removePost(post.id)}
                      disabled={deletingId === post.id}
                      className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50"
                    >
                      {deletingId === post.id ? (
                        <Spinner className="h-3.5 w-3.5" />
                      ) : (
                        "Supprimer"
                      )}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </AdminShell>
  );
}
