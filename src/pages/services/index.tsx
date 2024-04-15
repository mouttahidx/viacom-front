import { Button, Divider } from "@mantine/core";
import React from "react";
import IconsList from "../components/servicesComponents/IconsList";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useIntl } from "react-intl";

export default function Services() {
  const intl = useIntl();

  return (
    <div>
      <Head>
        <title>
          {`${intl.formatMessage({ id: "nav.services" })}`}
        </title>
          <meta
          name="description"
          content={`${intl.formatMessage({ id: "nav.services" })} - ${intl.formatMessage({ id: "meta.description" })}`}

        />
      </Head>
      {/* // hero section */}
      <section className="w-full py-28 text-white h-[780px] lg:h-[781px] bg-services-hero-bg bg-cover bg-no-repeat bg-center relative">
        <div className="absolute bg-dark-secondary left-0 bottom-0 right-0 top-0 bg-opacity-50 z-0"></div>
        <div className="z-10 absolute top-[16%] lg:top-[35%] max-w-6xl mx-auto  left-0 right-0 px-3">
          <h1 className="text-4xl w-full">
            {intl.formatMessage({ id: "services.hero.title" })}
          </h1>
          <Divider size="lg" className="w-[50px] my-10" />
          <h2 className="text-3xl w-full">
            {intl.formatMessage({ id: "services.hero.subtitle" })}
          </h2>

          <Button
            component={Link}
            href={"/contact"}
            variant="filled"
            className="!bg-primary hover:!bg-opacity-90 mt-10 "
          >
            {intl.formatMessage({ id: "btn.contact" })}
          </Button>
        </div>
      </section>

      {/* 2nd section */}
      <section className="w-full flex flex-col container my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize">
            {intl.formatMessage({ id: "services.1.title" })}{" "}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-1 mb-10"></div>

          <p className="body-text">
            {intl.formatMessage({ id: "services.1.subtitle" })}{" "}
          </p>
        </div>

        {/* inner section */}
        <div className="max-w-6xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          {/* icons list */}
          <div className="w-full xl:w-6/12 ">
            <IconsList />
          </div>
          <Image
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
        <h2 className="second-title text-center ">
          {intl.formatMessage({ id: "services.2.title" })}
        </h2>
        <div className="w-[50px] bg-primary h-1 mx-auto mt-1 mb-16"></div>

        {/* 1st text */}
        <div className="bg-savoir-bg bg-cover bg-no-repeat bg-center">
          <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h3 className="second-title">
              {intl.formatMessage({ id: "services.2.1.title" })}
            </h3>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              {intl.formatMessage({ id: "services.2.1.text" })}
            </p>

            <Button
              component={Link}
              href={"/"}
              rel="canonical"
              variant="outline"
              color="white"
              className="mt-8 hover:scale-105 duration-300"
            >
              {intl.formatMessage({ id: "btn.more" })}
            </Button>
          </div>
        </div>

        {/* 2 texts */}
        <div className="grid xl:grid-cols-2 mt-8 gap-x-8 gap-y-8">
          {/* 1st div */}
          <div className="bg-approche-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h3 className="second-title">
              {intl.formatMessage({ id: "services.2.2.title" })}
            </h3>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              {intl.formatMessage({ id: "services.2.2.text" })}
            </p>
              <Button
                component={Link}
                href={"/services/agence-facebook-ads"}
                variant="outline"
                color="white"
                className="mt-8 hover:scale-105 duration-300"
              >
                {intl.formatMessage({ id: "btn.more" })}
              </Button>
            </div>
          </div>

          {/* 2nd div */}
          <div className="bg-faire-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h3 className="second-title">
              {intl.formatMessage({ id: "services.2.3.title" })}
            </h3>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              {intl.formatMessage({ id: "services.2.3.text" })}
            </p>
              <Button
                component={Link}
                href={"/services/agence-google-ads"}
                variant="outline"
                color="white"
                className="mt-8 hover:scale-105 duration-300"
              >
                {intl.formatMessage({ id: "btn.more" })}
              </Button>
            </div>
          </div>
        </div>

        {/* 5th text */}
        <div className="bg-website-bg bg-cover bg-no-repeat bg-center mt-8">
          <div className="w-full pt-10 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
          <h3 className="second-title">
              {intl.formatMessage({ id: "services.2.4.title" })}
            </h3>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              {intl.formatMessage({ id: "services.2.4.text" })}
            </p>
          </div>
        </div>
      </section>

      {/* last section */}
      <section className="w-full text-center px-1 mt-40 border-b border-white bg-secondary py-24 text-white">
        <div className="max-w-6xl mx-auto  flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl">
          {intl.formatMessage({ id: "cta3.title" })}
          </h2>
          <p className="!text-white body-text mt-8 !font-light">
          {intl.formatMessage({ id: "cta3.text" })}

          </p>
          <Button
            component={Link}
            href={"/contact"}
            variant="outline"
            color="white"
            size="md"
            className="w-fit mt-10"
          >
          {intl.formatMessage({ id: "btn.contact" })}

            </Button>
        </div>
      </section>
    </div>
  );
}
