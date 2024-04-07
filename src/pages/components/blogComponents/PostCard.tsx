'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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

  const router = useRouter();
  const locale = router.locale
  if(locale === "en" && title?.en){
    return <div className="p-4 md:w-1/3" >
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <Link href={"/blogue/"+  slug?.en} locale="en">
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
          {title?.en}
        </h1>
        <div className="leading-relaxed mb-3 h-[80px] text-ellipsis overflow-hidden" dangerouslySetInnerHTML={{__html:content?.en}}/>
        <div className="flex items-center flex-wrap ">
          <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">
          Read more
          </a>

        </div>
      </div>
    </div>
  </div>
  }
  return (
  locale === "fr" &&
    <div className="p-4 md:w-1/3 lg:w-1/4 rounded-xl bg-[#e0e0e0]"  style={{boxShadow:"20px 20px 60px #bebebe,-20px -20px 60px #ffffff"}}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"  >
        <Link href={"/blogue/"+ (slug?.fr)} locale="fr">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={"https://laravel.devvia.ca/storage/"+image}
          width={500}
          height={600}
          alt="blog"
        /></Link>
        <div className="py-6 px-4">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2> */}
          <h2 className="title-font text-base font-medium text-gray-900 mb-3 truncate">
            {title?.fr }
          </h2>
          <div className="leading-relaxed mb-3 h-[70px] text-sm !truncate " dangerouslySetInnerHTML={{__html:content?.fr }}/>
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
