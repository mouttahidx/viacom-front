import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import ButtonClient from "@/app/_components/ButtonClient";
import { buildBlogPostMetadata } from "@/lib/seo";

type Locale = "fr" | "en";
type LocalizedText = { fr: string; en: string };

type Post = {
  title: LocalizedText;
  id: number;
  content: LocalizedText;
  meta_description: LocalizedText;
  slug: LocalizedText;
  keywords: LocalizedText;
  image: string;
  created_at?: string;
  published_at?: string;
  date?: string;
};

type PageParams = {
  slug: string;
  locale: string;
};

function resolvePostFromApiResponse(payload: unknown): Post | null {
  const typedPayload = payload as any;
  if (!typedPayload) return null;
  if (typedPayload.title && typedPayload.content) return typedPayload as Post;
  if (Array.isArray(typedPayload.data) && typedPayload.data.length > 0) {
    return typedPayload.data[0] as Post;
  }
  if (typedPayload.data && typedPayload.data.title && typedPayload.data.content) {
    return typedPayload.data as Post;
  }
  return null;
}

function normalizePostContent(post: Post): Post {
  if (post.content.fr) {
    post.content.fr = post.content.fr.replace(
      /src="\/storage/gi,
      `src="${process.env.NEXT_BACKEND_PUBLIC_LINK}storage`
    );
  }
  if (post.content.en) {
    post.content.en = post.content.en.replace(
      /src="\/storage/gi,
      `src="${process.env.NEXT_BACKEND_PUBLIC_LINK}storage`
    );
  }
  return post;
}

function getLocalizedValue(value: LocalizedText | undefined, locale: string) {
  return locale === "fr" ? value?.fr : value?.en;
}

function isSupportedLocale(locale: string): locale is Locale {
  return locale === "fr" || locale === "en";
}

function getPostDate(post: Post): string | null {
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

async function fetchPostBySlug(slug: string, noStore = false): Promise<Post | null> {
  const res = await fetch(`${process.env.NEXT_BACKEND_LINK}posts/${slug}`, {
    ...(noStore ? { cache: "no-store" as const } : {}),
  });

  if (!res.ok) {
    return null;
  }

  const payload = await res.json();
  return resolvePostFromApiResponse(payload);
}

export const generateMetadata = async ({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> => {
  let post: Post | null = null;
  try {
    post = await fetchPostBySlug(params.slug);
    if (!post) notFound();
  } catch {
    notFound();
  }

  const title = getLocalizedValue(post?.title, params.locale);
  const description = getLocalizedValue(post?.meta_description, params.locale);
  const keywords = getLocalizedValue(post?.keywords, params.locale);

  const publicBase = process.env.NEXT_BACKEND_PUBLIC_LINK?.replace(/\/$/, "");
  const ogImagePath =
    post?.image && publicBase ? `${publicBase}/storage/${post.image}` : undefined;

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

  const post = await getPost(slug);
  if (!post.title[locale]) {
    notFound();
  }
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
            src={
              post.image
                ? "https://laravel.devvia.ca/storage/" + post.image
                : "/img/ad.webp"
            }
            width={1400}
            height={850}
            alt={getLocalizedValue(post.title, locale) ?? "Article"}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: locale === "en" ? post.content.en : post.content.fr,
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

// This function gets called at build time
async function getPost(slug: string) {
  let post: Post | null = null;
  try {
    post = await fetchPostBySlug(slug, true);
    if (!post) {
      notFound();
    }
    normalizePostContent(post);
  } catch {
    notFound();
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  if (!post) {
    notFound();
  }
  return post;
}

// This function gets called at build time
// export async function generateStaticParams() {
//   // Call an external API endpoint to get posts
//   let params: Array<object> = [];

//   try {
//     const res = await fetch(process.env.NEXT_BACKEND_LINK + "posts/");
//     const data = await res.json();
//     data.data.forEach((post: Post) => {
//       post.slug?.fr && params.push({ slug: post.slug?.fr });

//       post.slug?.en && params.push({ slug: post.slug?.en });
//     });
//   } catch (error) {}

//   // Get the paths we want to pre-render based on posts
//   const paths = params;

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return paths;
// }
