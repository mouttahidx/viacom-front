import PostsClient from "@/app/_components/blogComponents/PostsClient";
import { getTranslations } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";
import { listPosts, normalizePostHtml } from "@/lib/blog/store";

const POSTS_PER_PAGE = 10;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    pathnameKey: "/blogue",
    title: t("nav_blog"),
    description: `${t("nav_blog")} — ${t("meta_description")}`,
  });
}

export default async function Page() {
  const t = await getTranslations();
  const translations = {
    previous: t("previous"),
    next: t("next"),
  };
  const result = listPosts(1, POSTS_PER_PAGE);
  const posts = result.data.map((post) => ({
    ...post,
    content: {
      fr: normalizePostHtml(post.content?.fr),
      en: normalizePostHtml(post.content?.en),
    },
  }));

  return (
    <div>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10">
          {t("blog_hero_title")}
        </h1>
      </div>
      <PostsClient
        headers={{ total: result.total, last_page: result.last_page }}
        posts={posts}
        translations={translations}
      />
    </div>
  );
}
