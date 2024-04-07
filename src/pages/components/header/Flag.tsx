import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  locale: string;
};
export default function Flag({ locale }: Props) {
  return (
    <div className="ml-10 w-[40px] !text-sm text-black lg:text-white">
      {locale === "fr" ? (
        <Link href="/" locale={locale}>
          FR
        </Link>
      ) : (
        <Link href="/en" locale={locale}>
          EN
        </Link>
      )}
    </div>
  );
}
