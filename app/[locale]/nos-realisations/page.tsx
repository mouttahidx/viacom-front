import "@mantine/carousel/styles.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ecommerce, showcase } from "@/utils/portfolio-items";
import CarouselClient from "@/app/_components/CarouselClient";
import ButtonClient from "@/app/_components/ButtonClient";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import PortflioSections from "@/app/_components/PortflioSections";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("nav_portfolio"),
    description: `${t("nav_portfolio")} - ${t("meta_description")}`,
  };
}

export default function NosRealisations({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div>
      {/* hero */}
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10">
          {t("work_hero_title")}
        </h1>
      </div>
      {/* 1st */}
      <section className=" bg-gradient-to-r from-[#0063a8] via-[#0063a8] to-primary">
        <div className="py-24 w-full h-full bg-secondary bg-opacity-65">
          <p className="max-w-6xl mx-auto text-white text-lg">
            {t("work_1_text")}

            <span className="text-sm text-white block mt-6">
              {t("work_1_team")}
            </span>
          </p>
        </div>
      </section>

      <h2 className="bg-secondary py-6 my-10 text-white text-center text-2xl font-semibold">
        {t("work_2_title")}
      </h2>
      <section className="py-16 bg-white max-w-8xl px-4 mx-auto">
        <CarouselClient />
      </section>

      <PortflioSections title1={t("work_3_title")} title2={t("work_4_title")} />
      {/* CTA */}
      <section className="w-full  p-4 bg-secondary border-b ">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              {t("cta1_title")}
            </h2>
            <p className="mt-4 body-text !text-white">{t("cta1_subtitle")}</p>
          </div>
          {/* cta */}
          <div className="mt-10 lg:mt-0 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-3/12">
            <ButtonClient
              variant="outline"
              color="#EE5422"
              classes="!block !w-full"
              size="md"
              href={"/contact"}
              text={t("btn_contact")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
