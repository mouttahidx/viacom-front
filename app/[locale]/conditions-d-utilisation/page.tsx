import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    pathnameKey: "/conditions-d-utilisation",
    title: t("terms_title"),
    description: `${t("terms_title")} — ${t("meta_description")}`,
  });
}

export default function ConditionsDUtilisation({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();
  return (
    <div>
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl ">
            {t("terms_title")}
          </h1>
        </div>
      </div>
      <section className="container py-32 max-w-6xl no-tailwindcss-base">
        <div
          dangerouslySetInnerHTML={{
            __html: t.raw("terms_text"),
          }}
        />
      </section>
    </div>
  );
}
