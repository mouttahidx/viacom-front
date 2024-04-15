import { Menu, NavLink } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";

export default function Nav() {
  const intl = useIntl();
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
            className={`menu-item ${
              router.pathname.includes("/services") && "menu-item-active"
            }`}
          >
            {intl.formatMessage({ id: "nav.services" })}
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
            {intl.formatMessage({ id: "nav.fb" })}
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
            {intl.formatMessage({ id: "nav.google" })}
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
            {intl.formatMessage({ id: "nav.marketing" })}
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item
            className={`menu-item ${
              router.pathname === "/services/agence-seo" && "menu-item-active"
            }`}
            component={Link}
            href="/services/agence-seo"
          >
            {intl.formatMessage({ id: "nav.seo" })}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Link
        className={`menu-item ${
          router.pathname === "/nos-realisations" && "menu-item-active"
        }`}
        href="/nos-realisations"
      >
        {intl.formatMessage({ id: "nav.portfolio" })}
      </Link>
      <Link
        className={`menu-item ${
          router.pathname === "/blogue" && "menu-item-active"
        }`}
        href="/blogue"
      >
        {intl.formatMessage({ id: "nav.blog" })}
      </Link>
      <Link
        className={`menu-item ${
          router.pathname === "/contact" && "menu-item-active"
        }`}
        href="/contact"
      >
        {intl.formatMessage({ id: "nav.contact" })}
      </Link>
      <Link
        className={`menu-item ${
          router.pathname === "/faq" && "menu-item-active"
        }`}
        href="/faq"
      >
        {intl.formatMessage({ id: "nav.faq" })}
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
