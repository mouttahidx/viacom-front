import { useTranslations } from "next-intl";
import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations();

  return (
    <div>
      <Head>
        <title>404</title>
      </Head>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-3xl mt-10 max-w-6xl text-center">
          404
        </h1>
      </div>
      <div className="!my-24 text-center">
        <h2 className="mb-10 text-primary text-xl">
          {t("404.title")}
        </h2>
        <Link href="/" className="underline" rel="canonical">
          {t("404.btn")}
        </Link>
      </div>
    </div>
  );
}
