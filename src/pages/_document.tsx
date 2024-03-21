import { ColorSchemeScript } from "@mantine/core";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <meta name="robots" content="noindex"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
