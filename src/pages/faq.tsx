import { PlusIcon } from "@heroicons/react/20/solid";
import { Accordion } from "@mantine/core";
import Head from "next/head";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

export default function Faq() {
  const intl = useIntl();

  const faqs = [
    {
      value: intl.formatMessage({ id: "faq.q.1.title" }),
      description: (
        <div className="">{intl.formatMessage({ id: "faq.q.1.text" })}</div>
      ),
    },
    {
      value: intl.formatMessage({ id: "faq.q.2.title" }),
      description: (
        <div className="">{intl.formatMessage({ id: "faq.q.2.text" })}</div>
      ),
    },
    {
      value: intl.formatMessage({ id: "faq.q.3.title" }),
      description: (
        <div className="">{intl.formatMessage({ id: "faq.q.3.text" })}</div>
      ),
    },
    {
      value: intl.formatMessage({ id: "faq.q.4.title" }),
      description: (
        <div className="">{intl.formatMessage({ id: "faq.q.4.text" })}</div>
      ),
    },
    {
      value: intl.formatMessage({ id: "faq.q.5.title" }),
      description: (
        <div className="">{intl.formatMessage({ id: "faq.q.5.text" })}</div>
      ),
    },
    {
      value: intl.formatMessage({ id: "faq.q.6.title" }),
      description: (
        <div className="">{intl.formatMessage({ id: "faq.q.6.text" })}</div>
      ),
    },
    {
      value: intl.formatMessage({ id: "faq.q.7.title" }),
      description: (
        <div className="">
          {intl.formatMessage({ id: "faq.q.7.text" })}

          <a
            href="https://www.facebook.com/VIACommunication/"
            target="_blank"
            className="text-primary font-medium block"
          >
            Facebook
          </a>
        </div>
      ),
    },
    {
      value: intl.formatMessage({ id: "faq.q.8.title" }),
      description: (
        <div className="">{intl.formatMessage({ id: "faq.q.8.text" })}</div>
      ),
    },
    {
      value: intl.formatMessage({ id: "faq.q.9.title" }),
      description: (
        <div className="">{intl.formatMessage({ id: "faq.q.9.text" })}</div>
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
      <meta
          name="description"
          content={`${intl.formatMessage({ id: "nav.faq" })} - ${intl.formatMessage({ id: "meta.description" })}`}
        />
        <title>
          {`${intl.formatMessage({ id: "nav.faq" })}`}
        </title>
      </Head>
      {/* hero */}
      <div className="bg-faq-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl">
            FAQ{" "}
          </h1>
        </div>
      </div>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 pb-24">
        <h2 className="text-gray-600 text-3xl font-medium text-center">
          <FormattedMessage id="faq.1.title" />
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
          chevron={<PlusIcon className="w-5 h-5" />}
          transitionDuration={500}
        >
          {faqItems}
        </Accordion>
      </section>
    </div>
  );
}
