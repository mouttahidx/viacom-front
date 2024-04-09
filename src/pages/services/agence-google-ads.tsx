import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { Accordion, Button, Tabs } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

export default function AgenceGoogleAds() {
  const intl = useIntl();
  const faqs = [
    {
      value:
        intl.formatMessage({id:"google.faq.q1.title"}),
      description: (
        <div
          className="text-primary"
          style={{ color: "#F05423" }}
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "google.faq.q1.text" }),
          }}
        />
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

  const tabs = [
    {
      label: intl.formatMessage({ id: "google.4.tab1.title" }),
      text: (
        <div>
          {intl.formatMessage({ id: "google.4.tab1.text1" })}
          <br />
          <br />
          {intl.formatMessage({ id: "google.4.tab1.text2" })}
          <br />
          <br />
          {intl.formatMessage({ id: "google.4.tab1.text3" })}
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "google.4.tab2.title" }),
      text: (
        <div>
          {intl.formatMessage({ id: "google.4.tab2.text1" })}
          <br />
          <br />
          {intl.formatMessage({ id: "google.4.tab2.text2" })}
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "google.4.tab3.title" }),
      text: (
        <div>
          {intl.formatMessage({ id: "google.4.tab3.text1" })}

          <br />
          <br />
          {intl.formatMessage({ id: "google.4.tab3.text2" })}
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "google.4.tab4.title" }),
      text: (
        <div>
          {intl.formatMessage({ id: "google.4.tab4.text1" })}
          <br /> <br />
          {intl.formatMessage({ id: "google.4.tab4.text2" })}
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "google.4.tab5.title" }),
      text: (
        <div>
          {intl.formatMessage({ id: "google.4.tab5.text1" })}

          <br />
          <br />
          {intl.formatMessage({ id: "google.4.tab5.text2" })}

          <br />
          <br />
          {intl.formatMessage({ id: "google.4.tab5.text3" })}

          <br />
          <br />
          {intl.formatMessage({ id: "google.4.tab5.text4" })}
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: "google.4.tab6.title" }),
      text: <div>{intl.formatMessage({ id: "google.4.tab6.text" })}</div>,
    },
    {
      label: intl.formatMessage({ id: "google.4.tab7.title" }),
      text: (
        <div
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "google.4.tab7.text1" }),
          }}
        />
      ),
    },
  ];

  return (
    <div>
      <Head>
        <title>VIA Communication - Google ADS</title>
      </Head>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl ">
            <FormattedMessage id="google.hero.title" />
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
            <div className="body-text">
              <FormattedMessage id="google.1.1" />
              <br />
              <br />
              <FormattedMessage id="google.1.2" />
              <br />
              <br /> <FormattedMessage id="google.1.3" />
              <br />
              <br />
              <FormattedMessage id="google.1.4" />
            </div>
            <Button
              component={Link}
              href={"/contact"}
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >
              <FormattedMessage id="btn.contact" />
            </Button>
          </div>
          <Image
            src={"/img/google-page.webp"}
            alt="google"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full rounded-3xl shadow"
          />
        </div>
      </section>

      {/* 9 cards section */}
      <section className="w-full flex flex-col xl:container my-40 gap-y-20 px-2 ">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl capitalize font-semibold text-gray-600">
            <FormattedMessage id="google.2.title" />
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>
        </div>

        {/* inner 1 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/visibility.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              <FormattedMessage id="google.2.1.title" />
            </h4>
            <p className="text-secondary text-center">
              <FormattedMessage id="google.2.1.text" />
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/fast.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              <FormattedMessage id="google.2.2.title" />
            </h4>
            <p className="text-secondary text-center">
              <FormattedMessage id="google.2.2.text1" />

              <br />
              <br />
              <FormattedMessage id="google.2.2.text2" />
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/target.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              <FormattedMessage id="google.2.3.title" />
            </h4>
            <p className="text-secondary text-center">
              <FormattedMessage id="google.2.3.text1" />

              <br />
              <br />
              <FormattedMessage id="google.2.3.text2" />
            </p>
          </div>
        </div>
        {/* inner 2 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/mesures.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              <FormattedMessage id="google.2.4.title" />
            </h4>
            <p className="text-secondary text-center">
              <FormattedMessage id="google.2.4.text1" />

              <br />
              <br />
              <FormattedMessage id="google.2.4.text2" />
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/budget.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              <FormattedMessage id="google.2.5.title" />
            </h4>
            <p className="text-secondary text-center">
              <FormattedMessage id="google.2.5.text1" />

              <br />
              <br />
              <FormattedMessage id="google.2.5.text2" />
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/notor.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary text-center">
              <FormattedMessage id="google.2.6.title" />
            </h4>
            <p className="text-secondary text-center">
              <FormattedMessage id="google.2.6.text" />
            </p>
          </div>
        </div>
        {/* inner 3 */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-4 2xl:gap-x-16">
          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/roi.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              <FormattedMessage id="google.2.7.title" />
            </h4>
            <p className="text-secondary text-center">
              <FormattedMessage id="google.2.7.text" />
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/ppc.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              <FormattedMessage id="google.2.8.title" />
            </h4>
            <p className="text-secondary text-center">
              <FormattedMessage id="google.2.8.text" />
            </p>
          </div>

          <div className="w-full xl:w-4/12 flex flex-col items-center">
            <Image
              src={"/img/up.webp"}
              alt=""
              width={400}
              height={400}
              className="w-full object-cover h-[280px] rounded-3xl hover:scale-105 duration-500"
            />
            <h4 className="text-xl font-semibold my-6 text-secondary">
              <FormattedMessage id="google.2.9.title" />
            </h4>
            <p className="text-secondary text-center">
              <FormattedMessage id="google.2.9.text" />
            </p>
          </div>
        </div>
      </section>

      {/* why google ads */}
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
              <FormattedMessage id="google.3.title" />
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-1 mb-10"></div>
            <p className="body-text">
              <FormattedMessage id="google.3.1" />
            </p>
            <h3 className="text-2xl font-semibold text-gray-600 my-12 ">
              <FormattedMessage id="google.3.2.title" />
            </h3>
            <div className="body-text">
              <FormattedMessage id="google.3.2" />

              <br />
              <br />
              <FormattedMessage id="google.3.3" />

              <br />
              <br />
              <FormattedMessage id="google.3.4" />

              <br />
              <br />
              <FormattedMessage id="google.3.5" />
            </div>
            <Button
              component={Link}
              href={"/contact"}
              variant="filled"
              size="md"
              className="!bg-primary hover:!bg-opacity-90 mt-10 "
            >
              <FormattedMessage id="btn.contact" />
            </Button>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="w-full flex flex-col xl:container my-40 px-2 ">
        <h2 className="gray-section-title text-center">
          <FormattedMessage id="google.4.title" />
        </h2>
        <div className="divider"></div>
        <h4 className="text-2xl text-gray-600 mb-8 font-semibold">
          1. <FormattedMessage id="google.4.1" />
        </h4>
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

        <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          2. <FormattedMessage id="google.4.2" />
        </h4>
        <div
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "google.4.2.text" }),
          }}
        />

        <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          3. <FormattedMessage id="google.4.3" />
        </h4>
        <div className="text-gray-500">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "google.4.3.text" }),
            }}
          />
        </div>

        <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          4. <FormattedMessage id="google.4.4" />
        </h4>
        <div className="text-gray-500">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "google.4.4.text" }),
            }}
          />
        </div>

        <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          5. <FormattedMessage id="google.4.5" />
        </h4>
        <div className="text-gray-500">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "google.4.5.text" }),
            }}
          />
        </div>
      </section>

      {/* avantages */}
      <section className="w-full flex flex-col container my-40 gap-y-20 ">
        {/* title subtitle */}

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16 items-center">
          {/* icons list */}
          <div className="w-full lg:w-6/12 ">
            <h2 className="gray-section-title !text-primary">
              {intl.formatMessage({ id: "google.5.title" })}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-6 mb-16"></div>
            <p className="body-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "google.5.subtitle" }),
                }}
              />
            </p>
            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              1. <FormattedMessage id="google.5.1.title" />
            </h4>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "google.5.1.text" }),
                }}
              />
            </div>

            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              2. <FormattedMessage id="google.5.2.title" />
            </h4>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "google.5.2.text" }),
                }}
              />
            </div>

            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              3. <FormattedMessage id="google.5.3.title" />
            </h4>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "google.5.3.text" }),
                }}
              />
            </div>

            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              4. <FormattedMessage id="google.5.4.title" />
            </h4>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "google.5.4.text" }),
                }}
              />
            </div>

            <h4 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              5. <FormattedMessage id="google.5.5.title" />
            </h4>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "google.5.5.text" }),
                }}
              />
            </div>
          </div>
          <Image
            src={"/img/agence-ads.webp"}
            alt="google"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-cover h-full max-h-[450px] xl:max-h-full rounded-3xl shadow"
          />
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
          >
            {intl.formatMessage({ id: "btn.contact" })}
          </Button>
        </div>
      </section>

      {/* competences */}
      <section className="w-full flex flex-col xl:container my-40 px-2 ">
        <h2 className="gray-section-title text-center">
          <FormattedMessage id="google.6.title" />
        </h2>
        <div className="divider"></div>
        <div className="text-gray-600">
        <span dangerouslySetInnerHTML={{__html:
              intl.formatMessage({ id: "google.6.text" })
              }} />
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
              {intl.formatMessage({ id: "btn.contact" })}{" "}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 py-24 border-t border-secondary">
        <h2 className="text-gray-600 text-3xl font-medium">
          {intl.formatMessage({ id: "google.faq.title" })}
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
          {intl.formatMessage({ id: "other.title" })}
        </h2>
        <div className="divider"></div>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-seo"
        >
          {intl.formatMessage({ id: "other.seo" })}
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-facebook-ads"
        >
          {intl.formatMessage({ id: "other.fb" })}
        </Link>
      </section>
    </div>
  );
}
