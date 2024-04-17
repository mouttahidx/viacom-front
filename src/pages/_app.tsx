import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import CookieConsent from "./components/CookieConsent";
import React from "react";
import "@mantine/core/styles.css";
import Layout from "./components/layout";
import { createTheme, MantineProvider } from "@mantine/core";
import { useRouter } from "next/router";
import en from "../../i18n/en.json";
import fr from "../../i18n/fr.json";
import {NextIntlClientProvider} from 'next-intl';

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});
type Props = {
  Component: any;
  pageProps: any;
};
const theme = createTheme({
  fontFamily: montserrat.style.fontFamily,
});

export default function App({ Component, pageProps }: Props) {
  const { locale } = useRouter();

  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <MantineProvider theme={theme}>
        <Layout>
          <NextNProgress
            color="#F05423"
            options={{ showSpinner: false }}
            height={5}
          />
          <Head>
            <link
              rel="sitemap"
              type="application/xml"
              title="Sitemap"
              href="/sitemap.xml"
            />
          </Head>

          <Component {...pageProps} dir={"ltr"} />

          <CookieConsent />
        </Layout>
      </MantineProvider>
    </NextIntlClientProvider>
  );
}
