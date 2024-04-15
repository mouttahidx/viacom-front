import Head from "next/head";
import React from "react";
import { FormattedMessage, IntlProvider, useIntl } from "react-intl";

export default function PolitiquesDeConfidentialite() {

  const intl = useIntl();
  let title = intl.formatMessage({id:"policies.title"});
  return (
    <div>
      <Head>
      <meta
          name="description"
          content={`${intl.formatMessage({ id: "policies.title" })} - ${intl.formatMessage({ id: "meta.description" })}`}

        />
        <title>
         {`${title}`}
        </title>
      </Head>
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl ">
            <FormattedMessage id="policies.title" />
          </h1>
        </div>
      </div>
      <section className="container py-32 max-w-6xl no-tailwindcss-base">
         <div dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "policies.text" }),
        }} />

      </section>
    </div>
  );
}
