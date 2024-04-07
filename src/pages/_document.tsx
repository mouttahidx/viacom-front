import { ColorSchemeScript } from "@mantine/core";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta
          name="description"
          content="VIA Communication est une agence Web du Québec offrant aux PME des services de marketing digital, de conception de site Web et de SEO adaptés à leur budget."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="VIA Communication | Agence Web et Marketing Digital au Québec"
        />
        <meta
          property="og:description"
          content="VIA Communication est une agence Web du Québec offrant aux PME des services de marketing digital, de conception de site Web et de SEO adaptés à leur budget."
        />
        <meta property="og:url" content="https://viacommunication.com/" />
        <meta property="og:site_name" content="VIA Communication" />
        <meta
          property="article:publisher"
          content="https://web.facebook.com/VIACommunication/"
        />
        <ColorSchemeScript defaultColorScheme="auto" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
