import PostsClient from "@/app/_components/blogComponents/PostsClient";
import { getTranslations } from "next-intl/server";

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

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `VIA Communication - ${t("nav_blog")}`,
    description: `${t("nav_blog")} - ${t("meta_description")}`,
  };
}

export default async function Page() {
  const t = await getTranslations();
  // const translations = {
  //   previous: t("previous"),
  //   next: t("next"),
  // };
  // const { posts, headers } = await getData();

  return (
    <div>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10">
          {t("blog_hero_title")}
        </h1>
      </div>

      <div className="min-h-[40vh] flex items-center justify-center py-16">
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("blog_under_maintenance")}
        </p>
      </div>

      {/* <PostsClient
        headers={headers}
        posts={posts}
        translations={translations}
      /> */}
    </div>
  );
}

// async function getData() {
//   let posts: Posts = [];
//   let headers = { total: 0, last_page: 0 };
//   try {
//     const res = await fetch("https://laravel.devvia.ca/api/posts");
//     const data = await res.json();
//     posts = data.data;
//     headers.total = data.total;
//     headers.last_page = data.last_page;
//   } catch (error) {}

//   return { posts, headers };
// }
