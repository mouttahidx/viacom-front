import { Menu, NavLink } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className=" flex items-center gap-x-4 mx-6 text-gray-300 text-sm font-medium">
      <Menu
      shadow="md"
      position="bottom-start" offset={10} withArrow
        trigger="click-hover"
        openDelay={50}
        closeDelay={200}
        transitionProps={{ transition: "slide-down", duration: 150 }}
      >
        <Menu.Target>
          <Link href={"/"}>Services</Link>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <Link href="/">Publicités Facebook Ads</Link>
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item>
            <Link href="/">Publicités Google Ads</Link>
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item>
            <Link href="/">Marketing Digital</Link>
          </Menu.Item>
          <Menu.Divider />

          <Menu.Item>
            <Link href="/">SEO - Réferencement naturel</Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Link href="/">Nos Réalisations</Link>
      <Link href="/blogue">Blogue</Link>
      <Link href="/">Contact</Link>
      <Link href="/">FAQ</Link>
      <Link href="/">Support</Link>
    </nav>
  );
}
