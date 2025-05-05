
import { Button, Menu } from "@mantine/core";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";
import React from "react";
import { usePathname } from "next/navigation";
import NavigationLink from "./NavLink";
import DropDownServices from "./DropDownServices";

export default function Nav() {
  const t = useTranslations();
  const locale = useLocale();
  const translations = {
    'nav_fb':t('nav_fb'),
    'nav_google':t('nav_google'),
    'nav_marketing':t('nav_marketing'),
    'nav_seo':t('nav_seo'),
    'nav_services':t('nav_services'),
    'nav_portfolio':t('nav_portfolio'),
    'nav_blog':t('nav_blog'),
    'nav_contact':t('nav_contact'),
    'nav_faq':t('nav_faq'),
    'nav_crm':t('nav_crm'),
  }

  return (
    <nav className=" flex items-center gap-x-4 mx-6 text-gray-300 text-sm font-medium relative">
      <DropDownServices translations={translations} />
      <NavigationLink href="/nos-realisations">
        {t("nav_portfolio")}
      </NavigationLink>
      <NavigationLink href="/blogue">{t("nav_blog")}</NavigationLink>
      <NavigationLink href="/contact">{t("nav_contact")}</NavigationLink>
      <NavigationLink href="/faq">{t("nav_faq")}</NavigationLink>
      <a
            target="_blank"
            href={locale === "fr" ? "https://soutien.viacommunication.com/":"https://support.viacommunication.com/"}
          >
        Support
      </a>
    </nav>
  );
}
