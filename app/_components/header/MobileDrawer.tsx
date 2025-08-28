"use client";

import { Link, useRouter } from "@/navigation";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Accordion, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function MobileDrawer({ translations }: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <div>
      <svg
        onClick={open}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title={
          <span className="text-primary text-center w-full">
            VIA Communication
          </span>
        }
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{
          transition: "slide-left",
          duration: 200,
          timingFunction: "ease",
        }}
        closeButtonProps={{
          icon: <XMarkIcon className="w-6 h-6" />,
        }}
      >
        {/* add menu and submenu */}
        <div className="flex flex-col">
          <Accordion defaultValue="">
            <Accordion.Item key="web" value={"web"}>
              <Accordion.Control>
                <Link href="/services">{translations["nav_services"]}</Link>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="pl-4 w-full flex flex-col">
                  <Link
                    href={"/services/via-crm"}
                    className="border-b pb-2 w-full"
                  >
                    {translations["nav_crm"]}
                  </Link>
                  <Link
                    href={"/services/agence-facebook-ads"}
                    className="border-b pb-2 w-full"
                  >
                    {translations["nav_fb"]}
                  </Link>
                  <Link
                    href={"/services/agence-google-ads"}
                    className="border-b py-2 w-full"
                  >
                    {translations["nav_google"]}
                  </Link>
                  <Link
                    href={"/services/agence-marketing-digital"}
                    className="border-b py-2 w-full"
                  >
                    {translations["nav_marketing"]}
                  </Link>
                  <Link
                    href={"/services/agence-seo"}
                    className="border-b py-2 w-full"
                  >
                    {translations["nav_seo"]}
                  </Link>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <div className="flex flex-col">
            <Link
              href={"/nos-realisations"}
              className="border-b py-2 pl-4 w-full"
            >
              {translations["nav_portfolio"]}
            </Link>
            <Link href={"/blogue"} className="border-b py-2 pl-4 w-full">
              {translations["nav_blog"]}
            </Link>
            <Link href={"/contact"} className="border-b py-2 pl-4 w-full">
              {translations["nav_contact"]}
            </Link>
            <Link href={"/faq" as any} className="border-b py-2 pl-4 w-full">
              {translations["nav_faq"]}
            </Link>
          </div>

          <Accordion defaultValue="">
            <Accordion.Item key="web" value={"web"}>
              <Accordion.Control>Support</Accordion.Control>
              <Accordion.Panel>
                <div className="pl-4 w-full flex flex-col">
                  <a
                    className="border-b py-2 pl-4 w-full"
                    target="_blank"
                    href={
                      locale === "fr"
                        ? "https://wkf.ms/3T1Vm69"
                        : "https://wkf.ms/3Xr8O4C"
                    }
                  >
                    {locale === "fr" ? "Support web" : "Web Support"}
                  </a>
                  <a
                    className="py-2 pl-4 w-full"
                    target="_blank"
                    href={
                      locale === "fr"
                        ? "https://forms.monday.com/forms/48a84ff100d76b04e677089530ceecb1?r=use1"
                        : "https://forms.monday.com/forms/b735d17c4a0e2aedd97d69fcc727ec50?r=use1"
                    }
                  >
                    {locale === "fr" ? "Support VIA-CRM" : "VIA-CRM Support"}
                  </a>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>{" "}
      </Drawer>
    </div>
  );
}
