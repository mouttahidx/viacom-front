import { HomeIcon, HomeModernIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-3xl mt-10 max-w-6xl text-center">
          404
        </h1>
      </div>
      <div className="!my-24 text-center">
        <h2 className="mb-1 text-xl" >
          404{" "}
        </h2>
        <Link href="/" className="underline" rel="canonical">
         <HomeIcon className="w-8 h-8 mx-auto text-primary"/>
        </Link>
      </div>
    </div>
  );
}
