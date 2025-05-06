"use client";

import { Button, Menu } from "@mantine/core";
import NavigationLink from "./NavLink";
import { Link } from "@/navigation";

export default function DropDownServices({ translations }: { translations: any }) {
  return (
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
        <NavigationLink href={"/services"}>{translations['nav_services']}</NavigationLink>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          className="menu-item"
          component={Link}
          href="/services/agence-facebook-ads"
        >
          {translations['nav_fb']}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          className="menu-item"
          component={Link}
          href="/services/agence-google-ads"
        >
          {translations['nav_google']}
        </Menu.Item>
        <Menu.Divider />

        <Menu.Item
          className="menu-item"
          component={Link}
          href="/services/agence-marketing-digital"
        >
          {translations['nav_marketing']}
        </Menu.Item>
        <Menu.Divider />

        <Menu.Item
          className="menu-item"
          component={Link}
          href="/services/agence-seo"
        >
          {translations['nav_seo']}
        </Menu.Item>
      <Menu.Item
          className="menu-item"
          component={Link}
          href="/services/via-crm"
        >
          {translations['nav_crm']}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
