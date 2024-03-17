import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    // header
    <header>
      {/* // desktop header */}
      <div className="bg-secondary w-full px-2 hidden lg:block">
        <Image
          src="/Logo.webp"
          width={100}
          height={80}
          className="w-[75px]"
          alt="logo of viacommunication"
        />
      </div>

      {/* // mobile header */}
      <div className="w-full px-4 block lg:hidden ">
        <div className="w-full border-b border-gray-300">
          <Image
            src="/Logo-dark.webp"
            width={100}
            height={80}
            className="w-[75px]"
            alt="logo of viacommunication"
          />
        </div>
        {/* bottom div */}
        <div className="flex justify-between py-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <Link href="/" className="text-lg text-white bg-primary font-medium text-center p-1 relative -mb-3">
            Devis<p className="text-sm uppercase">gratuit</p>
            <svg version="1.1" className="w-full absolute h-[5px] left-0 top-full fill-primary" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" preserveAspectRatio="none" width="14px" height="5px" viewBox="0 0 14.017 5.006" enable-background="new 0 0 14.017 5.006" ><path fill-rule="evenodd" clip-rule="evenodd" d="M14.016,0L7.008,5.006L0,0H14.016z"></path></svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
