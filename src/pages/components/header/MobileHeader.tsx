import { Accordion, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import FreeQuote from "./FreeQuote";
import { useRouter } from "next/router";
import Flag from "./Flag";
import { useIntl } from "react-intl";

export default function MobileHeader() {
  type locales = Array<string>;
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const { locales, locale } = useRouter();

  useEffect(() => {
    close();
  }, [router]);

  const intl = useIntl();

  return (
    <div>
      <div className="w-full px-4 block lg:hidden">
        <div className="w-full flex justify-between items-center border-b border-gray-300">
          <Link href={"/"} rel="canonical">
            <Image
              src="/img/Logo-dark.webp"
              width={100}
              height={80}
              className="w-[75px]"
              alt="logo of viacommunication"
            />
          </Link>
          <div>
            {[...(locales || [])]
              .filter((x) => x !== locale)
              .map((locale) => (
                <Flag
                  locale={locale}
                  key={locale}
                  current={
                    router.route.includes("blog") ? "/blogue" : router.pathname
                  }
                />
              ))}
          </div>
        </div>
        {/* bottom div */}
        <div className="flex justify-between py-2 pl-3">
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
          <FreeQuote />
        </div>
      </div>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title={
          <h3 className="text-primary text-center w-full">VIA Communication</h3>
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
                <Link href="/services">
                  {intl.formatMessage({ id: "nav.services" })}
                </Link>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="pl-4 w-full flex flex-col">
                  <Link
                    href={"/services/agence-facebook-ads"}
                    className="border-b pb-2 w-full"
                  >
                    {intl.formatMessage({ id: "nav.fb" })}
                  </Link>
                  <Link
                    href={"/services/agence-google-ads"}
                    className="border-b py-2 w-full"
                  >
                    {intl.formatMessage({ id: "nav.google" })}
                  </Link>
                  <Link
                    href={"/services/agence-marketing-digital"}
                    className="border-b py-2 w-full"
                  >
                    {intl.formatMessage({ id: "nav.marketing" })}
                  </Link>
                  <Link
                    href={"/services/agence-seo"}
                    className="border-b py-2 w-full"
                  >
                    {intl.formatMessage({ id: "nav.seo" })}
                  </Link>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Link
            href={"/nos-realisations"}
            className="border-b py-2 pl-4 w-full"
          >
            {intl.formatMessage({ id: "nav.portfolio" })}
          </Link>
          <Link href={"/blogue"} className="border-b py-2 pl-4 w-full">
            {intl.formatMessage({ id: "nav.blog" })}
          </Link>
          <Link href={"/contact"} className="border-b py-2 pl-4 w-full">
            {intl.formatMessage({ id: "nav.contact" })}
          </Link>
          <Link href={"/faq"} className="border-b py-2 pl-4 w-full">
            {intl.formatMessage({ id: "nav.faq" })}
          </Link>
          <a
            target="_blank"
            href={"https://soutien.viacommunication.com/"}
            className="border-b py-2 pl-4 w-full"
          >
            Support
          </a>
        </div>
      </Drawer>
    </div>
  );
}
