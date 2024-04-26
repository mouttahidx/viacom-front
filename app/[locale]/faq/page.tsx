import FaqAccordion from "@/app/_components/FaqAccordion";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations();
 
  return {
    title: t('faq_hero_title'),
    description:`${t("faq_hero_title")} - ${t("meta_description")}`
  };
}

export default function Faq({params:{locale}}:{params:{locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  const faqs = [
    {
      value: t("faq_q_1_title"),
      description: (
        <div className="">{t("faq_q_1_text")}</div>
      ),
    },
    {
      value: t("faq_q_2_title"),
      description: (
        <div className="">{t("faq_q_2_text")}</div>
      ),
    },
    {
      value: t("faq_q_3_title"),
      description: (
        <div className="">{t("faq_q_3_text")}</div>
      ),
    },
    {
      value: t("faq_q_4_title"),
      description: (
        <div className="">{t("faq_q_4_text")}</div>
      ),
    },
    {
      value: t("faq_q_5_title"),
      description: (
        <div className="">{t("faq_q_5_text")}</div>
      ),
    },
    {
      value: t("faq_q_6_title"),
      description: (
        <div className="">{t("faq_q_6_text")}</div>
      ),
    },
    {
      value: t("faq_q_7_title"),
      description: (
        <div className="">
          {t("faq_q_7_text")}

          <a
            href="https://www.facebook.com/VIACommunication/"
            target="_blank"
            className="text-primary font-medium block"
          >
            Facebook
          </a>
        </div>
      ),
    },
    {
      value: t("faq_q_8_title"),
      description: (
        <div className="">{t("faq_q_8_text")}</div>
      ),
    },
    {
      value: t("faq_q_9_title"),
      description: (
        <div className="">{t("faq_q_9_text")}</div>
      ),
    },
  ];

  return (
    <div>
      {/* hero */}
      <div className="bg-faq-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl">
            FAQ{" "}
          </h1>
        </div>
      </div>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 pb-24">
        <h2 className="text-gray-600 text-3xl font-medium text-center">
          {t("faq_1_title")}
        </h2>
        <div className="divider"></div>
       <FaqAccordion faqs={faqs} />
      </section>
    </div>
  );
}
