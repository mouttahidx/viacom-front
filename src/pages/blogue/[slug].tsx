import Image from "next/image";
import { Router } from "next/router";
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
  },
  slug:{ fr: string; en: string },
  image: string;
};

export default function Slug({post}:{post:Post}) {
  return (

    <div>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10">{post.title.fr}</h1>
      </div>
      <section className="max-w-5xl mx-auto  py-24">
      <article className="w-full">
      <Image
          className="w-full h-full max-h-[400px] object-cover object-center rounded-lg shadow mb-12"
          src={"https://laravel.devvia.ca/storage/"+post.image}
          width={800}
          height={400}
          alt="blog"
        />
      <div dangerouslySetInnerHTML={{__html:post.content.fr}} className="w-full" />
      </article>
    
      </section>
     
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps(ctx:any) {
  // Call an external API endpoint to get posts
  const res = await fetch('https://laravel.devvia.ca/api/posts/'+ctx.params.slug)
  const post = await res.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post
    },
  }
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://viacommunication.test/api/posts')
  const data = await res.json()
 
  // Get the paths we want to pre-render based on posts
  const paths = data.data.map((post:Post) => ({
    params: { slug: (post.slug.fr || post.slug.en) },
  }))
 
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}