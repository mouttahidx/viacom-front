import { Button, Divider } from "@mantine/core";
import IconsList from "@/app/_components/servicesComponents/IconsList";
import Image from "next/image";
import { Link } from "@/navigation";
import Head from "next/head";
import { useTranslations } from "next-intl";
import ButtonClient from "@/app/_components/ButtonClient";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();
 
  return {
    title: t('services_hero_title'),
    description:`${t("services_hero_title")} - ${t("meta_description")}`
  };
}

export default function Page({params:{locale}}:{params:{locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div>
      {/* // hero section */}
      <section className="w-full py-28 text-white h-[780px] lg:h-[781px] bg-services-hero-bg bg-cover bg-no-repeat bg-center relative">
        <div className="absolute bg-dark-secondary left-0 bottom-0 right-0 top-0 bg-opacity-50 z-0"></div>
        <div className="z-10 absolute top-[16%] lg:top-[35%] max-w-6xl mx-auto  left-0 right-0 px-3">
          <h1 className="text-4xl w-full">{t("services_hero_title")}</h1>
          <Divider size="lg" className="w-[50px] my-10" />
          <h2 className="text-3xl w-full">{t("services_hero_subtitle")}</h2>
          <ButtonClient
            href="/contact"
            variant="filled"
            classes={"!bg-primary hover:!bg-opacity-90 mt-10 "}
            text={t("btn_contact")}
          />
        </div>
      </section>

      {/* 2nd section */}
      <section className="w-full flex flex-col container my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize">{t("services_1_title")} </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-1 mb-10"></div>

          <p className="body-text">{t("services_1_subtitle")} </p>
        </div>

        {/* inner section */}
        <div className="max-w-6xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          {/* icons list */}
          <div className="w-full xl:w-6/12 ">
            <IconsList />
          </div>
          <Image
            unoptimized
            src={"/img/robot-finger.webp"}
            alt="robot finger"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover max-h-[670px]"
          />
        </div>
      </section>

      {/* 3rd section */}
      <section className="w-full flex flex-col container max-w-6xl my-40 ">
        <h2 className="second-title text-center ">{t("services_2_title")}</h2>
        <div className="w-[50px] bg-primary h-1 mx-auto mt-1 mb-16"></div>

        {/* 1st text */}
        <div className="bg-savoir-bg bg-cover bg-no-repeat bg-center">
          <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h3 className="second-title">{t("services_2_1_title")}</h3>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">{t("services_2_1_text")}</p>

            <ButtonClient
              href={"/"}
              variant="outline"
              color="white"
              classes="mt-8 hover:scale-105 duration-300"
              text={t("btn_more")}
            />
          </div>
        </div>

        {/* 2 texts */}
        <div className="grid xl:grid-cols-2 mt-8 gap-x-8 gap-y-8">
          {/* 1st div */}
          <div className="bg-approche-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h3 className="second-title">{t("services_2_2_title")}</h3>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">{t("services_2_2_text")}</p>

              <ButtonClient
                href={"/services/agence-facebook-ads"}
                variant="outline"
                color="white"
                classes="mt-8 hover:scale-105 duration-300"
                text={t("btn_more")}
              />
            </div>
          </div>

          {/* 2nd div */}
          <div className="bg-faire-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h3 className="second-title">{t("services_2_3_title")}</h3>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">{t("services_2_3_text")}</p>
              <ButtonClient
                href={"/services/agence-google-ads"}
                variant="outline"
                color="white"
                classes="mt-8 hover:scale-105 duration-300"
                text={t("btn_more")}
              />
            </div>
          </div>
        </div>

        {/* 5th text */}
        <div className="bg-website-bg bg-cover bg-no-repeat bg-center mt-8">
          <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h3 className="second-title">{t("services_2_4_title")}</h3>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">{t("services_2_4_text")}</p>
          </div>
        </div>
      </section>

      {/* last section */}
      <section className="w-full text-center px-1 mt-40 border-b border-white bg-secondary py-24 text-white">
        <div className="max-w-6xl mx-auto  flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl">{t("cta3_title")} </h2>
          <p className="!text-white body-text mt-8 !font-light">
            {t("cta3_text")}{" "}
          </p>
          <ButtonClient
            href={"/contact"}
            variant="outline"
            color="white"
            size="md"
            classes="w-fit mt-10"
            text={t("btn_contact")}
          />
        </div>
      </section>
    </div>
  );
}
