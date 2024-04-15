import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { Accordion, Button } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

export default function AgenceFacebookAds() {
  const intl = useIntl();

  const faqs = [
    {
      value: intl.formatMessage({ id: "fb.faq.q1.title" }),
      description: (
        <div className="text-primary">
          <Link
            href="/services/agence-google-ads"
            className="font-semibold text-black"
          >
            <FormattedMessage id="fb.faq.q1.text1.1link" />
          </Link>{" "}
          <FormattedMessage id="fb.faq.q1.text1.before1" />
          <b>
            <FormattedMessage id="fb.faq.q1.text1.b1" />
          </b>
          <FormattedMessage id="fb.faq.q1.text1.after1" />
          <b>
            <FormattedMessage id="fb.faq.q1.text1.b2" />
          </b>
          <FormattedMessage id="fb.faq.q1.text1.after2" />
          <br />
          <br />
          <FormattedMessage id="fb.faq.q1.text2.before" />
          <b>
            <FormattedMessage id="fb.faq.q1.text2.b" />
          </b>{" "}
          <FormattedMessage id="fb.faq.q1.text2.after" />
          <br />
          <br />
          <FormattedMessage id="fb.faq.q1.text3.before" />
          <b>
            <FormattedMessage id="fb.faq.q1.text3.b" />
          </b>
          <FormattedMessage id="fb.faq.q1.text3.after" />
        </div>
      ),
    },
    {
      value: intl.formatMessage({ id: "fb.faq.q2.title" }),
      description: (
        <div className="text-primary">
          <FormattedMessage id="fb.faq.q2.text1.before" />

          <b>
            <FormattedMessage id="fb.faq.q2.text1.b" />
          </b>

          <br />
          <br />
          <FormattedMessage id="fb.faq.q2.text2" />

          <br />
          <br />
          <FormattedMessage id="fb.faq.q2.text3.before" />
          <b>
            <FormattedMessage id="fb.faq.q2.text3.b" />
          </b>
          <FormattedMessage id="fb.faq.q2.text3.after" />
        </div>
      ),
    },
    {
      value: intl.formatMessage({ id: "fb.faq.q3.title" }),
      description: (
        <div className="text-primary">
          <FormattedMessage id="fb.faq.q3.text1.before" />
          <b>
            {" "}
            <FormattedMessage id="fb.faq.q3.text1.b1" />
          </b>
          <FormattedMessage id="fb.faq.q3.text1.after" />
          <b>
            <FormattedMessage id="fb.faq.q3.text1.b2" />
          </b>
          <br />
          <br />
          <FormattedMessage id="fb.faq.q3.text2" />
          <br />
          <br />
          <FormattedMessage id="fb.faq.q3.text3.before" />
          <b>
            <FormattedMessage id="fb.faq.q3.text3.b" />
          </b>{" "}
          <FormattedMessage id="fb.faq.q3.text3.after" />
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
        {`${intl.formatMessage({ id: "nav.fb" })}`}

        </title>
        <meta
          name="description"
          content={`Facebook ADS - ${intl.formatMessage({ id: "meta.description" })}`}
        />
      </Head>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl ">
            <FormattedMessage id="fb.hero.title" />
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
              <FormattedMessage id="fb.1.1before" />
              <span className="text-primary">
                <FormattedMessage id="fb.1.1tag" />
              </span>
              <FormattedMessage id="fb.1.1after" />
              <br />
              <br />
              <FormattedMessage id="fb.1.2" />
              <br />
              <br />
              <FormattedMessage id="fb.1.3" />
              <br />
              <br />
              <ul className="pl-6 list-disc list">
                <li>
                  <FormattedMessage id="fb.1.4.1" />
                </li>
                <li>
                  <FormattedMessage id="fb.1.4.2" />
                </li>
                <li>
                  <FormattedMessage id="fb.1.4.3" />
                </li>
                <li>
                  <FormattedMessage id="fb.1.4.4" />
                </li>
              </ul>
              <br />
              <br />
              <FormattedMessage id="fb.1.5before" />
              <span className="text-primary">
                <FormattedMessage id="fb.1.5tag" />
              </span>
              <FormattedMessage id="fb.1.5after" />
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
            <FormattedMessage id="fb.2.title" />
          </h2>
          <div className="w-[50px] bg-primary h-1 mx-auto mt-3 mb-10 "></div>

          <p className="body-text">
            <FormattedMessage id="fb.2.subtitle" />
          </p>
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
              <FormattedMessage id="fb.2.1.title" />
            </h3>
            <p className="text-secondary text-center">
              <FormattedMessage id="fb.2.1.text.1" />

              <br />
              <br />
              <FormattedMessage id="fb.2.1.text.2" />
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
              <FormattedMessage id="fb.2.2.title" />
            </h3>
            <p className="text-secondary text-center">
              <FormattedMessage id="fb.2.2.text.1" />
              <br />
              <br />
              <FormattedMessage id="fb.2.2.text.2" />
              <br />
              <br />
              <FormattedMessage id="fb.2.2.text.3" />
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
              <FormattedMessage id="fb.2.3.title" />
            </h3>
            <p className="text-secondary text-center">
              <FormattedMessage id="fb.2.3.text.1" />

              <br />
              <br />
              <FormattedMessage id="fb.2.3.text.2" />

              <br />
              <br />
              <FormattedMessage id="fb.2.3.text.3" />
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
              <FormattedMessage id="fb.2.4.title" />
            </h3>
            <p className="text-secondary text-center">
              <FormattedMessage id="fb.2.4.text" />
            </p>
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
              <FormattedMessage id="fb.2.5.title" />
            </h3>
            <p className="text-secondary text-center">
              <FormattedMessage id="fb.2.5.text" />
            </p>
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
              <FormattedMessage id="fb.3.title" />
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-1 mb-10"></div>
            <div className="body-text">
              <FormattedMessage id="fb.3.1" />
              <br />
              <br />
              <FormattedMessage id="fb.3.2" />
              <br />
              <br />
              <FormattedMessage id="fb.3.3" />
              <br />
              <br />
              <ul className="pl-6 list-disc list">
                <li>
                  <FormattedMessage id="fb.3.4.1" />
                </li>
                <li>
                  <FormattedMessage id="fb.3.4.2" />
                </li>
                <li>
                  <FormattedMessage id="fb.3.4.3" />
                </li>
              </ul>
              <br />
              <br />
              <FormattedMessage id="fb.3.5" />
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

      {/* 5th */}
      <section className="w-full flex flex-col xl:container px-4 my-40 text-center">
        <h2 className="text-3xl font-semibold text-gray-600">
          <FormattedMessage id="fb.4.title" />
        </h2>
        <div className="w-[50px] mx-auto bg-primary h-1 mt-8 mb-16"></div>
        {/* inner 2 */}
        <div className="max-w-5xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <p className="text-gray-600 text-left">
              <b>1</b>. <FormattedMessage id="fb.4.1" />
              <br />
              <br />
              <b>2</b>. <FormattedMessage id="fb.4.2" />
              <br />
              <br />
              <b>3</b>. <FormattedMessage id="fb.4.3" />
              <br />
              <br />
              <b>4</b>. <FormattedMessage id="fb.4.4" />
              <br />
              <br />
              <b>5</b>. <FormattedMessage id="fb.4.5" />
            </p>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <p className="text-gray-600 text-left">
              <b>6</b>. <FormattedMessage id="fb.4.6" />
              <br />
              <br />
              <b>7</b>. <FormattedMessage id="fb.4.7" />
              <br />
              <br />
              <b>8</b>. <FormattedMessage id="fb.4.8" />
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-no-repeat bg-cover bg-fixed bg-center my-40 text-center bg-facebook-phone">
        <div className="w-full h-full bg-white bg-opacity-40  p-24">
          <Button
            component={Link}
            href={"/contact"}
            variant="filled"
            size="xl"
            className="!bg-primary hover:!bg-opacity-90 shadow-xl"
          >
            <FormattedMessage id="btn.contact" />
          </Button>
        </div>
      </section>

      {/* 6th */}
      <section className="w-full flex flex-col xl:container px-4 my-40 text-center">
        <h2 className="text-3xl font-semibold text-gray-600">
          <FormattedMessage id="fb.6.title" />{" "}
        </h2>
        <h3 className="text-lg font-semibold text-gray-600 mt-2">
          <FormattedMessage id="fb.6.subtitle" />
        </h3>
        <div className="w-[50px] mx-auto bg-primary h-1 mt-8 mb-8"></div>

        <p className="text-left mb-16 max-w-7xl mx-auto text-gray-600">
          <b>
            <FormattedMessage id="fb.6.1b1" />
          </b>
          <FormattedMessage id="fb.6.1before" />

          <b>
            <FormattedMessage id="fb.6.1b2" />
          </b>
          <FormattedMessage id="fb.6.1after" />

          <br />
          <br />
          <FormattedMessage id="fb.6.2" />
        </p>
        {/* inner 2 */}
        <div className="max-w-6xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <p className="text-gray-600 text-left">
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              <FormattedMessage id="fb.6.q.1" />

              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              <FormattedMessage id="fb.6.q.2" />

              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              <FormattedMessage id="fb.6.q.3" />

              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              <FormattedMessage id="fb.6.q.4" />

              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              <FormattedMessage id="fb.6.q.5" />
            </p>
          </div>

          <div className="w-full xl:w-6/12 flex flex-col items-center text-center">
            <p className="text-gray-600 text-left">
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              <FormattedMessage id="fb.6.q.6" />

              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              <FormattedMessage id="fb.6.q.7" />

              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              <FormattedMessage id="fb.6.q.8" />

              <br />
              <br />
              <CheckBadgeIcon className="w-5 h-5 mr-2 text-secondary inline" />
              <FormattedMessage id="fb.6.q.9" />
            </p>
          </div>
        </div>

        <div className="w-[80px] bg-primary h-1 my-24 mx-auto"></div>
        {/* inner 3 */}
        <div className="max-w-6xl mx-auto w-full flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-16">
          <div className="w-full xl:w-6/12 flex flex-col items-center">
            <div className="text-left text-gray-500">
              <FormattedMessage id="fb.7.1before" />
              <span className="text-primary font-medium">
                <FormattedMessage id="fb.7.1tag" />
              </span>{" "}
              <FormattedMessage id="fb.7.1after" />
              <br />
              <br />
              <ul className="pl-6 list-disc list">
                <li>
                  <FormattedMessage id="fb.7.2.1" />
                </li>
                <li>
                  <FormattedMessage id="fb.7.2.2" />
                </li>
                <li>
                  <FormattedMessage id="fb.7.2.3" />
                </li>
                <li>
                  <FormattedMessage id="fb.7.2.4" />
                </li>
              </ul>
              <br />
              <br />
              <FormattedMessage id="fb.7.3" />
              <br />
              <br />
              <FormattedMessage id="fb.7.4" />
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
          <Button
            variant="filled"
            size="xl"
            className="!bg-primary hover:!bg-opacity-90 shadow-xl"
          >
            <FormattedMessage id="btn.contact" />
            </Button>
        </div>
      </section>

      {/* CTA 2*/}
      <section className="w-full mx-auto max-w-7xl p-4 py-16 ">
        <div className=" bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              <FormattedMessage id="cta1.title" />{" "}
            </h2>
            <p className="mt-4 body-text !text-black lg:w-10/12">
              <FormattedMessage id="cta1.subtitle" />
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
              <FormattedMessage id="btn.contact" />{" "}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 py-24 border-t border-secondary">
        <h2 className="text-gray-600 text-3xl font-medium">
          <FormattedMessage id="fb.faq.title" />
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
          <FormattedMessage id="other.title" />
        </h2>
        <div className="divider"></div>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/"
          rel="canonical"
        >
          <FormattedMessage id="other.web" />
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-seo"
        >
          <FormattedMessage id="other.seo" />
        </Link>
      </section>
    </div>
  );
}
