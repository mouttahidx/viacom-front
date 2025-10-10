import ButtonClient from "@/app/_components/ButtonClient";
import FaqAccordion from "@/app/_components/FaqAccordion";
import TabsClient from "@/app/_components/TabsClient";
import { Accordion, Button, Tabs } from "@mantine/core";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations();
 
  return {
    title: t('nav_seo'),
    description:`${t("nav_seo")} - ${t("meta_description")}`
  };
}

export default function AgenceSeo({params:{locale}}:{params:{locale:string}}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();
  const tabs1 = [
    {
      label: t("seo_4_tab1_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_tab1_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("seo_4_tab2_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_tab2_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("seo_4_tab3_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_tab3_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("seo_4_tab4_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_tab4_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("seo_4_tab5_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_tab5_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("seo_4_tab6_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_tab6_text"),
            }}
          />
        </div>
      ),
    },
  ];

  const tabs2 = [
    {
      label: t("seo_4_2_tab1_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_2_tab1_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("seo_4_2_tab2_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_2_tab2_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("seo_4_2_tab3_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_2_tab3_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("seo_4_2_tab4_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_2_tab4_text"),
            }}
          />
        </div>
      ),
    },
    {
      label: t("seo_4_2_tab5_title"),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_4_2_tab5_text"),
            }}
          />
        </div>
      ),
    },
  ];

  const faqs = [
    {
      value: t("seo_faq_q1_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_faq_q1_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("seo_faq_q2_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_faq_q2_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("seo_faq_q3_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_faq_q3_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("seo_faq_q4_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_faq_q4_text"),
            }}
          />
        </div>
      ),
    },
    {
      value: t("seo_faq_q5_title"),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("seo_faq_q5_text"),
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
                __html: t.raw("seo_hero_title"),
              }}
            />
          </h1>
        </div>
      </div>

      {/* why seo cards section */}
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
                  __html: t.raw("seo_1"),
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
            src={"/img/seo-page.webp"}
            alt="agence-marketing"
            width={500}
            height={500}
            className="aspect-video w-full lg:w-6/12 object-cover h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* services cards section */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {t("seo_2_title")}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>
        </div>

        {/* inner 1 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              unoptimized
              src={"/img/s1.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("seo_2_1_title")}
            </h3>
            <p className="text-secondary text-center">{t("seo_2_1_text")}</p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              unoptimized
              src={"/img/seo-card.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("seo_2_2_title")}
            </h3>
            <p className="text-secondary text-center">{t("seo_2_2_text")}</p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              unoptimized
              src={"/img/finger-up.jpeg"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("seo_2_3_title")}
            </h3>
            <p className="text-secondary text-center">{t("seo_2_3_text")}</p>
          </div>
        </div>
        {/* inner 2 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              unoptimized
              src={"/img/revenues.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("seo_2_4_title")}
            </h3>
            <p className="text-secondary text-center">{t("seo_2_4_text")}</p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              unoptimized
              src={"/img/yes.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("seo_2_5_title")}
            </h3>
            <p className="text-secondary text-center">{t("seo_2_5_text")}</p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              unoptimized
              src={"/img/stars.jpeg"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("seo_2_6_title")}
            </h3>
            <p className="text-secondary text-center">{t("seo_2_6_text")}</p>
          </div>
        </div>
      </section>

      {/* our approach section */}
      <section className="w-full flex flex-col container px-4 my-40 gap-y-20 ">
        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          <Image
            unoptimized
            src={"/img/seo-pc.webp"}
            alt="ad"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-2xl shadow"
          />
          <div className="w-full xl:w-6/12 ">
            <h2 className="text-3xl font-semibold text-gray-600">
              {t("seo_3_title")}{" "}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-4 mb-6"></div>
            <div className="body-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("seo_3_text"),
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

      {/* tabs */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {t("seo_4_title")}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 "></div>
        </div>
        <div className="bg-tabs py-20 px-8 rounded-3xl bg-cover bg-no-repeat">
          <TabsClient tabs={tabs1} />

          <TabsClient tabs={tabs2} />
        </div>
      </section>

      {/* avantages */}
      <section className="w-full flex flex-col container mt-40 gap-y-20 ">
        {/* title subtitle */}

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          {/* icons list */}
          <div className="w-full lg:w-6/12 ">
            <h2 className="gray-section-title !text-primary">
              {t("seo_5_title")}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-6 mb-16"></div>
            <div className="body-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("seo_5_text"),
                }}
              />
            </div>
          </div>
          <Image
            unoptimized
            src={"/img/seo-avantages.webp"}
            alt="google"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full max-h-[450px] xl:max-h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* CTA 2*/}
      <section className="w-full mx-auto max-w-7xl p-4 py-16 ">
        <div className=" bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              {t("cta1_title")}{" "}
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
        <h2 className="text-gray-600 text-3xl font-medium">
          {t("seo_faq_title")}
        </h2>
        <div className="divider"></div>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* other services */}
      <section className="2xl:container flex flex-col items-center mb-16 py-16">
        <h2 className="text-gray-600 text-3xl font-medium">
          {t("other_title")}{" "}
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
          href="/"
          rel="canonical"
        >
          {t("other_seo")}
        </Link>
      </section>
    </div>
  );
}
