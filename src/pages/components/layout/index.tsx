import Head from "next/head";
import Footer from "./Footer";
import Header from "../header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
      <meta name="robots" content="noindex"/>
      </Head>
      <Header />
      <main className="w-full ">{children}</main>
      <Footer />
    </>
  );
}
