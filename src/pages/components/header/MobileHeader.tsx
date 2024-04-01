import { Accordion, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import FreeQuote from "./FreeQuote";
import { useRouter } from "next/router";
import Flag from "./Flag";

export default function MobileHeader() {
  type locales = Array<string>;

  const [opened, { open, close }] = useDisclosure(false);
  const {locales,locale} = useRouter();

  return (
    <div>
      <div className="w-full px-4 block lg:hidden">
        <div className="w-full flex justify-between items-center border-b border-gray-300">
          <Link href={"/"}>
            <Image
              src="/img/Logo-dark.webp"
              width={100}
              height={80}
              className="w-[75px]"
              alt="logo of viacommunication"
            />
          </Link>
          <div>
          {[...locales || []].filter(x => x !== locale).map((locale) => (
            <Flag locale={locale} key={locale}/>
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
                <Link href="/services">Services</Link>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="pl-4 w-full flex flex-col">
                    <Link href={"/services/agence-facebook-ads"} className="border-b pb-2 w-full">Publicités Facebook Ads</Link>
                    <Link href={"/services/agence-google-ads"} className="border-b py-2 w-full">Publicités Google Ads</Link>
                    <Link href={"/services/agence-marketing-digital"} className="border-b py-2 w-full">Marketing Digital</Link>
                    <Link href={"/services/agence-seo"} className="border-b py-2 w-full">SEO - Réferencement naturel</Link>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Link href={"/"} className="border-b py-2 pl-4 w-full">Nos Réalisations</Link>
          <Link href={"/blogue"} className="border-b py-2 pl-4 w-full">Blogue</Link>
          <Link href={"/"} className="border-b py-2 pl-4 w-full">Contact</Link>
          <Link href={"/"} className="border-b py-2 pl-4 w-full">FAQ</Link>
          <Link href={"/"} className="border-b py-2 pl-4 w-full">Support</Link>

        </div>
      </Drawer>
    </div>
  );
}
