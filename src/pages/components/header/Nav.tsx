import { Menu, NavLink } from "@mantine/core";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { useRouter } from "next/router";
import React from "react";

export default function Nav() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <nav className=" flex items-center gap-x-4 mx-6 text-gray-300 text-sm font-medium">
      <Menu
        shadow="md"
        position="bottom-start"
        offset={10}
        withArrow
        trigger="click-hover"
        openDelay={50}
        closeDelay={200}
        transitionProps={{ transition: "slide-up", duration: 250 }}
      >
        <Menu.Target>
          <Link
            href={"/services"}
            locale="en"
            className={`menu-item ${
              router.pathname.includes("/services") && "menu-item-active"
            }`}
          >
            {t("nav_services")}
          </Link>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            className={`menu-item ${
              router.pathname === "/services/agence-facebook-ads" &&
              "menu-item-active"
            }`}
            component={Link}
            href="/services/agence-facebook-ads"
          >
            {t("nav_fb")}
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item
            className={`menu-item ${
              router.pathname === "/services/agence-google-ads" &&
              "menu-item-active"
            }`}
            component={Link}
            href="/services/agence-google-ads"
          >
            {t("nav_google")}
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item
            className={`menu-item ${
              router.pathname === "/services/agence-marketing-digital" &&
              "menu-item-active"
            }`}
            component={Link}
            href="/services/agence-marketing-digital"
          >
            {t("nav_marketing")}
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item
            className={`menu-item ${
              router.pathname === "/services/agence-seo" && "menu-item-active"
            }`}
            component={Link}
            href="/services/agence-seo"
          >
            {t("nav_seo")}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Link
        className={`menu-item ${
          router.pathname === "/nos-realisations" && "menu-item-active"
        }`}
        href="/nos-realisations"
      >
        {t("nav_portfolio")}
      </Link>
      <Link
        className={`menu-item ${
          router.pathname === "/blogue" && "menu-item-active"
        }`}
        href="/blogue"
      >
        {t("nav_blog")}
      </Link>
      <Link
        className={`menu-item ${
          router.pathname === "/contact" && "menu-item-active"
        }`}
        href="/contact"
      >
        {t("nav_contact")}
      </Link>
      <Link
        className={`menu-item ${
          router.pathname === "/faq" && "menu-item-active"
        }`}
        href="/faq"
      >
        {t("nav_faq")}
      </Link>
      <a
        target="_blank"
        className="menu-item"
        href="https://soutien.viacommunication.com/"
      >
        Support
      </a>
    </nav>
  );
}
