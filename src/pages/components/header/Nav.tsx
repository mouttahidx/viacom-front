import { Menu, NavLink } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function Nav() {
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
          <Link href={"/services"} className="menu-item">
            Services
          </Link>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            className="hover:bg-primary hover:text-white"
            component={Link}
            href="/services/agence-facebook-ads"
          >
            Publicités Facebook Ads
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item
            className="hover:bg-primary hover:text-white"
            component={Link}
            href="/services/agence-google-ads"
          >
            Publicités Google Ads
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item
            className="hover:bg-primary hover:text-white"
            component={Link}
            href="/services/agence-marketing-digital"
          >
            Marketing Digital
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item
            className="hover:bg-primary hover:text-white"
            component={Link}
            href="/services/agence-seo"
          >
            SEO - Réferencement naturel
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Link className="menu-item" href="/nos-realisations">
        Nos Réalisations
      </Link>
      <Link className="menu-item" href="/blogue">
        Blogue
      </Link>
      <Link className="menu-item" href="/contact">
        Contact
      </Link>
      <Link className="menu-item" href="/faq">
        FAQ
      </Link>
      <a target="_blank" className="menu-item" href="https://soutien.viacommunication.com/">
        Support
      </a>
    </nav>
  );
}
