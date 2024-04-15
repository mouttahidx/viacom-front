import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  locale: string;
  current: string;
};
export default function Flag({ locale,current }: Props) {
  const router = useRouter();
  return (
    <div className="ml-10 w-[40px] !text-sm text-black lg:text-white">
      {locale === "fr" ? (
        <Link href={current || "/"} locale={locale} rel={!current ? "canonical":""}>
          FR
        </Link>
      ) : (
        <Link href={current || "/"} locale={locale} rel={!current ? "canonical":""}>
          EN
        </Link>
      )}
    </div>
  );
}
