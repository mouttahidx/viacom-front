import ButtonClient from "@/app/_components/ButtonClient";
import FaqAccordion from "@/app/_components/FaqAccordion";
import { Button } from "@mantine/core";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations();
 
  return {
    title: t('via_crm_title'),
    description: `${t("via_crm_title")} - ${t("meta_description")}`
  };
}

export default function ViaCrm({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  const faqs = [
    {
      value: t("crm_faq_q1_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q1_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("crm_faq_q2_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q2_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("crm_faq_q3_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q3_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("crm_faq_q4_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q4_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("crm_faq_q5_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("crm_faq_q5_text"),
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl">
            <span
              dangerouslySetInnerHTML={{
                __html: t.raw("crm_hero_title"),
              }}
            />
          </h1>
        </div>
      </div>

      {/* intro section */}
      <section className="w-full flex flex-col container my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-start">
          <div className="w-[50px] bg-primary h-1 mt-1"></div>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          {/* text content */}
          <div className="w-full xl:w-6/12">
            <div className="body-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("crm_intro_text"),
                }}
              />
            </div>

            <ButtonClient
              href={"/contact"}
              variant="filled"
              size="md"
              classes="!bg-primary hover:!bg-opacity-90 mt-10"
              text={t("btn_contact")}
            />
          </div>
          <Image
            unoptimized
            src={"/img/via-crm-overview.webp"}
            alt="via-crm-platform"
            width={500}
            height={500}
            className="aspect-video w-full lg:w-6/12 object-cover h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* features section */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {t("crm_features_title")}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10"></div>
        </div>

        {/* features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              {t("crm_feature_1_title")}
            </h3>
            <p>{t("crm_feature_1_text")}</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              {t("crm_feature_2_title")}
            </h3>
            <p>{t("crm_feature_2_text")}</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              {t("crm_feature_3_title")}
            </h3>
            <p>{t("crm_feature_3_text")}</p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              {t("crm_feature_4_title")}
            </h3>
            <p>{t("crm_feature_4_text")}</p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              {t("crm_feature_5_title")}
            </h3>
            <p>{t("crm_feature_5_text")}</p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              {t("crm_feature_6_title")}
            </h3>
            <p>{t("crm_feature_6_text")}</p>
          </div>
        </div>
      </section>

      {/* benefits section */}
      <section className="w-full flex flex-col container px-4 my-40 gap-y-20">
        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          <Image
            unoptimized
            src={"/img/via-crm-benefits.webp"}
            alt="crm-benefits"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-2xl shadow"
          />
          <div className="w-full xl:w-6/12">
            <h2 className="text-3xl font-semibold text-gray-600">
              {t("crm_benefits_title")}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-4 mb-6"></div>
            <div className="body-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("crm_benefits_text"),
                }}
              />
            </div>

            <ButtonClient
              href={"/contact"}
              variant="filled"
              size="md"
              classes="!bg-primary hover:!bg-opacity-90 mt-10"
              text={t("btn_contact")}
            />
          </div>
        </div>
      </section>

      {/* pricing section */}
      <section id="forfaits" className="w-full flex flex-col xl:container my-40 gap-y-20 px-2">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {t("crm_pricing_title")}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10"></div>
        </div>

        {/* pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Forfait Essentiel */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center text-secondary">
              {t("crm_plan_1_title")}
            </h3>
            <p className="text-center text-gray-600 mb-4">
              {t("crm_plan_1_subtitle")}
            </p>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-secondary">
                {t("crm_plan_1_price")}
              </span>
              <span className="text-gray-600">{t("crm_price_period")}</span>
            </div>
            <ul className="mb-8 flex-grow">
              {Array.from({ length: 4 }).map((_, index) => (
                <li key={index} className="flex items-start mb-3">
                  <svg 
                    className="h-5 w-5 text-primary mr-2 mt-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t(`crm_plan_1_feature_${index + 1}`)}</span>
                </li>
              ))}
            </ul>
            <Link 
              href={`/contact?forfait=${t("crm_plan_1_id")}`} 
              className="text-center bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg mt-auto"
            >
              {t("crm_plan_cta")}
            </Link>
          </div>
          
          {/* Forfait Business */}
          <div className="bg-white p-8 rounded-lg shadow-md border-2 border-primary flex flex-col relative">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-semibold">
              {t("crm_popular_badge")}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-secondary">
              {t("crm_plan_2_title")}
            </h3>
            <p className="text-center text-gray-600 mb-4">
              {t("crm_plan_2_subtitle")}
            </p>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-secondary">
                {t("crm_plan_2_price")}
              </span>
              <span className="text-gray-600">{t("crm_price_period")}</span>
            </div>
            <ul className="mb-8 flex-grow">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className="flex items-start mb-3">
                  <svg 
                    className="h-5 w-5 text-primary mr-2 mt-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t(`crm_plan_2_feature_${index + 1}`)}</span>
                </li>
              ))}
            </ul>
            <Link 
              href={`/contact?forfait=${t("crm_plan_2_id")}`}
              className="text-center bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg mt-auto"
            >
              {t("crm_plan_cta")}
            </Link>
          </div>
          
          {/* Forfait Enterprise */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center text-secondary">
              {t("crm_plan_3_title")}
            </h3>
            <p className="text-center text-gray-600 mb-4">
              {t("crm_plan_3_subtitle")}
            </p>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-secondary">
                {t("crm_plan_3_price")}
              </span>
              <span className="text-gray-600">{t("crm_price_period")}</span>
            </div>
            <ul className="mb-8 flex-grow">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className="flex items-start mb-3">
                  <svg 
                    className="h-5 w-5 text-primary mr-2 mt-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t(`crm_plan_3_feature_${index + 1}`)}</span>
                </li>
              ))}
            </ul>
            <Link 
              href={`/contact?forfait=${t("crm_plan_3_id")}`}
              className="text-center bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg mt-auto"
            >
              {t("crm_plan_cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {t("crm_testimonials_title")}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="italic mb-4">
                {t(`crm_testimonial_${index + 1}_text`)}
              </p>
              <p className="font-semibold text-secondary">
                {t(`crm_testimonial_${index + 1}_author`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full mx-auto max-w-7xl p-4 py-16">
        <div className="bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12">
            <h2 className="second-title text-primary font-bold">
              {t("cta1_title")}
            </h2>
            <p className="mt-4 body-text !text-black lg:w-10/12">
              {t("cta1_subtitle")}
            </p>
          </div>
          {/* cta */}
          <div className="mt-10 lg:mt-0 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-3/12">
            <ButtonClient
              href={"/contact"}
              variant="outline"
              color="#EE5422"
              classes="!block !w-full"
              size="md"
              text={t("btn_contact")}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 pb-24">
        <h2 className="text-gray-600 text-3xl font-medium">
          {t("crm_faq_title")}
        </h2>
        <div className="divider"></div>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* other services */}
      <section className="2xl:container flex flex-col items-center mb-16 py-16">
        <h2 className="text-gray-600 text-3xl font-medium">
          {t("other_title")}
        </h2>
        <div className="divider"></div>

        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-facebook-ads"
        >
          {t("other_fb")}
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-google-ads"
        >
          {t("other_google")}
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-seo"
        >
          {t("other_seo")}
        </Link>
      </section>
    </div>
  );
}
