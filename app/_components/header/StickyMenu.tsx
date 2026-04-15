"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import FreeQuote from "./FreeQuote";
import Nav from "./Nav";
import Logo from "./Logo";
import LanguageSelect from "./LanguageSelect";
import MobileDrawer from "./MobileDrawer";

const SCROLL_THRESHOLD = 150;

export default function StickyMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations();

  const translations = {
    nav_fb: t("nav_fb"),
    nav_google: t("nav_google"),
    nav_marketing: t("nav_marketing"),
    nav_seo: t("nav_seo"),
    nav_services: t("nav_services"),
    nav_portfolio: t("nav_portfolio"),
    nav_blog: t("nav_blog"),
    nav_contact: t("nav_contact"),
    nav_faq: t("nav_faq"),
    nav_crm: t("nav_crm"),
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop sticky menu */}
      <div
        className="fixed top-0 left-0 right-0 z-50 hidden lg:flex bg-secondary/95 backdrop-blur-sm border-b border-gray-700 shadow-lg transition-all duration-300 ease-out"
        role="banner"
      >
        <div className="flex justify-between items-center w-full lg:max-w-6xl mx-auto px-4 py-3">
          <Logo />
          <Nav />
          <FreeQuote />
        </div>
      </div>

      {/* Mobile sticky menu */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex lg:hidden bg-white  backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 ease-out"
        role="banner"
      >
        <div className="w-full px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="shrink-0">
              <Image
                unoptimized
                src="/img/Logo-dark.webp"
                width={100}
                height={80}
                className="w-[75px]"
                alt="logo of viacommunication"
              />
            </Link>
            <div className="flex items-center gap-3">
              <MobileDrawer translations={translations} />
              <LanguageSelect />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
