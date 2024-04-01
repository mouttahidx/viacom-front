'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostCard({
  title,
  content,
  image,
  slug
}: {
  title: { fr: string; en: string };
  content: { fr: string; en: string };
  image: string;
  slug:{ fr: string; en: string };
}) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link href={"/blogue/"+ (slug.fr || slug.en)}>
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={"https://laravel.devvia.ca/storage/"+image}
          width={500}
          height={600}
          alt="blog"
        /></Link>
        <div className="p-6">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2> */}
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title.fr || title.en}
          </h1>
          <div className="leading-relaxed mb-3 h-[80px] text-ellipsis overflow-hidden" dangerouslySetInnerHTML={{__html:content.fr || content.en}}/>
          <div className="flex items-center flex-wrap ">
            <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">
            Lire plus          
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
