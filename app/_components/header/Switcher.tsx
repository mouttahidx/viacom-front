"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";

type BlogPostPayload = {
  slug?: { fr?: string; en?: string };
  content?: { fr?: string; en?: string };
};

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function Switcher({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  async function resolveSinglePostTarget(nextLocale: string): Promise<string> {
    const slugParam = params?.slug;
    const currentSlug =
      typeof slugParam === "string"
        ? slugParam
        : Array.isArray(slugParam)
        ? slugParam[0]
        : undefined;

    const listingPath = nextLocale === "fr" ? "/blogue" : "/blog";
    if (!currentSlug) return listingPath;

    try {
      const res = await fetch(`https://laravel.devvia.ca/api/posts/${currentSlug}`);
      if (!res.ok) return listingPath;

      const payload = (await res.json()) as BlogPostPayload;
      const targetSlug = nextLocale === "fr" ? payload?.slug?.fr : payload?.slug?.en;
      const targetContent =
        nextLocale === "fr" ? payload?.content?.fr : payload?.content?.en;

      if (!targetSlug || !targetContent?.trim()) {
        return listingPath;
      }

      return nextLocale === "fr" ? `/blogue/${targetSlug}` : `/blog/${targetSlug}`;
    } catch {
      return listingPath;
    }
  }

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      void (async () => {
      const isSingleBlogPost =
        pathname.includes("/blog/") || pathname.includes("/blogue/");

      if (isSingleBlogPost) {
        const targetPath = await resolveSinglePostTarget(nextLocale);
        router.replace(targetPath as any, { locale: nextLocale });
        return;
      }

      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: nextLocale }
      );
      })();
    });
  }

  return (
    <label
      className={clsx(
        "relative text-gray-400",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{"Languages"}</p>
      <select
        className="text-black bg-white lg:text-white  uppercase text-sm  lg:ml-4 cursor-pointer font-bold inline-flex appearance-none lg:bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
