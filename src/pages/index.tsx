import { Button, Divider } from "@mantine/core";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import IconsList from "./components/homeComponents/IconsList";
import { CheckIcon } from "@heroicons/react/16/solid";
import Testimonials from "./components/homeComponents/Testimonials";
import Link from "next/link";
import Head from "next/head";

/* tslint:disable:no-unused-variable */
export default function Home() {
  const intl = useIntl();

  return (
    <div>
      <Head>
        <title>
          VIA Communication - {intl.formatMessage({ id: "nav.home" })}
        </title>
      </Head>
      {/* // hero section */}
      <section className="w-full py-28 text-white h-[780px] lg:h-[781px] bg-hero-bg bg-cover bg-no-repeat bg-center relative">
        <div className="absolute bg-dark-secondary left-0 bottom-0 right-0 top-0 bg-opacity-30 z-0"></div>
        <div className="z-10 absolute top-[16%] lg:top-[35%] max-w-6xl mx-auto  left-0 right-0 px-3">
          <h1 className="text-4xl w-full lg:w-1/2">
            {intl.formatMessage({ id: "home.hero.title" })}
          </h1>
          <Divider size="lg" className="w-[50px] my-10" />
          <h2 className="text-3xl w-full lg:w-1/2">
            {intl.formatMessage({ id: "home.hero.subtitle" })}
          </h2>
          <div className="mt-10 flex flex-wrap gap-y-6">
            <Button
              variant="filled"
              className="!bg-primary hover:!bg-opacity-90 mr-4 "
              component={Link}
              href={"/contact"}
            >
              {" "}
              {intl.formatMessage({ id: "btn.info" })}
            </Button>
            <Button
              component={Link}
              href={"/services"}
              variant="outline"
              color="white"
              className=""
            >
              {intl.formatMessage({ id: "btn.services" })}
            </Button>
          </div>
        </div>
      </section>

      {/* // 1st section */}
      <section className="w-full mx-auto max-w-6xl p-4 bottom-arrow relative">
        <div className=" lg:-mt-14  bg-primary px-8 lg:px-16 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-8/12 ">
            <h2 className="second-title text-white ">
              {intl.formatMessage({ id: "home.1.title" })}
            </h2>
            <p className="mt-4 body-text !text-white">
              {intl.formatMessage({ id: "home.1.subtitle" })}
            </p>
          </div>
          {/* cta */}
          <div className="mt-10 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-4/12">
            <Button
              component={Link}
              href={"/services"}
              variant="outline"
              color="white"
              className=""
            >
              {intl.formatMessage({ id: "btn.services" })}
            </Button>
            <Button
              variant="filled"
              component={Link}
              href={"/contact"}
              className="!bg-white !text-black hover:!bg-opacity-90 "
            >
              {" "}
              {intl.formatMessage({ id: "btn.contact" })}
            </Button>
          </div>
        </div>
      </section>

      {/* 2nd */}
      <section className="w-full flex flex-wrap lg:flex-nowrap mt-40 gap-y-24">
        {/* first div */}
        <div className="w-full px-4 xl:pl-24 lg:pr-10 lg:w-6/12">
          <p className="body-text">
            <FormattedMessage id="home.2.discover" />
            <span className="text-primary font-bold">VIA Communication</span>, 
            <FormattedMessage id="home.2.text" />
            <b>
              &nbsp;
              <FormattedMessage id="home.2.2.b" />
            </b>
            <br />
            <br />
            <FormattedMessage id="home.2.3" />
            <br />
            <br />
            <FormattedMessage id="home.2.4" />
            <br />
            <br />
            <FormattedMessage id="home.2.5" />
            <b>
              &nbsp;
              <FormattedMessage id="home.2.5b" />
            </b>
          </p>
          <Button
            component={Link}
            href={"/contact"}
            variant="filled"
            className="!bg-primary hover:!bg-opacity-90 mt-10 !w-full md:!w-6/12"
          >
            <FormattedMessage id="btn.contact" />
          </Button>
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
          <h2 className="section-title">
            {" "}
            <FormattedMessage id="home.3.title" />
          </h2>
          <p className="body-text">
            <FormattedMessage id="home.3.subtitle" />
          </p>
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
          <h3 className="second-title !text-3xl text-white">
            <FormattedMessage id="home.4.1.title" />

            <span className="text-primary">
              <FormattedMessage id="home.4.1.title.tag" />
            </span>
          </h3>
          <p className="body-text !text-white">
            <span className="text-primary">O</span>{" "}
            <FormattedMessage id="home.4.1.1" />
          </p>
          <p className="body-text !text-white">
            <span className="text-primary">O</span>{" "}
            <FormattedMessage id="home.4.1.2" />
          </p>
          <Button
            component={Link}
            href={"/contact"}
            variant="filled"
            className="!bg-primary hover:!bg-opacity-90 mt-10 !w-full md:!w-6/12 mx-auto"
          >
            <FormattedMessage id="btn.contact" />
          </Button>
        </div>

        {/* second square */}
        <div className="w-full px-4 py-16 lg:py-20 lg:px-14 bg-primary flex flex-col gap-y-8">
          <h3 className="second-title !text-3xl !text-white">
            <FormattedMessage id="home.4.2.title" />

            <span className="text-secondary">
              <FormattedMessage id="home.4.2.title.tag" />
            </span>
          </h3>
          <h4 className="second-title !text-white">
            <FormattedMessage id="home.4.2.subtitle" />
          </h4>
          <div className="grid grid-cols-1 gap-y-6">
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                <FormattedMessage id="home.4.2.1" />
              </span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                <FormattedMessage id="home.4.2.2" />
              </span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                <FormattedMessage id="home.4.2.3" />
              </span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                <FormattedMessage id="home.4.2.4" />
              </span>
            </div>
            <div className="text-white flex items-center gap-x-1">
              <CheckIcon className="w-8 h-8 fill-white" />
              <span className="text-xl">
                <FormattedMessage id="home.4.2.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5th */}
      <section className="w-full flex flex-col container my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="section-title mb-4">
            <FormattedMessage id="home.5.title" />
          </h2>
          <p className="body-text max-w-5xl">
            <FormattedMessage id="home.5.subtitle" />
          </p>
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
                <h4 className="list-title font-medium">
                  <FormattedMessage id="home.5.1.1" />
                </h4>
                <p className="body-text">
                  <FormattedMessage id="home.5.1.2" />

                  <br />
                  <br />
                  <FormattedMessage id="home.5.1.3" />

                  <br />
                  <br />
                  <FormattedMessage id="home.5.1.4" />

                  <br />
                  <br />
                  <FormattedMessage id="home.5.1.5" />
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
                <h4 className="list-title font-medium">
                  <FormattedMessage id="home.5.2.1" />
                </h4>
                <p className="body-text">
                  <FormattedMessage id="home.5.2.2before" />
                  <span className="text-primary font-medium">
                    <FormattedMessage id="home.5.2.2tag" />
                  </span>{" "}
                  <FormattedMessage id="home.5.2.2after" />
                  <b>
                    {" "}
                    <FormattedMessage id="home.5.2.2b" />
                  </b>{" "}
                  <FormattedMessage id="home.5.2.2after.b" />
                  <br />
                  <br />
                  <FormattedMessage id="home.5.2.3" />
                  <br />
                  <br />
                  <FormattedMessage id="home.5.2.4" />
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
            <h4 className="list-title font-medium">
              <FormattedMessage id="home.5.3.1" />
            </h4>
            <p className="body-text">
              <FormattedMessage id="home.5.3.2" />
              <br />
              <br />
              <FormattedMessage id="home.5.3.2before" />
              <b>
                <FormattedMessage id="home.5.3.2b" />{" "}
              </b>
              <FormattedMessage id="home.5.3.2after" />
            </p>
          </div>
        </div>
      </section>

      {/* 6th */}
      <section className="w-full flex flex-col container max-w-6xl my-40 ">
        <h2 className="second-title text-center ">
          <FormattedMessage id="home.6.title" />
        </h2>
        <div className="w-[50px] bg-primary h-1 mx-auto mt-1 mb-16"></div>

        {/* 1st text */}
        <div className="bg-savoir-bg bg-cover bg-no-repeat bg-center">
          <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h4 className="second-title">
              <FormattedMessage id="home.6.1.title" />
            </h4>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              <FormattedMessage id="home.6.1.1" />

              <br />
              <br />
              <FormattedMessage id="home.6.1.2before" />

              <span className="text-primary">
                <FormattedMessage id="home.6.1.2tag" />
              </span>
              <FormattedMessage id="home.6.1.2after" />

              <br />
              <br />
              <FormattedMessage id="home.6.1.3" />

              <br />
              <br />
              <FormattedMessage id="home.6.1.4before" />

              <span className="text-primary">
                <FormattedMessage id="home.6.1.4tag" />
              </span>
              <br />
              <br />
              <FormattedMessage id="home.6.1.5" />
            </p>
          </div>
        </div>

        {/* 2 texts */}
        <div className="grid xl:grid-cols-2 mt-8 gap-x-8 gap-y-8">
          {/* 1st div */}
          <div className="bg-approche-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h4 className="second-title">
                <FormattedMessage id="home.6.2.title" />
              </h4>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">
                <FormattedMessage id="home.6.2.1before" />

                <span className="text-primary">
                  <FormattedMessage id="home.6.2.1tag" />
                </span>
                <FormattedMessage id="home.6.2.1after" />
                <br />
                <br />
                <FormattedMessage id="home.6.2.2" />

                <br />
                <br />
                <FormattedMessage id="home.6.2.3" />

                <br />
                <br />
                <FormattedMessage id="home.6.2.4before" />

                <span className="text-primary">
                  <FormattedMessage id="home.6.2.4tag" />
                </span>
              </p>
            </div>
          </div>

          {/* 2nd div */}
          <div className="bg-faire-bg bg-cover bg-no-repeat bg-center">
            <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
              <h4 className="second-title">
                <FormattedMessage id="home.6.3.title" />
              </h4>
              <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

              <p className="body-text !text-white">
                <FormattedMessage id="home.6.3.1" />

                <br />
                <br />
                <FormattedMessage id="home.6.3.2before" />

                <span className="text-primary">
                  <FormattedMessage id="home.6.3.2tag" />
                </span>

                <br />
                <br />
                <FormattedMessage id="home.6.3.3" />

                <br />
                <br />
                <FormattedMessage id="home.6.3.4before" />

                <span className="text-primary">
                  <FormattedMessage id="home.6.3.4tag" />
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 5th text */}
        <div className="bg-website-bg bg-cover bg-no-repeat bg-center mt-8">
          <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h4 className="second-title">
              <FormattedMessage id="home.6.4.title" />
            </h4>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              <FormattedMessage id="home.6.4.1" />

              <br />
              <br />
              <FormattedMessage id="home.6.4.2" />

              <br />
              <br />
              <FormattedMessage id="home.6.4.3before" />

              <span className="text-primary">
                <FormattedMessage id="home.6.4.3tag" />
              </span>
              <FormattedMessage id="home.6.4.3after" />
            </p>
          </div>
        </div>

        {/* 6th text */}
        <div className="bg-optimization-seo-bg bg-cover bg-no-repeat bg-center mt-8">
          <div className="w-full pt-3 px-4 pb-10 text-center text-white bg-black bg-opacity-70">
            <h4 className="second-title">
              <FormattedMessage id="home.6.5.title" />
            </h4>
            <div className="w-[50px] bg-white h-1 mx-auto mt-1 mb-10"></div>

            <p className="body-text !text-white">
              <FormattedMessage id="home.6.5.1" />
              <br />
              <br />
              <FormattedMessage id="home.6.5.2before1" />
              <span className="text-primary">
                <FormattedMessage id="home.6.5.2tag1" />
              </span>{" "}
              <FormattedMessage id="home.6.5.2after1" />
              <span className="text-primary">
                {" "}
                <FormattedMessage id="home.6.5.2tag2" />
              </span>
              <FormattedMessage id="home.6.5.2after2" />
              <br />
              <br />
              <FormattedMessage id="home.6.5.3before" />
              <span className="text-primary">
                <FormattedMessage id="home.6.5.3tag" />
              </span>{" "}
              <FormattedMessage id="home.6.5.3after" />
              <br />
              <br />
              <FormattedMessage id="home.6.5.4" />
            </p>
          </div>
        </div>
      </section>

      {/* 7th section */}
      <section className="w-full bg-secondary text-white text-center px-3 py-20 flex flex-col mt-40 ">
        <h2 className="text-white text-3xl">
          <FormattedMessage id="home.7.title" />
        </h2>
        <p className="body-text !text-white mt-12 max-w-6xl mx-auto">
          <FormattedMessage id="home.7.1before" />
          <span className="text-primary">
            <FormattedMessage id="home.7.1tag" />
          </span>
          <br />
          <br /> <FormattedMessage id="home.7.2" />
          <br />
          <br /> <FormattedMessage id="home.7.3" />
        </p>
      </section>

      {/* testimonials */}
      <section className="w-full bg-secondary text-white text-center pb-10 flex flex-col mb-10 ">
        <Testimonials />
        <h4 className="text-white uppercase text-2xl font-bold">
          <FormattedMessage id="home.8.title" />
        </h4>
      </section>

      {/* 9th section */}
      <section className="w-full bg-white text-white text-center pb-10 flex flex-col mb-20 px-4 max-w-6xl mx-auto ">
        <p className="text-black text-lg">
          <FormattedMessage id="home.8.1" />
        </p>
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
        <div className=" bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              <FormattedMessage id="cta1.title" />
            </h2>
            <p className="mt-4 body-text !text-black">
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
              <FormattedMessage id="btn.contact" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
