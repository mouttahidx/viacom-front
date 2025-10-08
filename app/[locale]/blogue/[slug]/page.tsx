import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";
import Image from "next/image";
import { notFound } from "next/navigation";
import ButtonClient from "@/app/_components/ButtonClient";
import { useEffect } from "react";

type Post = {
  title:{ 
    
    fr: string;
    en: string;
  };
  id: number;
  content: {
    fr: string;
    en: string;
  };
  meta_description: { fr: string; en: string };
  slug: { fr: string; en: string };
  keywords: { fr: string; en: string };
  image: string;
};

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
    locale: string;
  };
}): Promise<any> => {
  let post = null;
  try {
    // Call an external API endpoint to get posts
    const res = await fetch(
      process.env.NEXT_BACKEND_LINK + "posts/" + params.slug
    );
    post = await res.json();
    
  } catch (error) {
    // console.log(error);
    notFound();
  }
  return {
    title: params.locale === "fr" ? post?.title?.fr : post?.title?.en,
    description:
      params.locale === "fr"
        ? post?.meta_description?.fr
        : post?.meta_description?.en,
    keywords: params.locale === "fr" ? post?.keywords?.fr : post?.keywords?.en,
  };
};

export default async function Page({ params }: { params: any }) {
  const { slug, locale }:{slug:string,locale:string} = params;
  const post: Post = await getPost(slug);
  if (!post.title[locale as keyof typeof post.title]) {
    notFound();
  }
  const t = await getTranslations();

  return (
    <div>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-3xl mt-10 max-w-6xl text-center">
          {locale === "fr" ? post?.title?.fr : post?.title?.en}
        </h1>
      </div>
      <section className="max-w-5xl mx-auto  py-24">
        <article className="w-full">
          <Image
            unoptimized
            className="w-full h-full max-h-[450px] object-cover object-center rounded-lg shadow mb-12"
            src={
              post?.image
                ? "https://laravel.devvia.ca/storage/" + post?.image
                : "/img/ad.webp"
            }
            width={1400}
            height={850}
            alt="blog"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: locale === "en" ? post?.content?.en : post?.content?.fr,
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
  let post ;
  try {
    // Call an external API endpoint to get posts
    const res = await fetch(process.env.NEXT_BACKEND_LINK + "posts/" + slug);
    post = await res.json();
    if(post?.content?.fr){
      post.content.fr =  post.content.fr.replace(/src="\/storage/gi, `src="${process.env.NEXT_BACKEND_PUBLIC_LINK}storage`)
    }
    if(post?.content?.en){
      post.content.en =  post.content.en.replace(/src="\/storage/gi, `src="${process.env.NEXT_BACKEND_PUBLIC_LINK}storage`)
    }

  } catch (error) {
    // console.log(error);
    notFound();
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return post;
}

// This function gets called at build time
export async function generateStaticParams() {
  // Call an external API endpoint to get posts
  let params: Array<object> = [];

  try {
    const res = await fetch(process.env.NEXT_BACKEND_LINK + "posts/");
    const data = await res.json();
    data.data.forEach((post: Post) => {
      post.slug?.fr && params.push({ slug: post.slug?.fr });

      post.slug?.en && params.push({ slug: post.slug?.en });
    });
  } catch (error) {}

  // Get the paths we want to pre-render based on posts
  const paths = params;

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return paths;
}
