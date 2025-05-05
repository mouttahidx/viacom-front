"use client";

import React, { useState, useEffect } from "react";
import FreeQuote from "./FreeQuote";
import Nav from "./Nav";
import Logo from "./Logo";
import MainHeader from "./MainHeader";

export default function HeaderSwitcher() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sticky Header (Background when scrolling)
  const StickyHeader = () => (
    <div className="bg-blue-600 w-full px-2 hidden lg:flex fixed top-0 justify-center z-50 shadow-md py-3">
      <div className="flex justify-between w-full lg:max-w-6xl">
        <Logo />
        <Nav />
        <FreeQuote />
      </div>
    </div>
  );

  return (
    <>
      {/* Show MainHeader when not scrolled */}
      {!scrolled && <MainHeader />}

      {/* Show StickyHeader when scrolled */}
      {scrolled && <StickyHeader />}
    </>
  );
}

