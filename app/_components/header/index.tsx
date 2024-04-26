import React from "react";
import MobileHeader from "./MobileHeader";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";

export default function Header() {
  return (
    <header className="flex flex-col z-10">
      {/* // desktop header */}
      <div className="bg-gradient-to-b from-black via-transparent w-full hidden lg:flex h-[350px] absolute top-0 z-10"></div>
      <TopBar />
      <MainHeader />

      {/* // mobile header */}
      <MobileHeader />
    </header>
  );
}
