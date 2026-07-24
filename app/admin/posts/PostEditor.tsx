"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getBlogImageUrl, slugify } from "@/lib/blog/images";
import AdminShell from "../_components/AdminShell";
import { Spinner } from "../_components/Loading";

const RichTextEditor = dynamic(() => import("../_components/RichTextEditor"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[520px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white">
      <div className="flex flex-col items-center gap-3 text-slate-500">
        <Spinner />
        <p className="text-sm">Chargement de l&apos;éditeur...</p>
      </div>
    </div>
  ),
});

type Localized = { fr?: string; en?: string };
type Category = { id: number; title: Localized };
type PostForm = {
  id?: number;
  title: Localized;
  slug: Localized;
  image: string;
  meta_description: Localized;
  keywords: Localized;
  content: Localized;
  category_ids: number[];
};

const empty: PostForm = {
  title: { fr: "", en: "" },
  slug: { fr: "", en: "" },
  image: "",
  meta_description: { fr: "", en: "" },
  keywords: { fr: "", en: "" },
  content: { fr: "", en: "" },
  category_ids: [],
};

export default function PostEditor({
  initial,
  categories,
}: {
  initial?: Partial<PostForm>;
  categories: Category[];
}) {
  const router = useRouter();
  const [form, setForm] = useState<PostForm>({ ...empty, ...initial });
  const [locale, setLocale] = useState<"fr" | "en">("fr");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [savedFlash, setSavedFlash] = useState(false);
  const isEdit = Boolean(initial?.id);

  const preview = useMemo(() => getBlogImageUrl(form.image), [form.image]);

  function setLocalized(
    field: keyof Pick<
      PostForm,
      "title" | "slug" | "meta_description" | "keywords" | "content"
    >,
    loc: "fr" | "en",
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: { ...prev[field], [loc]: value },
    }));
  }

  function toggleCategory(id: number) {
    setForm((prev) => ({
      ...prev,
      category_ids: prev.category_ids.includes(id)
        ? prev.category_ids.filter((c) => c !== id)
        : [...prev.category_ids, id],
    }));
  }

  async function uploadImage(file: File) {
    setUploading(true);
    setError("");
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setForm((prev) => ({ ...prev, image: data.path }));
    } catch {
      setError("Upload de l'image échoué");
    } finally {
      setUploading(false);
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = {
        id: form.id,
        title: form.title,
        slug: {
          fr: form.slug.fr || (form.title.fr ? slugify(form.title.fr) : ""),
          en: form.slug.en || (form.title.en ? slugify(form.title.en) : ""),
        },
        image: form.image,
        meta_description: form.meta_description,
        keywords: form.keywords,
        content: form.content,
        category_ids: form.category_ids,
      };
      const res = await fetch(
        isEdit ? `/api/admin/posts/${form.id}` : "/api/admin/posts",
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 401) {
          setError("Session expirée — reconnectez-vous");
          router.replace("/admin");
          return;
        }
        setError(
          data?.message
            ? `Enregistrement impossible: ${data.message}`
            : `Enregistrement impossible (${res.status})`
        );
        return;
      }
      setSavedFlash(true);
      setTimeout(() => setSavedFlash(false), 1800);
      if (!isEdit) {
        router.replace(`/admin/posts/${data.id}`);
        router.refresh();
        return;
      }
      router.refresh();
    } catch {
      setError("Erreur réseau");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AdminShell
      title={isEdit ? "Modifier l'article" : "Nouvel article"}
      subtitle="Éditeur riche compatible avec le HTML existant"
      actions={
        <div className="flex items-center gap-2">
          <Link
            href="/admin/posts"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Retour
          </Link>
          <button
            form="post-editor-form"
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-[#F05423] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d9481c] disabled:opacity-60"
          >
            {saving && <Spinner className="h-4 w-4 border-white/30 border-t-white" />}
            {saving ? "Enregistrement..." : "Enregistrer"}
          </button>
        </div>
      }
    >
      <form id="post-editor-form" onSubmit={onSubmit} className="space-y-5">
        {savedFlash && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 animate-[fadeIn_0.3s_ease]">
            Article enregistré
          </div>
        )}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <section className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="mb-4 flex gap-2 rounded-xl bg-slate-100 p-1">
                {(["fr", "en"] as const).map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocale(loc)}
                    className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      locale === loc
                        ? "bg-white text-[#0C2249] shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {loc === "fr" ? "Français" : "English"}
                  </button>
                ))}
              </div>

              <label className="mb-4 block text-sm font-medium text-slate-700">
                Titre ({locale.toUpperCase()})
                <input
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none ring-[#F05423]/30 focus:ring-2"
                  value={form.title[locale] || ""}
                  onChange={(e) => setLocalized("title", locale, e.target.value)}
                  placeholder={
                    locale === "fr" ? "Titre de l'article" : "Post title"
                  }
                />
              </label>

              <label className="mb-4 block text-sm font-medium text-slate-700">
                Slug ({locale.toUpperCase()})
                <input
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 font-mono text-sm outline-none ring-[#F05423]/30 focus:ring-2"
                  value={form.slug[locale] || ""}
                  onChange={(e) => setLocalized("slug", locale, e.target.value)}
                  placeholder="url-de-larticle"
                />
              </label>

              <div>
                <p className="mb-2 text-sm font-medium text-slate-700">
                  Contenu ({locale.toUpperCase()})
                </p>
                <RichTextEditor
                  key={`content-${locale}-${form.id || "new"}`}
                  value={form.content[locale] || ""}
                  onChange={(html) => setLocalized("content", locale, html)}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                SEO ({locale.toUpperCase()})
              </h2>
              <label className="mb-3 block text-sm font-medium text-slate-700">
                Meta description
                <textarea
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 min-h-[90px] outline-none ring-[#F05423]/30 focus:ring-2"
                  value={form.meta_description[locale] || ""}
                  onChange={(e) =>
                    setLocalized("meta_description", locale, e.target.value)
                  }
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Mots-clés
                <input
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none ring-[#F05423]/30 focus:ring-2"
                  value={form.keywords[locale] || ""}
                  onChange={(e) =>
                    setLocalized("keywords", locale, e.target.value)
                  }
                />
              </label>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Couverture
              </h2>
              <div className="relative overflow-hidden rounded-xl bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt=""
                  className="h-44 w-full object-cover"
                />
                {uploading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                    <Spinner />
                  </div>
                )}
              </div>
              <label className="mt-3 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-center transition hover:border-[#F05423] hover:bg-orange-50/40">
                <span className="text-sm font-medium text-slate-700">
                  Téléverser une image
                </span>
                <span className="mt-1 text-xs text-slate-400">
                  PNG, JPG, WEBP
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) uploadImage(file);
                  }}
                />
              </label>
              <label className="mt-3 block text-xs font-medium text-slate-500">
                Chemin / URL
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#F05423]/30"
                  value={form.image}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, image: e.target.value }))
                  }
                />
              </label>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Catégories
              </h2>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => {
                  const checked = form.category_ids.includes(cat.id);
                  return (
                    <label
                      key={cat.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition ${
                        checked
                          ? "border-[#F05423]/40 bg-orange-50 text-[#0C2249]"
                          : "border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="accent-[#F05423]"
                        checked={checked}
                        onChange={() => toggleCategory(cat.id)}
                      />
                      {cat.title.fr || cat.title.en}
                    </label>
                  );
                })}
                {categories.length === 0 && (
                  <p className="text-sm text-slate-400">Aucune catégorie</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="sticky bottom-4 z-10 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#0C2249] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#16356e] disabled:opacity-60"
          >
            {saving && <Spinner className="h-4 w-4 border-white/30 border-t-white" />}
            {saving ? "Enregistrement..." : "Enregistrer l'article"}
          </button>
        </div>
      </form>
    </AdminShell>
  );
}
