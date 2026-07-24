import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import ButtonClient from "@/app/_components/ButtonClient";
import { buildBlogPostMetadata } from "@/lib/seo";
import {
  findPostBySlug,
  getBlogImageUrl,
  normalizePostHtml,
  type LocalizedText,
} from "@/lib/blog/store";

type Locale = "fr" | "en";

type PageParams = {
  slug: string;
  locale: string;
};

function getLocalizedValue(value: LocalizedText | undefined, locale: string) {
  return locale === "fr" ? value?.fr : value?.en;
}

function isSupportedLocale(locale: string): locale is Locale {
  return locale === "fr" || locale === "en";
}

function getPostDate(post: {
  published_at?: string;
  created_at?: string | null;
  date?: string;
}): string | null {
  const rawDate = post.published_at ?? post.created_at ?? post.date;
  if (!rawDate) return null;

  const parsed = new Date(rawDate);
  if (Number.isNaN(parsed.getTime())) return null;

  return parsed.toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export const generateMetadata = async ({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> => {
  const post = await findPostBySlug(params.slug);
  if (!post) notFound();

  const title = getLocalizedValue(post.title, params.locale);
  const description = getLocalizedValue(post.meta_description, params.locale);
  const keywords = getLocalizedValue(post.keywords, params.locale);
  const ogImagePath = getBlogImageUrl(post.image);

  return {
    ...buildBlogPostMetadata({
      locale: params.locale,
      slug: params.slug,
      title: title ?? "Blog",
      description: description ?? "",
      ogImagePath,
    }),
    ...(keywords ? { keywords } : {}),
  };
};

export default async function Page({ params }: { params: PageParams }) {
  const { slug, locale } = params;
  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const post = await findPostBySlug(slug);
  if (!post || !post.title[locale]) {
    notFound();
  }

  const content = {
    fr: normalizePostHtml(post.content?.fr),
    en: normalizePostHtml(post.content?.en),
  };
  const postDate = getPostDate(post);
  const t = await getTranslations();

  return (
    <div>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <div className="mt-10 text-center">
          {postDate && <p className="mb-2 text-xs text-white/70">{postDate}</p>}
          <h1 className="uppercase text-white text-3xl max-w-6xl">
            {getLocalizedValue(post.title, locale)}
          </h1>
        </div>
      </div>
      <section className="max-w-5xl mx-auto  py-24">
        <article className="w-full">
          <Image
            unoptimized
            className="w-full h-full max-h-[450px] object-cover object-center rounded-lg shadow mb-12"
            src={getBlogImageUrl(post.image)}
            width={1400}
            height={850}
            alt={getLocalizedValue(post.title, locale) ?? "Article"}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: locale === "en" ? content.en : content.fr,
            }}
            className="w-full no-tailwindcss-base"
          />

          <section className="my-36 text-primary flex flex-col items-center gap-y-6 border-y border-primary py-16 shadow-lg">
            <h2
              dangerouslySetInnerHTML={{
                __html: t.raw("cta2_title"),
              }}
              className="text-xl text-center font-bold"
            />
            <ButtonClient
              variant="fill"
              classes="!bg-primary"
              size="md"
              href={"/services/agence-seo"}
              text={t("cta2_btn")}
            />
          </section>
        </article>
      </section>
    </div>
  );
}
