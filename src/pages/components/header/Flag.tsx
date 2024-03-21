import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  locale: string;
};
export default function Flag({ locale }: Props) {
  return (
    <div className="w-[40px] shadow-lg border border-gray-400">
      {locale === "fr" ? (
        <Link href="/" locale={locale}>
          <Image
            src="/img/quebec.webp"
            width="100"
            height="100"
            alt="quebec drapeau"
            className="w-full"
          />
        </Link>
      ) : (
        <Link href="/" locale={locale}>
          <Image
            src="/img/canada.png"
            width="100"
            height="100"
            alt="Canada flag"
            className="w-full"
          />
        </Link>
      )}
    </div>
  );
}
