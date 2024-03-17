import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { Roboto } from "next/font/google";
import Head from "next/head";
import CookieConsent from "./components/CookieConsent";
import React, { Component } from "react";
import { NextPage } from "next";
import Layout from "./components/layout";

type Props = {
  Component: any,
  pageProps: Array<any>
}
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: "normal",
  subsets: ['latin'],
  display: 'swap',
});
export default function App ({ Component, pageProps }: Props) {
  return (
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
      <main className={roboto.className}>
     
            <Component {...pageProps} />
         
        <CookieConsent />
      </main>
    </Layout>
  );
}
