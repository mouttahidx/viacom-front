import { Link } from "@/navigation";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="relative">
      <Link
        href={"/"}
        rel="canonical"
        className="before:content-logo-before before:block before:absolute before:right-full before:top-10 "
      >
        <Image
          unoptimized
          src="/img/Logo.webp"
          width={100}
          height={80}
          className="w-[70px]"
          alt="logo of viacommunication"
        />
      </Link>
    </div>
  );
}
