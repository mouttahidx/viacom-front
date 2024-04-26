import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import ButtonClient from "@/app/_components/ButtonClient";
import FaqAccordion from "../../../_components/FaqAccordion";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";


export async function generateMetadata() {
  const t = await getTranslations();
 
  return {
    title: t('nav_fb'),
    description:`${t("nav_fb")} - ${t("meta_description")}`
  };
}

export default function AgenceFacebookAds({params:{locale}}:{params:{locale:string}}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  const faqs = [
    {
      value: t("fb_faq_q1_title"),
      description: (
        <div className="text-primary">
          <Link
            href="/services/agence-google-ads"
            className="font-semibold text-black"
          >
            {t("fb_faq_q1_text1_1link")}
          </Link>{" "}
          {t("fb_faq_q1_text1_before1")}
          <b>{t("fb_faq_q1_text1_b1")}</b>
          {t("fb_faq_q1_text1_after1")}
          <b>{t("fb_faq_q1_text1_b2")}</b>
          {t("fb_faq_q1_text1_after2")}
          <br />
          <br />
          {t("fb_faq_q1_text2_before")}
          <b>{t("fb_faq_q1_text2_b")}</b> {t("fb_faq_q1_text2_after")}
          <br />
          <br />
          {t("fb_faq_q1_text3_before")}
          <b>{t("fb_faq_q1_text3_b")}</b>
          {t("fb_faq_q1_text3_after")}
        </div>
      ),
    },
    {
      value: t("fb_faq_q2_title"),
      description: (
        <div className="text-primary">
          {t("fb_faq_q2_text1_before")}

          <b>{t("fb_faq_q2_text1_b")}</b>

          <br />
          <br />
          {t("fb_faq_q2_text2")}
          <br />
          <br />
          {t("fb_faq_q2_text3_before")}
          <b>{t("fb_faq_q2_text3_b")}</b>
          {t("fb_faq_q2_text3_after")}
        </div>
      ),
    },
    {
      value: t("fb_faq_q3_title"),
      description: (
        <div className="text-primary">
          {t("fb_faq_q3_text1_before")}
          <b> {t("fb_faq_q3_text1_b1")}</b>
          {t("fb_faq_q3_text1_after")}
          <b>{t("fb_faq_q3_text1_b2")}</b>
          <br />
          <br />
          {t("fb_faq_q3_text2")} <br />
          <br />
          {t("fb_faq_q3_text3_before")}
          <b>{t("fb_faq_q3_text3_b")}</b> {t("fb_faq_q3_text3_after")}
        </div>
      ),
    },
  ];



  return (
    <div>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl ">
            {t("fb_hero_title")}
          </h1>
        </div>
      </div>

      {/* 2nd section */}
      <section className="w-full flex flex-col container my-40 gap-y-16 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-start">
          <div className="w-[50px] bg-primary h-1 mt-1 "></div>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          {/* icons list */}
          <div className="w-full xl:w-6/12 ">
            <div className="body-text">
              {t("fb_1_1before")}
              <span className="text-primary">{t("fb_1_1tag")} </span>
              {t("fb_1_1after")} <br />
              <br />
              {t("fb_1_2")} <br />
              <br />
              {t("fb_1_3")} <br />
              <br />
              <ul className="pl-6 list-disc list">
                <li>{t("fb_1_4_1")} </li>
                <li>{t("fb_1_4_2")} </li>
                <li>{t("fb_1_4_3")} </li>
                <li>{t("fb_1_4_4")} </li>
              </ul>
              <br />
              <br />
              {t("fb_1_5before")}{" "}
              <span className="text-primary">{t("fb_1_5tag")} </span>
              {t("fb_1_5after")}{" "}
            </div>
            <ButtonClient
              href={"/contact"}
              variant="filled"
              size="md"
              classes="!bg-primary hover:!bg-opacity-90 mt-10 "
              text={t("btn_contact")}
            />
          </div>
          <Image
            src={"/img/facebook-phone.webp"}
            alt="facebook-phone"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* 3rd section */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold">
            {t("fb_2_title")}{" "}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>

          <p className="body-text">{t("fb_2_subtitle")} </p>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/public.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("fb_2_1_title")}{" "}
            </h3>
            <p className="text-secondary text-center">
              {t("fb_2_1_text_1")}

              <br />
              <br />
              {t("fb_2_1_text_2")}
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/medias.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("fb_2_2_title")}{" "}
            </h3>
            <p className="text-secondary text-center">
              {t("fb_2_2_text_1")}
              <br />
              <br />
              {t("fb_2_2_text_2")}
              <br />
              <br />
              {t("fb_2_2_text_3")}
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/robot-finger.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("fb_2_3_title")}{" "}
            </h3>
            <p className="text-secondary text-center">
              {t("fb_2_3_text_1")}

              <br />
              <br />
              {t("fb_2_3_text_2")}

              <br />
              <br />
              {t("fb_2_3_text_3")}
            </p>
          </div>
        </div>

        {/* inner 2 */}
        <div className="max-w-5xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <Image
              src={"/img/generate.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("fb_2_4_title")}{" "}
            </h3>
            <p className="text-secondary text-center">{t("fb_2_4_text")} </p>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <Image
              src={"/img/marque.jpg"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("fb_2_5_title")}{" "}
            </h3>
            <p className="text-secondary text-center">{t("fb_2_5_text")} </p>
          </div>
        </div>
      </section>

      {/* 4th section */}
      <section className="w-full flex flex-col xl:container px-4 my-40 gap-y-20 ">
        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          <Image
            src={"/img/ad.webp"}
            alt="ad"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-2xl shadow"
          />
          <div className="w-full xl:w-6/12 ">
            <h2 className="text-3xl font-semibold text-gray-600">
              {t("fb_3_title")}{" "}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-1 mb-10"></div>
            <div className="body-text">
              {t("fb_3_1")} <br />
              <br />
              {t("fb_3_2")} <br />
              <br />
              {t("fb_3_3")} <br />
              <br />
              <ul className="pl-6 list-disc list">
                <li>{t("fb_3_4_1")} </li>
                <li>{t("fb_3_4_2")} </li>
                <li>{t("fb_3_4_3")} </li>
              </ul>
              <br />
              <br />
              {t("fb_3_5")}{" "}
            </div>
            <ButtonClient
              href={"/contact"}
              variant="filled"
              size="md"
              classes="!bg-primary hover:!bg-opacity-90 mt-10 "
              text={t("btn_contact")}
            />
          </div>
        </div>
      </section>

      {/* 5th */}
      <section className="w-full flex flex-col xl:container px-4 my-40 text-center">
        <h2 className="text-3xl font-semibold text-gray-600">
          {t("fb_4_title")}{" "}
        </h2>
        <div className="w-[50px] mx-auto bg-primary h-1 mt-8 mb-16"></div>
        {/* inner 2 */}
        <div className="max-w-5xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <p className="text-gray-600 text-left">
              <b>1</b>. {t("fb_4_1")} <br />
              <br />
              <b>2</b>. {t("fb_4_2")} <br />
              <br />
              <b>3</b>. {t("fb_4_3")} <br />
              <br />
              <b>4</b>. {t("fb_4_4")} <br />
              <br />
              <b>5</b>. {t("fb_4_5")}{" "}
            </p>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <p className="text-gray-600 text-left">
              <b>6</b>. {t("fb_4_6")} <br />
              <br />
              <b>7</b>. {t("fb_4_7")} <br />
              <br />
              <b>8</b>. {t("fb_4_8")}{" "}
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-no-repeat bg-cover bg-fixed bg-center my-40 text-center bg-facebook-phone">
        <div className="w-full h-full bg-white bg-opacity-40  p-24">
          <ButtonClient
            href={"/contact"}
            variant="filled"
            size="xl"
            classes="!bg-primary hover:!bg-opacity-90 shadow-xl"
            text={t("btn_contact")}
          />
        </div>
      </section>

      {/* 6th */}
      <section className="w-full flex flex-col xl:container px-4 my-40 text-center">
        <h2 className="text-3xl font-semibold text-gray-600">
          {t("fb_6_title")}
        </h2>
        <h3 className="text-lg font-semibold text-gray-600 mt-2">
          {t("fb_6_subtitle")}
        </h3>
        <div className="w-[50px] mx-auto bg-primary h-1 mt-8 mb-8"></div>

        <p className="text-left mb-16 max-w-7xl mx-auto text-gray-600">
          <b>{t("fb_6_1b1")} </b>
          {t("fb_6_1before")} <b>{t("fb_6_1b2")} </b>
          {t("fb_6_1after")} <br />
          <br />
          {t("fb_6_2")}{" "}
        </p>
        {/* inner 2 */}
        <div className="max-w-6xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <p className="text-gray-600 text-left">
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              {t("fb_6_q_1")}
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              {t("fb_6_q_2")}
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              {t("fb_6_q_3")}
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              {t("fb_6_q_4")}
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              {t("fb_6_q_5")}{" "}
            </p>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <p className="text-gray-600 text-left">
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              {t("fb_6_q_6")}
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              {t("fb_6_q_7")}
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              {t("fb_6_q_8")}
              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              {t("fb_6_q_9")}{" "}
            </p>
          </div>
        </div>

        <div className="w-[80px] bg-primary h-1 my-24 mx-auto"></div>
        {/* inner 3 */}
        <div className="max-w-6xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <div className="text-left text-gray-500">
              {t("fb_7_1before")}{" "}
              <span className="text-primary font-medium">
                {t("fb_7_1tag")}{" "}
              </span>{" "}
              {t("fb_7_1after")} <br />
              <br />
              <ul className="pl-6 list-disc list">
                <li>{t("fb_7_2_1")} </li>
                <li>{t("fb_7_2_2")} </li>
                <li>{t("fb_7_2_3")} </li>
                <li>{t("fb_7_2_4")} </li>
              </ul>
              <br />
              <br />
              {t("fb_7_3")} <br />
              <br />
              {t("fb_7_4")}{" "}
            </div>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <Image
              src={"/img/man.webp"}
              alt="man"
              width={400}
              height={400}
              className="w-full object-cover bg-center max-h-[450px] rounded-2xl shadow"
            />
          </div>
        </div>
      </section>

      {/* text image */}
      <section className="w-full bg-no-repeat bg-cover bg-fixed bg-center mt-40 text-center bg-phone-icons">
        <div className="w-full h-full bg-white bg-opacity-40  p-24">
          <ButtonClient
            variant="filled"
            size="xl"
            classes="!bg-primary hover:!bg-opacity-90 shadow-xl"
            href="/contact"
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
      <section className="2xl:container flex flex-col items-center mt-10 py-24 border-t border-secondary">
        <h2 className="text-gray-600 text-3xl font-medium">
          {t("fb_faq_title")}{" "}
        </h2>
        <div className="divider"></div>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* other services */}
      <section className="2xl:container flex flex-col items-center mb-16 py-16">
        <h2 className="text-gray-600 text-3xl font-medium">
          {t("other_title")}
        </h2>{" "}
        <div className="divider"></div>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/"
          rel="canonical"
        >
          {t("other_web")}
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-seo"
        >
          {t("other_seo")}{" "}
        </Link>
      </section>
    </div>
  );
}
