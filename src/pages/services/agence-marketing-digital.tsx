import { Accordion, Button, Tabs } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";

export default function AgenceMarketingDigital() {
  const intl = useIntl();

  const tabs = [
    {
      label: intl.formatMessage({ id: "marketing.4.tab1.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "marketing.4.tab1.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "marketing.4.tab2.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "marketing.4.tab2.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "marketing.4.tab3.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "marketing.4.tab3.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "marketing.4.tab4.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "marketing.4.tab4.text" }),
            }}
          />
        </div>
      ),
    },
  ];

  const faqs = [
    {
      value: intl.formatMessage({ id: "marketing.faq.q1.title" }),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "marketing.faq.q1.text" }),
            }}
          />
        </div>
      ),
    },
  ];
  const faqItems = faqs.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control className="!text-lg !py-4">
        {item.value}
      </Accordion.Control>
      <Accordion.Panel className="!text-base">
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div>
      <Head>
        <title>VIA Communication - Marketing Digital</title>
      </Head>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl">
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "marketing.hero.title" }),
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
                  __html: intl.formatMessage({ id: "marketing.1" }),
                }}
              />
            </div>
            <Button
              component={Link}
              href={"/contact"}
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >
              {intl.formatMessage({ id: "btn.contact" })}
            </Button>
          </div>
          <Image
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
            src={"/img/why-us.webp"}
            alt="ad"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-2xl shadow"
          />
          <div className="w-full xl:w-6/12 ">
            <h2 className="text-3xl font-semibold text-gray-600">
              {intl.formatMessage({ id: "marketing.2.title" })}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-4 mb-6"></div>
            <div className="body-text">
              <ul
                className="list-disc pl-6"
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "marketing.2.text" }),
                }}
              />
            </div>
            <Button
              component={Link}
              href={"/contact"}
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >
              {intl.formatMessage({ id: "btn.contact" })}
            </Button>
          </div>
        </div>
      </section>

      {/* services cards section */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {intl.formatMessage({ id: "marketing.3.title" })}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>
        </div>

        {/* inner 1 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <Link
            href={"/"}
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              src={"/img/website-creation.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
            {intl.formatMessage({ id: "marketing.3.1.title" })}
            </h4>
            <p className="text-secondary text-center">
            {intl.formatMessage({ id: "marketing.3.1.text" })}
            </p>
          </Link>

          <Link
            href={"/services/agence-seo"}
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              src={"/img/seo-card.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
            {intl.formatMessage({ id: "marketing.3.2.title" })}
            </h4>
            <p className="text-secondary text-center">
            {intl.formatMessage({ id: "marketing.3.2.text" })}
            </p>
          </Link>

          <Link
            href="/services/agence-google-ads"
            className="w-full xl:w-4/12 flex flex-col items-center"
          >
            <Image
              src={"/img/sem.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
            {intl.formatMessage({ id: "marketing.3.3.title" })}
            </h4>
            <p className="text-secondary text-center">
            {intl.formatMessage({ id: "marketing.3.3.text" })}
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
              src={"/img/facebook-phone.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
            {intl.formatMessage({ id: "marketing.3.4.title" })}
            </h4>
            <p className="text-secondary text-center">
            {intl.formatMessage({ id: "marketing.3.4.text" })}
            </p>
          </Link>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/kpi.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
           <h4 className="text-xl font-semibold my-6 text-secondary">
            {intl.formatMessage({ id: "marketing.3.5.title" })}
            </h4>
            <p className="text-secondary text-center">
            {intl.formatMessage({ id: "marketing.3.5.text" })}
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
            {intl.formatMessage({ id: "marketing.4.title" })}{" "}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 "></div>
        </div>
        <div className="bg-tabs py-20 px-8 rounded-3xl bg-cover bg-no-repeat">
          <Tabs
            color="orange"
            orientation="horizontal"
            classNames={{
              root: "bg-black bg-opacity-70 text-white border-white border",
              panel: "px-2 lg:p-8 py-10",
              tabLabel:
                "text-lg hover:text-primary focus-within:text-primary active:text-primary",
              tab: " hover:bg-transparent",
            }}
            defaultValue={tabs[0].label}
          >
            <Tabs.List justify="start">
              {tabs.map((item) => (
                <Tabs.Tab value={item.label} key={item.label}>
                  {item.label}
                </Tabs.Tab>
              ))}
              {tabs.map((item) => (
                <Tabs.Panel value={item.label} key={item.label}>
                  {item.text}
                </Tabs.Panel>
              ))}
            </Tabs.List>
          </Tabs>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-no-repeat bg-cover bg-fixed bg-center mt-40 text-center bg-google-cta">
        <div className="w-full h-full bg-white bg-opacity-40  p-24">
          <Button
            component={Link}
            href={"/contact"}
            variant="filled"
            size="xl"
            className="!bg-primary hover:!bg-opacity-90 shadow-xl"
          >{`Contactez-nous`}</Button>
        </div>
      </section>

      {/* CTA 2*/}
      <section className="w-full mx-auto max-w-7xl p-4 py-16 ">
        <div className=" bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              Appelez-nous ou envoyez un courriel
            </h2>
            <p className="mt-4 body-text !text-black lg:w-10/12">
              Nous sommes à l’écoute pour répondre à vos questions et vous
              proposer la meilleure solution
            </p>
          </div>
          {/* cta */}
          <div className="mt-10 lg:mt-0 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-3/12">
            <Button
              component={Link}
              href={"/contact"}
              variant="outline"
              color="#EE5422"
              className="!block !w-full"
              size="md"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 pb-24">
        <h2 className="text-gray-600 text-3xl font-medium">FAQ</h2>
        <div className="divider"></div>
        <Accordion
          defaultValue=""
          chevronPosition="left"
          className="text-2xl border w-full max-w-7xl"
          classNames={{
            label: "!text-secondary !font-semibold",
            chevron: "!text-primary !w-5 !h-5",
            panel: "!p-1 xl:!p-4",
          }}
          transitionDuration={500}
        >
          {faqItems}
        </Accordion>
      </section>

      {/* other services */}
      <section className="2xl:container flex flex-col items-center mb-16 py-16">
        <h2 className="text-gray-600 text-3xl font-medium">
          Nos autres services
        </h2>
        <div className="divider"></div>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-seo"
        >
          Référencement naturel - SEO
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-facebook-ads"
        >
          Facebook Ads
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-google-ads"
        >
          Google Ads - SEA
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/"
        >
          Conception web
        </Link>
      </section>
    </div>
  );
}
