import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import NextProgressClient from "../_components/NextProgressClient";
import Header from "../_components/header";
import Footer from "../_components/layout/Footer";
import { Montserrat } from "next/font/google";
import "@mantine/core/styles.css";
import { getTranslations, getMessages } from "next-intl/server";
import { locales } from "@/config";
// import ChatSupport from "../_components/header/ChatSupport";
import { NextIntlClientProvider } from "next-intl";
import { GoogleTagManager } from "@next/third-parties/google";
import { getSiteOrigin } from "@/lib/seo";
import StructuredData from "../_components/StructuredData";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

const theme = createTheme({
  fontFamily: montserrat.style.fontFamily,
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });
  const origin = getSiteOrigin();

  return {
    metadataBase: new URL(origin),
    title: {
      default: "VIA Communication",
      template: "%s | VIA Communication",
    },
    description: `VIA Communication — ${t("meta_description")}`,
    openGraph: {
      type: "website",
      siteName: "VIA Communication",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      url: origin,
      images: [{ url: "/img/hero-home.webp", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const siteOrigin = getSiteOrigin();
  const sitemapUrl = `${siteOrigin}/sitemap.xml`;

  const htmlLang = locale === "fr" ? "fr-CA" : "en-CA";

  return (
    <html lang={htmlLang}>
      <GoogleTagManager gtmId="GTM-TF2N3VK3" />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <head>
          <meta
            name="google-site-verification"
            content="FD-gdKgAlNtkC7aayVG0w9EbqpeWG-k7h4jwnnbYuT4"
          />
          <link
            rel="sitemap"
            type="application/xml"
            title="Sitemap"
            href={sitemapUrl}
          />
          <ColorSchemeScript />
        </head>
        <body>
          <StructuredData locale={locale} />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TF2N3VK3"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <ChatSupport /> */}
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
