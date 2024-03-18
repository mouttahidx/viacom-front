import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { Montserrat, Roboto } from "next/font/google";
import Head from "next/head";
import CookieConsent from "./components/CookieConsent";
import React from "react";
import '@mantine/core/styles.css';
import Layout from "./components/layout";
import { createTheme, MantineProvider } from '@mantine/core';

const montserrat = Montserrat({
  weight:['300','400','500','600','700','800'],
  style:'normal',
  subsets:['latin']
})
type Props = {
  Component: any,
  pageProps: Array<any>
}
const theme = createTheme({
  fontFamily:montserrat.style.fontFamily,
});



export default function App ({ Component, pageProps }: Props) {
  return (
      <MantineProvider theme={theme}>
    <Layout>
     
      <NextNProgress
        color="#dedede"
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
     
            <Component {...pageProps} />
         
        <CookieConsent />
    </Layout>
    </MantineProvider>
  );
}
