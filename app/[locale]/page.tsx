import { CheckIcon } from "@heroicons/react/16/solid";
import { Divider } from "@mantine/core";
import Image from "next/image";
import IconsList from "../_components/homeComponents/IconsList";
import Testimonials from "../_components/homeComponents/Testimonials";
import { useTranslations } from "next-intl";
import ButtonClient from "../_components/ButtonClient";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("nav_home"),
    description: `${t("nav_home")} - ${t("meta_description")}`,
   
  };
}

/* tslint:disable:no-unused-variable */
export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();
  return (
    <div>
      {/* // hero section */}
      <section className="w-full py-28 text-white h-[780px] lg:h-[781px] relative">
        <Image
          alt="Robot("
          src={`/img/hero-home.webp`}
          blurDataURL="/img/hero-home.webp"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          priority
        />
        <div className="absolute bg-dark-secondary left-0 bottom-0 right-0 top-0 bg-opacity-30 z-0"></div>
        <div className="z-10 absolute top-[16%] lg:top-[35%] max-w-6xl mx-auto  left-0 right-0 px-3">
          <h1 className="text-4xl w-full lg:w-1/2">{t("home_hero_title")}</h1>
          <Divider size="lg" className="w-[50px] my-10" />
          <h2 className="text-3xl w-full lg:w-1/2">
            {t("home_hero_subtitle")}
          </h2>
          <div className="mt-10 flex flex-wrap gap-y-6">
            <ButtonClient
              href="/contact"
              variant="filled"
              classes={"!bg-primary hover:!bg-opacity-90 mr-4 "}
              text={t("btn_contact")}
            />

            <ButtonClient
              href="/services"
              variant="outline"
              classes={""}
              color="white"
              text={t("btn_services")}
            />
          </div>
        </div>
      </section>

      {/* // 1st section */}
      <section className="w-full mx-auto max-w-6xl p-4 bottom-arrow relative">
        <div className=" lg:-mt-14  bg-primary px-8 lg:px-16 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center text-center lg:text-left(">
          {/* first div */}
          <div className="lg:w-8/12 ">
            <h2 className="second-title text-white ">{t("home_1_title")}</h2>
            <p className="mt-4 body-text !text-white">{t("home_1_subtitle")}</p>
          </div>
          {/* cta */}
          <div className="mt-10 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-4/12">
            <ButtonClient
              href="/services"
              variant="outline"
              classes={""}
              text={t("btn_services")}
              color="white"
            />
            <ButtonClient
              href="/contact"
              variant="filled"
              classes={"!bg-white !text-black hover:!bg-opacity-90 "}
              text={t("btn_contact")}
            />
          </div>
        </div>
      </section>

      {/* 2nd */}
      <section className="w-full flex flex-wrap lg:flex-nowrap mt-40 gap-y-24">
        {/* first div */}
        <div className="w-full px-4 xl:pl-24 lg:pr-10 lg:w-6/12">
          <p className="body-text(">
            {t("home_2_discover")}
            <span className="text-primary font-bold">VIA Communication</span>,
            {t("home_2_text")}
            <b>
              &nbsp;
              {t("home_2_2_b")}
            </b>
            <br />
            <br />
            {t("home_2_3")}
            <br />
            <br />
            {t("home_2_4")}
            <br />
            <br />
            {t("home_2_5")}
            <b>
              &nbsp;
              {t("home_2_5b")}
            </b>
          </p>
          <ButtonClient
            href="/contact"
            variant="filled"
            classes={
              "!bg-primary hover:!bg-opacity-90 mt-10 !w-full md:!w-6/12"
            }
            text={t("btn_contact")}
          />
        </div>
        <Image
          src={"/img/home-second-section.webp"}
          alt="robot finger"
          width={400}
          height={600}
          className="w-full lg:w-6/12 object-contain"
        />
      </section>

      {/* 3rd */}
      <section className="w-full flex flex-col container my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="section-title"> {t("home_3_title")}</h2>
          <p className="body-text(">{t("home_3_subtitle")}</p>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          <Image
            src={"/img/robot.jpg"}
            alt="robot finger"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-contain max-h-[570px]"
          />
          {/* icons list */}
          <div className="w-full xl:w-5/12 ">
            <IconsList />
          </div>
        </div>
      </section>

      {/* 4th */}
      <section className="my-40 grid grid-cols-1 lg:grid-cols-2">
        {/* first square */}
        <div className="w-full px-4 py-16 lg:py-20 lg:px-14 bg-secondary flex flex-col gap-y-8">
          <h2 className="second-title !text-3xl text-white">
            {t("home_4_1_title")}

            <span className="text-primary">{t("home_4_1_title_tag")}</span>
          </h2>
          <p className="body-text !text-white">
            <span className="text-primary">O</span> {t("home_4_1_1")}
          </p>
          <p className="body-text !text-white">
            <span className="text-primary">O</span> {t("home_4_1_2")}
          </p>
          <ButtonClient
            href="/contact"
            variant="filled"
            classes={
              "!bg-primary hover:!bg-opacity-90 mt-10 !w-full md:!w-6/12 mx-auto"
            }
            text={t("btn_contact")}
          />
        </div>

        {/* second square */}
        <div className="w-full px-4 py-16 lg:py-20 lg:px-14 bg-primary flex flex-col gap-y-8">
          <h2 className="second-title !text-3xl !text-white">
            {t("home_4_2_title")}

            <span className="text-secondary">{t("home_4_2_title_tag")}</span>
          </h2>
          <h3 className="second-title !text-white">{t("home_4_2_subtitle")}</h3>
          <div className="grid grid-cols-1 gap-y-6">
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">{t("home_4_2_1")}</span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">{t("home_4_2_2")}</span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">{t("home_4_2_3")}</span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">{t("home_4_2_4")}</span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">{t("home_4_2_5")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5th */}
      <section className="w-full flex flex-col container my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="section-title mb-4">{t("home_5_title")}</h2>
          <p className="body-text max-w-5xl">{t("home_5_subtitle")}</p>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          <div className="w-full xl:w-6/12 ">
            <div className="flex gap-x-4 items-start ">
              <Image
                src={"/img/facebook-ads.webp"}
                alt=""
                width={100}
                height={100}
                className="object-contain w-[100px]"
              />
              <div className="flex flex-col gap-y-3">
                <h3 className="list-title font-medium">{t("home_5_1_1")}</h3>
                <p className="body-text(">
                  {t("home_5_1_2")}

                  <br />
                  <br />
                  {t("home_5_1_3")}

                  <br />
                  <br />
                  {t("home_5_1_4")}

                  <br />
                  <br />
                  {t("home_5_1_5")}
                </p>
              </div>
            </div>
          </div>
          {/* icons list */}
          <div className="w-full xl:w-6/12 ">
            <div className="flex gap-x-4 items-start ">
              <Image
                src={"/img/campaign.webp"}
                alt=""
                width={100}
                height={100}
                className="object-contain w-[100px]"
              />
              <div className="flex flex-col gap-y-3">
                <h3 className="list-title font-medium">{t("home_5_2_1")}</h3>
                <p className="body-text(">
                  {t("home_5_2_2before")}
                  <span className="text-primary font-medium">
                    {t("home_5_2_2tag")}
                  </span>{" "}
                  {t("home_5_2_2after")}
                  <b> {t("home_5_2_2b")}</b> {t("home_5_2_2after_b")}"
                  <br />
                  <br />
                  {t("home_5_2_3")}
                  <br />
                  <br />
                  {t("home_5_2_4")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 items-start max-w-3xl mx-auto ">
          <Image
            src={"/img/report.webp"}
            alt=""
            width={100}
            height={100}
            className="object-contain w-[100px]"
          />
          <div className="flex flex-col gap-y-3">
            <h3 className="list-title font-medium">{t("home_5_3_1")}</h3>
            <p className="body-text(">
              {t("home_5_3_2")}
              <br />
              <br />
              {t("home_5_3_2before")}
              <b>{t("home_5_3_2b")} </b>
              {t("home_5_3_2after")}
            </p>
          </div>
        </div>
      </section>

      {/* 6th */}
      <section className="w-full flex flex-col container max-w-6xl my-40 ">
        <h2 className="second-title text-center ">{t("home_6_title")}</h2>
        <div className="w-[50px] bg-primary h-1 mx-auto mt-1 mb-16"></div>

        {/* 1st text */}
        <div className="bg-savoir-bg bg-cover bg-no-repeat bg-center">
          <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h3 className="second-title">{t("home_6_1_title")}</h3>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              {t("home_6_1_1")}

              <br />
              <br />
              {t("home_6_1_2before")}

              <span className="text-primary">{t("home_6_1_2tag")}</span>
              {t("home_6_1_2after")}

              <br />
              <br />
              {t("home_6_1_3")}

              <br />
              <br />
              {t("home_6_1_4before")}

              <span className="text-primary">{t("home_6_1_4tag")}</span>
              <br />
              <br />
              {t("home_6_1_5")}
            </p>
          </div>
        </div>

        {/* 2 texts */}
        <div className="grid xl:grid-cols-2 mt-8 gap-x-8 gap-y-8">
          {/* 1st div */}
          <div className="bg-approche-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h3 className="second-title">{t("home_6_2_title")}</h3>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">
                {t("home_6_2_1before")}

                <span className="text-primary">{t("home_6_2_1tag")}</span>
                {t("home_6_2_1after")}
                <br />
                <br />
                {t("home_6_2_2")}

                <br />
                <br />
                {t("home_6_2_3")}

                <br />
                <br />
                {t("home_6_2_4before")}

                <span className="text-primary">{t("home_6_2_4tag")}</span>
              </p>
            </div>
          </div>

          {/* 2nd div */}
          <div className="bg-faire-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h3 className="second-title">{t("home_6_3_title")}</h3>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">
                {t("home_6_3_1")}

                <br />
                <br />
                {t("home_6_3_2before")}

                <span className="text-primary">{t("home_6_3_2tag")}</span>

                <br />
                <br />
                {t("home_6_3_3")}

                <br />
                <br />
                {t("home_6_3_4before")}

                <span className="text-primary">{t("home_6_3_4tag")}</span>
              </p>
            </div>
          </div>
        </div>

        {/* 5th text */}
        <div className="bg-website-bg bg-cover bg-no-repeat bg-center mt-8">
          <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h3 className="second-title">{t("home_6_4_title")}</h3>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              {t("home_6_4_1")}

              <br />
              <br />
              {t("home_6_4_2")}

              <br />
              <br />
              {t("home_6_4_3before")}

              <span className="text-primary">{t("home_6_4_3tag")}</span>
              {t("home_6_4_3after")}
            </p>
          </div>
        </div>

        {/* 6th text */}
        <div className="bg-optimization-seo-bg bg-cover bg-no-repeat bg-center mt-8">
          <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h3 className="second-title">{t("home_6_5_title")}</h3>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              {t("home_6_5_1")}
              <br />
              <br />
              {t("home_6_5_2before1")}
              <span className="text-primary">{t("home_6_5_2tag1")}</span>{" "}
              {t("home_6_5_2after1")}
              <span className="text-primary"> {t("home_6_5_2tag2")}</span>
              {t("home_6_5_2after2")}
              <br />
              <br />
              {t("home_6_5_3before")}
              <span className="text-primary">{t("home_6_5_3tag")}</span>{" "}
              {t("home_6_5_3after")}
              <br />
              <br />
              {t("home_6_5_4")}
            </p>
          </div>
        </div>
      </section>

      {/* 7th section */}
      <section className="w-full bg-secondary text-white text-center px-3 py-20 flex flex-col mt-40 ">
        <h2 className="text-white text-3xl">{t("home_7_title")}</h2>
        <p className="body-text !text-white mt-12 max-w-6xl mx-auto">
          {t("home_7_1before")}
          <span className="text-primary">{t("home_7_1tag")}</span>
          <br />
          <br /> {t("home_7_2")}
          <br />
          <br /> {t("home_7_3")}
        </p>
      </section>

      {/* testimonials */}
      <section className="w-full bg-secondary text-white text-center pb-10 flex flex-col mb-10 ">
        <Testimonials />
      </section>

      {/* 9th section */}
      <section className="w-full bg-white text-white text-center pb-10 flex flex-col mb-20 px-4 max-w-6xl mx-auto ">
        <h2 className="text-secondary uppercase text-2xl font-bold mb-4">
          {t("home_8_title")}
        </h2>
        <h3 className="text-black text-lg">{t("home_8_1")}</h3>
        <div className="grid mt-16 w-full justify-items-center gap-x-6 gap-y-16 lg:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/alzeihmer.webp"}
            alt="logo"
          />
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/centraide.webp"}
            alt="logo"
          />
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/napa.webp"}
            alt="logo"
          />
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/eleganza.webp"}
            alt="logo"
          />
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/ecole.webp"}
            alt="logo"
          />
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/sunspace.webp"}
            alt="logo"
          />
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/crd.webp"}
            alt="logo"
          />
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/oceanick.webp"}
            alt="logo"
          />
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/laplante.jpg"}
            alt="logo"
          />
          <Image
            width={200}
            height={200}
            className="object-contain w-10/12 lg:w-full"
            src={"/img/levis.jpg"}
            alt="logo"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full mx-auto max-w-7xl p-4 ">
        <div className=" bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left(">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              {t("cta1_title")}
            </h2>
            <p className="mt-4 body-text !text-black">{t("cta1_subtitle")}</p>
          </div>
          {/* cta */}
          <div className="mt-10 lg:mt-0 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-3/12">
            <ButtonClient
              href="/contact"
              variant="outline"
              classes="!block !w-full"
              text={t("btn_contact")}
              size="md"
              color="#EE5422"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
