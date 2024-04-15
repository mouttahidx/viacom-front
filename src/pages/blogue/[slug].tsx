import { Button } from "@mantine/core";
import { Form } from "@mantine/form";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

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
  meta_description: { fr: string; en: string };
  slug: { fr: string; en: string };
  image: string;
};

export default function Slug({ post }: { post: Post }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const { locale } = useRouter() ?? null;
  const intl = useIntl();
  useEffect(() => {
    if (router && locale) {
      if (locale === "en") {
        setTitle(post?.title?.en);
      } else {
        setTitle(post?.title?.fr);
      }
    }
  }, [router]);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={
            locale === "en"
              ? post?.meta_description?.en
              : post?.meta_description?.fr
          }
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content={
            post?.image
              ? "https://laravel.devvia.ca/storage/" + post?.image
              : "/img/ad.webp"
          }
        />
        <meta
          property="og:description"
          content={
            locale === "en"
              ? post?.meta_description?.en
              : post?.meta_description?.fr
          }
        />
      </Head>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-3xl mt-10 max-w-6xl text-center">
          {locale === "fr" ? post?.title?.fr : post?.title?.en}
        </h1>
      </div>
      <section className="max-w-5xl mx-auto  py-24">
        <article className="w-full">
          <Image
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
                __html: intl.formatMessage({ id: "cta2.title" }),
              }}
              className="text-xl text-center font-bold"
            />
            <Button
              variant="fill"
              className="!bg-primary"
              size="md"
              component={Link}
              href={"/services/agence-seo"}
            >
              <FormattedMessage id="cta2.btn" />
            </Button>
          </section>
        </article>
      </section>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps(ctx: any) {
  let post = null;
  try {
    // Call an external API endpoint to get posts
    const res = await fetch(
      process.env.NEXT_BACKEND_LINK + "posts/" + ctx.params.slug
    );
    post = await res.json();
  } catch (error) {
    notFound();
  }

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
  let params: Array<object> = [];
  try {
    const res = await fetch(process.env.NEXT_BACKEND_LINK + "posts/");
    const data = await res.json();
    data.data.forEach((post: Post) => {
      post.slug?.fr &&
        params.push({ params: { slug: post.slug?.fr }, locale: "fr" });

      post.slug?.en &&
        params.push({ params: { slug: post.slug?.en }, locale: "en" });
    });
  } catch (error) {}

  // Get the paths we want to pre-render based on posts
  const paths = params;

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}
