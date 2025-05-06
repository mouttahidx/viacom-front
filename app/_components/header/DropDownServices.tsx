import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";
import React from "react";
import { usePathname } from "next/navigation";
import NavigationLink from "./NavLink";
import DropDownServices from "./DropDownServices";

export default function Nav() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <nav className="flex items-center gap-x-4 mx-6 text-gray-300 text-sm font-medium relative">
      {/* Services Dropdown with direct t passed */}
      <DropDownServices t={t} />

      {/* Navigation Links */}
      <NavigationLink href="/nos-realisations">{t("nav_portfolio")}</NavigationLink>
      <NavigationLink href="/blogue">{t("nav_blog")}</NavigationLink>
      <NavigationLink href="/contact">{t("nav_contact")}</NavigationLink>
      <NavigationLink href="/faq">{t("nav_faq")}</NavigationLink>

      {/* Support link */}
      <a target="_blank" href={locale === "fr" ? "https://soutien.viacommunication.com/" : "https://support.viacommunication.com/"}>
        {t("nav_support")}
      </a>
    </nav>
  );
}
