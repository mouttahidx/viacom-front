"use client"
import CookieConsent from "../CookieConsent";
import "../../globals.css";
import { Montserrat } from "next/font/google";
import React, { ReactNode } from "react";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { useMessages } from "next-intl";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import Header from "../header";
import Footer from "./Footer";
import NextProgressClient from "../NextProgressClient";
import { locales } from "@/config";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});
type Props = {
  children: ReactNode;
  params: {locale: string};
};
const theme = createTheme({
  fontFamily: montserrat.style.fontFamily,
});

export function generateStaticParams() {
  return locales;
}

export default function PageLayout({
  children,
}: Props) {

  return (
    <html lang="">
      <body>
        <MantineProvider theme={theme}>
          <main>
            <NextProgressClient />
              {children}
              {/* <CookieConsent /> */}
              {/* <Footer /> */}
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
