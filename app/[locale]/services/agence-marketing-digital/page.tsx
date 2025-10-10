import { Accordion, Button, Tabs } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";
import ButtonClient from "@/app/_components/ButtonClient";
import TabsClient from "@/app/_components/TabsClient";
import FaqAccordion from "@/app/_components/FaqAccordion";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";


export async function generateMetadata() {
  const t = await getTranslations();
 
  return {
    title: t('nav_marketing'),
    description:`${t("nav_marketing")} - ${t("meta_description")}`
  };
}

export default function AgenceMarketingDigital({params:{locale}}:{params:{locale:string}}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  const tabs = [
    {
      label: t("marketing_4_tab1_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("marketing_4_tab1_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("marketing_4_tab2_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("marketing_4_tab2_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("marketing_4_tab3_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("marketing_4_tab3_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("marketing_4_tab4_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("marketing_4_tab4_text"),
            }}
          />
        </div>
      ),
    },
  ];

  const faqs = [
    {
      value: t("marketing_faq_q1_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("marketing_faq_q1_text"),
            }}
          />
        </div>
      ),
    },
  ];


  return (
    <div>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl">
            <span
              dangerouslySetInnerHTML={{
                __html: t.raw("marketing_hero_title"),
              }}
            />
          </h1>
        </div>
      </div>

      {/* 2nd section */}
      <section className="w-full flex flex-col container my-40 gap-y-20 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-start">
          <div className="w-[50px] bg-primary h-1 mt-1 "></div>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          {/* icons list */}
          <div className="w-full xl:w-6/12 ">
            <div className="body-text ">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("marketing_1"),
                }}
              />
            </div>
            <ButtonClient
              href={"/contact"}
              rel="nofollow"
              variant="filled"
              size="md"
              classes="!bg-primary hover:!bg-opacity-90 mt-10 "
              text={t("btn_contact")}
            />
          </div>
          <Image
            unoptimized
            src={"/img/agence-marketing.webp"}
            alt="agence-marketing"
            width={500}
            height={500}
            className="aspect-video w-full lg:w-6/12 object-cover h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* why section */}
      <section className="w-full flex flex-col container px-4 my-40 gap-y-20 ">
        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          <Image
            unoptimized
            src={"/img/why-us.webp"}
            alt="ad"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-2xl shadow"
          />
          <div className="w-full xl:w-6/12 ">
            <h2 className="text-3xl font-semibold text-gray-600">
              {t("marketing_2_title")}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-4 mb-6"></div>
            <div className="body-text">
              <ul
                className="list-disc pl-6"
                dangerouslySetInnerHTML={{
                  __html: t.raw("marketing_2_text"),
                }}
              />
            </div>

            <ButtonClient
              href={"/contact"}
              rel="nofollow"
              variant="filled"
              size="md"
              classes="!bg-primary hover:!bg-opacity-90 mt-10 "
              text={t("btn_contact")}
            />
          </div>
        </div>
      </section>

      {/* services cards section */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {t("marketing_3_title")}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>
        </div>

        {/* inner 1 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <Link
            href={"/"}
            rel="canonical"
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              unoptimized
              src={"/img/website-creation.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("marketing_3_1_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("marketing_3_1_text")}
            </p>
          </Link>

          <Link
            href={"/services/agence-seo"}
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              unoptimized
              src={"/img/seo-card.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("marketing_3_2_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("marketing_3_2_text")}
            </p>
          </Link>

          <Link
            href="/services/agence-google-ads"
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              unoptimized
              src={"/img/sem.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("marketing_3_3_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("marketing_3_3_text")}
            </p>
          </Link>
        </div>
        {/* inner 2 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <Link
            href="/services/agence-facebook-ads"
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              unoptimized
              src={"/img/facebook-phone.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("marketing_3_4_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("marketing_3_4_text")}
            </p>
          </Link>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              unoptimized
              src={"/img/kpi.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("marketing_3_5_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("marketing_3_5_text")}
            </p>
          </div>

          <div className="xl:w-4/12"></div>
        </div>
      </section>

      {/* tabs */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {t("marketing_4_title")}{" "}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 "></div>
        </div>
        <div className="bg-tabs py-20 px-8 rounded-3xl bg-cover bg-no-repeat">
          <TabsClient tabs={tabs} />
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-no-repeat bg-cover bg-fixed bg-center mt-40 text-center bg-google-cta">
        <div className="w-full h-full bg-white bg-opacity-40  p-24">
          <ButtonClient
            href={"/contact"}
            rel="nofollow"
            variant="filled"
            size="xl"
            classes="!bg-primary hover:!bg-opacity-90 shadow-xl"
            text={t("btn_contact")}
          />
        </div>
      </section>

      {/* CTA 2*/}
      <section className="w-full mx-auto max-w-7xl p-4 py-16 ">
        <div className=" bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
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
              rel="nofollow"
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
        <h2 className="text-gray-600 text-3xl font-medium">FAQ</h2>
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
          href="/services/agence-seo"
        >
          {t("other_seo")}
        </Link>
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
          href="/"
          rel="canonical"
        >
          {t("other_web")}
        </Link>
      </section>
    </div>
  );
}
