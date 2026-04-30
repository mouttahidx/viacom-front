import PostsClient from "@/app/_components/blogComponents/PostsClient";
import { getTranslations } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";

const POSTS_PER_PAGE = 10;

type Post = {
  title: {
    fr: string;
    en: string;
  };
  id: number;
  content: {
    fr: string;
    en: string;
  };
  slug: { fr: string; en: string };
  image: string;
  categories: Array<any>;
};
type Posts = Array<Post>;
type Headers = {
  total: number;
  last_page: number;
};

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
  const { posts, headers } = await getData();

  return (
    <div>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10">
          {t("blog_hero_title")}
        </h1>
      </div>
      <PostsClient
        headers={headers}
        posts={posts}
        translations={translations}
      /> 
    </div>
  );
}

async function getData() {
  let posts: Posts = [];
  let headers = { total: 0, last_page: 0 };
  try {
    const res = await fetch(
      `https://laravel.devvia.ca/api/posts?per_page=${POSTS_PER_PAGE}`
    );
    const data = await res.json();
    posts = data.data;
    headers.total = data.total;
    headers.last_page = data.last_page;
  } catch (error) {}

  return { posts, headers };
}
