import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import NextProgressClient from "../_components/NextProgressClient";
import Header from "../_components/header";
import Footer from "../_components/layout/Footer";
import { Montserrat } from "next/font/google";
import "@mantine/core/styles.css";
import { getTranslations } from "next-intl/server";
import { locales } from "@/config";
import ChatSupport from "../_components/header/ChatSupport";
import { NextIntlClientProvider } from "next-intl";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

const theme = createTheme({
  fontFamily: montserrat.style.fontFamily,
});

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: "VIA Communication",
    description: `VIA Communication - ${t("meta_description")}`,
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale}>
        <head>
          <meta
            name="google-site-verification"
            content="FD-gdKgAlNtkC7aayVG0w9EbqpeWG-k7h4jwnnbYuT4"
          />
          <ColorSchemeScript />
        </head>
        <body>
          <ChatSupport />
          <NextProgressClient />
          <MantineProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
