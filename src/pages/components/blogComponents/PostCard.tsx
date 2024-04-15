"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function PostCard({
  title,
  content,
  image,
  slug,
  categories,
}: {
  title: { fr: string; en: string };
  content: { fr: string; en: string };
  image: string;
  slug: { fr: string; en: string };
  categories: Array<any>;
}) {
  const router = useRouter();
  const locale = router.locale;
  if (locale === "en" && title?.en) {
    return (
      <div className="p-4 w-full rounded-xl ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Link href={"/blogue/" + slug?.en} locale="en">
            <Image
              className="md:h-36 w-full object-cover object-center h-[200px] lg:h-[210px]"
              src={"https://laravel.devvia.ca/storage/" + image}
              width={500}
              height={600}
              alt="blog"
            />
          </Link>
          <div className="py-6 px-2">
            <span className="text-xs title-font text-gray-500 mb-1 h-5 block">
              {categories?.length > 0 && categories[0].title?.en}
            </span>
            <h2 className="title-font text-base font-medium text-gray-900 mb-3 truncate">
              {title?.en}
            </h2>
            <div
              className="leading-relaxed mb-2  text-sm  text-wrap h-20"
              dangerouslySetInnerHTML={{
                __html:
                  content?.en.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100) +
                  "...",
              }}
            />
            <div className="flex items-center flex-wrap ">
              <Link
                locale="en"
                href={"/blogue/" + slug?.en}
                className="text-primary inline-flex items-center md:mb-2 lg:mb-0"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    locale === "fr" && (
      <div className="p-4 w-full rounded-xl ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Link href={"/blogue/" + slug?.fr} locale="fr">
            <Image
              className="md:h-36 w-full object-cover object-center h-[200px] lg:h-[210px]"
              src={"https://laravel.devvia.ca/storage/" + image}
              width={500}
              height={600}
              alt="blog"
            />
          </Link>
          <div className="py-6 px-2">
            <span className="text-xs title-font text-gray-500 mb-1 h-5 block">
              {categories?.length > 0 && categories[0].title?.fr}
            </span>
            <h2 className="title-font text-base font-medium text-gray-900 mb-3 truncate">
              {title?.fr}
            </h2>
            <div
              className="leading-relaxed mb-2  text-sm  text-wrap h-20"
              dangerouslySetInnerHTML={{
                __html:
                  content?.fr.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100) +
                  "...",
              }}
            />
            <div className="flex items-center flex-wrap ">
              <Link
                locale="fr"
                href={"/blogue/" + slug?.fr}
                className="text-primary inline-flex items-center md:mb-2 lg:mb-0"
              >Lire plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
