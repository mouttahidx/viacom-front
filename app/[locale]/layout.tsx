import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import NextProgressClient from "../_components/NextProgressClient";
import Header from "../_components/header";
import Footer from "../_components/layout/Footer";
import { Montserrat } from "next/font/google";
import "@mantine/core/styles.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/config";
import Script from "next/script";

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
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="FD-gdKgAlNtkC7aayVG0w9EbqpeWG-k7h4jwnnbYuT4"
        />
        <ColorSchemeScript />
      </head>
      <body>
        <Script id="live-chat" strategy="afterInteractive">
          {`window.__lc = window.__lc || {};
    window.__lc.license = 18971658;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))`}
        </Script>

        <NextProgressClient />
        <MantineProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
