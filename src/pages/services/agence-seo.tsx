import { Accordion, Button, Tabs } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";

export default function AgenceSeo() {
  const intl = useIntl();
  const tabs1 = [
    {
      label: intl.formatMessage({ id: "seo.4.tab1.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.tab1.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "seo.4.tab2.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.tab2.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "seo.4.tab3.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.tab3.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "seo.4.tab4.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.tab4.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "seo.4.tab5.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.tab5.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "seo.4.tab6.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.tab6.text" }),
            }}
          />
        </div>
      ),
    },
  ];

  const tabs2 = [
    {
      label: intl.formatMessage({ id: "seo.4.2.tab1.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.2.tab1.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "seo.4.2.tab2.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.2.tab2.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "seo.4.2.tab3.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.2.tab3.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "seo.4.2.tab4.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.2.tab4.text" }),
            }}
          />
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "seo.4.2.tab5.title" }),
      text: (
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.4.2.tab5.text" }),
            }}
          />
        </div>
      ),
    },
  ];

  const faqs = [
    {
      value: intl.formatMessage({ id: "seo.faq.q1.title" }),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.faq.q1.text" }),
            }}
          />
        </div>
      ),
    },
    {
      value: intl.formatMessage({ id: "seo.faq.q2.title" }),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.faq.q2.text" }),
            }}
          />
        </div>
      ),
    },
    {
      value: intl.formatMessage({ id: "seo.faq.q3.title" }),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.faq.q3.text" }),
            }}
          />
        </div>
      ),
    },
    {
      value: intl.formatMessage({ id: "seo.faq.q4.title" }),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.faq.q4.text" }),
            }}
          />
        </div>
      ),
    },
    {
      value: intl.formatMessage({ id: "seo.faq.q5.title" }),
      description: (
        <div className="text-primary">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "seo.faq.q5.text" }),
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
        <title>
          {`${intl.formatMessage({ id: "nav.seo" })}`}
        </title>
        <meta
          name="description"
          content={`${intl.formatMessage({ id: "nav.seo" })} - ${intl.formatMessage({ id: "meta.description" })}`}

        />
      </Head>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl">
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "seo.hero.title" }),
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
                  __html: intl.formatMessage({ id: "seo.1" }),
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
            {intl.formatMessage({ id: "seo.2.title" })}
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>
        </div>

        {/* inner 1 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/s1.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {intl.formatMessage({ id: "seo.2.1.title" })}
            </h3>
            <p className="text-secondary text-center">
              {intl.formatMessage({ id: "seo.2.1.text" })}
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/seo-card.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {intl.formatMessage({ id: "seo.2.2.title" })}
            </h3>
            <p className="text-secondary text-center">
              {intl.formatMessage({ id: "seo.2.2.text" })}
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/finger-up.jpeg"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {intl.formatMessage({ id: "seo.2.3.title" })}
            </h3>
            <p className="text-secondary text-center">
              {intl.formatMessage({ id: "seo.2.3.text" })}
            </p>
          </div>
        </div>
        {/* inner 2 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/revenues.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {intl.formatMessage({ id: "seo.2.4.title" })}
            </h3>
            <p className="text-secondary text-center">
              {intl.formatMessage({ id: "seo.2.4.text" })}
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/yes.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {intl.formatMessage({ id: "seo.2.5.title" })}
            </h3>
            <p className="text-secondary text-center">
              {intl.formatMessage({ id: "seo.2.5.text" })}
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/stars.jpeg"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] max-h-[380px] rounded-3xl hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {intl.formatMessage({ id: "seo.2.6.title" })}
            </h3>
            <p className="text-secondary text-center">
              {intl.formatMessage({ id: "seo.2.6.text" })}
            </p>
          </div>
        </div>
      </section>

      {/* our approach section */}
      <section className="w-full flex flex-col container px-4 my-40 gap-y-20 ">
        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          <Image
            src={"/img/seo-pc.webp"}
            alt="ad"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-2xl shadow"
          />
          <div className="w-full xl:w-6/12 ">
            <h2 className="text-3xl font-semibold text-gray-600">
              {intl.formatMessage({ id: "seo.3.title" })}{" "}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-4 mb-6"></div>
            <div className="body-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "seo.3.text" }),
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

      {/* tabs */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            {intl.formatMessage({ id: "seo.4.title" })}
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
            defaultValue={tabs1[0].label}
          >
            <Tabs.List justify="start">
              {tabs1.map((item) => (
                <Tabs.Tab value={item.label} key={item.label}>
                  {item.label}
                </Tabs.Tab>
              ))}
              {tabs1.map((item) => (
                <Tabs.Panel value={item.label} key={item.label}>
                  {item.text}
                </Tabs.Panel>
              ))}
            </Tabs.List>
          </Tabs>
          <Tabs
            color="orange"
            orientation="horizontal"
            classNames={{
              root: "bg-black bg-opacity-70 text-white border-white border mt-10",
              panel: "px-2 lg:p-8 py-10",
              tabLabel:
                "text-lg hover:text-primary focus-within:text-primary active:text-primary",
              tab: " hover:bg-transparent",
            }}
            defaultValue={tabs2[0].label}
          >
            <Tabs.List justify="start">
              {tabs2.map((item) => (
                <Tabs.Tab value={item.label} key={item.label}>
                  {item.label}
                </Tabs.Tab>
              ))}
              {tabs2.map((item) => (
                <Tabs.Panel value={item.label} key={item.label}>
                  {item.text}
                </Tabs.Panel>
              ))}
            </Tabs.List>
          </Tabs>
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
              {intl.formatMessage({ id: "seo.5.title" })}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-6 mb-16"></div>
            <div className="body-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "seo.5.text" }),
                }}
              />
            </div>
          </div>
          <Image
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
              {intl.formatMessage({ id: "cta1.title" })}{" "}
            </h2>
            <p className="mt-4 body-text !text-black lg:w-10/12">
              {intl.formatMessage({ id: "cta1.subtitle" })}
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
              {intl.formatMessage({ id: "btn.contact" })}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 pb-24">
        <h2 className="text-gray-600 text-3xl font-medium">
          {intl.formatMessage({ id: "seo.faq.title" })}
        </h2>
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
          {intl.formatMessage({ id: "other.title" })}{" "}
        </h2>
        <div className="divider"></div>

        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-facebook-ads"
        >
          {intl.formatMessage({ id: "other.fb" })}
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-google-ads"
        >
          {intl.formatMessage({ id: "other.google" })}
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/"
          rel="canonical"
        >
          {intl.formatMessage({ id: "other.seo" })}
        </Link>
      </section>
    </div>
  );
}
