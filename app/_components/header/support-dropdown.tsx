"use client";

import { Menu } from "@mantine/core";
import NavigationLink from "./NavLink";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";

export default function SupportDropDown() {
  const locale = useLocale();

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
        <NavigationLink href={"#"}>Support</NavigationLink>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          className="menu-item"
          component={() => (
            <a
            className="py-4 px-1 text-sm"
              target="_blank"
              href={
                locale === "fr"
                  ? "https://wkf.ms/3T1Vm69"
                  : "https://wkf.ms/3Xr8O4C"
              }
            >
              {locale === 'fr' ? 'Support web' : 'Web Support' }
            </a>
          )}
        ></Menu.Item>
        <Menu.Divider />
        <Menu.Item
          className="menu-item"
         component={() => (
            <a
            className="py-4 px-1 text-sm"

              target="_blank"
              href={
                locale === "fr"
                  ? "https://forms.monday.com/forms/48a84ff100d76b04e677089530ceecb1?r=use1"
                  : "https://forms.monday.com/forms/b735d17c4a0e2aedd97d69fcc727ec50?r=use1"
              }
            >
              {locale === 'fr' ? 'Support VIA-CRM' : 'VIA-CRM Support' }

              
            </a>
          )}
        ></Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
