import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
};

export default function Slug({ post }: { post: Post }) {
  const router = useRouter();
  const locale = router.locale;
  return (
    <div>
      <Head>
      <title>{post?.title[locale]}</title>
	<meta name="description" content={post?.meta_description[locale]} />
      </Head>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-3xl mt-10 max-w-6xl text-center">
          {post?.title?.fr}
        </h1>
      </div>
      <section className="max-w-5xl mx-auto  py-24">
        <article className="w-full">
          {post?.slug?.fr && (
            <Link href={post.slug.fr} locale="fr" className="cursor-pointer">
              FR
            </Link>
          )}
          {post?.slug?.en && (
            <Link href={post.slug.en} locale="en" className="cursor-pointer">
              en
            </Link>
          )}
          <Image
            className="w-full h-full max-h-[450px] object-cover object-center rounded-lg shadow mb-12"
            src={"https://laravel.devvia.ca/storage/" + post?.image}
            width={1000}
            height={450}
            alt="blog"
          />
          <div
            dangerouslySetInnerHTML={{ __html: post?.content[locale] }}
            className="w-full no-tailwindcss-base"
          />
        </article>
      </section>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps(ctx: any) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://laravel.devvia.ca/api/posts/" + ctx.params.slug
  );
  const post = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
    revalidate: 120,
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://laravel.devvia.ca/api/posts/");
  const data = await res.json();
  let params: Array<object> = [];
  data.data.forEach((post: Post) => {
    post.slug?.fr &&
      params.push({ params: { slug: post.slug?.fr }, locale: "fr" });

    post.slug?.en &&
      params.push({ params: { slug: post.slug?.en }, locale: "en" });
  });

  // Get the paths we want to pre-render based on posts
  const paths = params;

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}
