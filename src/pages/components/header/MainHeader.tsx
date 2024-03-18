import React from "react";
import FreeQuote from "./FreeQuote";
import Nav from "./Nav";
import Logo from "./Logo";

export default function MainHeader() {
  return (
    <div className="bg-transparent w-full px-2 hidden lg:flex absolute top-14 justify-center z-10">
      <div className="flex justify-between w-full lg:max-w-6xl pt-3">
        <Logo />
        <Nav />
        <FreeQuote />
      </div>
    </div>
  );
}
