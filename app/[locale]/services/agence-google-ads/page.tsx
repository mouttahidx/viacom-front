import ButtonClient from "@/app/_components/ButtonClient";
import FaqAccordion from "@/app/_components/FaqAccordion";
import TabsClient from "@/app/_components/TabsClient";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";
import Image from "next/image";



export async function generateMetadata() {
  const t = await getTranslations();
 
  return {
    title: t('nav_google'),
    description:`${t("nav_google")} - ${t("meta_description")}`
  };
}


export default function AgenceGoogleAds({params:{locale}}:{params:{locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  const faqs = [
    {
      value: t("google_faq_q1_title"),
      description: (
        <div
          className="text-primary"
          style={{ color: "#F05423" }}
          dangerouslySetInnerHTML={{
            __html: t.raw("google_faq_q1_text" ),
          }}
        />
      ),
    },
  ];

 

  const tabs = [
    {
      label: t("google_4_tab1_title" ),
      text: (
        <div>
          {t("google_4_tab1_text1" )}
          <br />
          <br />
          {t("google_4_tab1_text2" )}
          <br />
          <br />
          {t("google_4_tab1_text3" )}
        </div>
      ),
    },
    {
      label: t("google_4_tab2_title" ),
      text: (
        <div>
          {t("google_4_tab2_text1" )}
          <br />
          <br />
          {t("google_4_tab2_text2" )}
        </div>
      ),
    },
    {
      label: t("google_4_tab3_title" ),
      text: (
        <div>
          {t("google_4_tab3_text1" )}

          <br />
          <br />
          {t("google_4_tab3_text2" )}
        </div>
      ),
    },
    {
      label: t("google_4_tab4_title" ),
      text: (
        <div>
          {t("google_4_tab4_text1" )}
          <br /> <br />
          {t("google_4_tab4_text2" )}
        </div>
      ),
    },
    {
      label: t("google_4_tab5_title" ),
      text: (
        <div>
          {t("google_4_tab5_text1" )}

          <br />
          <br />
          {t("google_4_tab5_text2" )}

          <br />
          <br />
          {t("google_4_tab5_text3" )}

          <br />
          <br />
          {t("google_4_tab5_text4" )}
        </div>
      ),
    },
    {
      label: t("google_4_tab6_title" ),
      text: <div>{t("google_4_tab6_text" )}</div>,
    },
    {
      label: t("google_4_tab7_title" ),
      text: (
        <div
          dangerouslySetInnerHTML={{
            __html: t.raw("google_4_tab7_text1" ),
          }}
        />
      ),
    },
  ];

  return (
    <div>
     
      {/* hero */}
      <div className="bg-facebook-hero bg-center bg-no-repeat bg-cover ">
        <div className="bg-secondary h-full pt-24 pb-24 lg:py-44 flex justify-center bg-opacity-60">
          <h1 className="capitalize text-center text-white text-3xl lg:text-4xl mt-10 max-w-4xl ">
            {t("google_hero_title")}
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
              {t("google_1_1")}
              <br />
              <br />
              {t("google_1_2")}
              <br />
              <br /> {t("google_1_3")}
              <br />
              <br />
              {t("google_1_4")}
            </div>
            <ButtonClient
             href={"/contact"}
             variant="filled"
             size="md"
             classes="!bg-primary hover:!bg-opacity-90 mt-10 "
             text={t("btn_contact")}
            />
            
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
            {t("google_2_title")}
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
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("google_2_1_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("google_2_1_text")}
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
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("google_2_2_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("google_2_2_text1")}

              <br />
              <br />
              {t("google_2_2_text2")}
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
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("google_2_3_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("google_2_3_text1")}

              <br />
              <br />
              {t("google_2_3_text2")}
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
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("google_2_4_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("google_2_4_text1")}

              <br />
              <br />
              {t("google_2_4_text2")}
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
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("google_2_5_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("google_2_5_text1")}

              <br />
              <br />
              {t("google_2_5_text2")}
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
            <h3 className="text-xl font-semibold my-6 text-secondary text-center">
              {t("google_2_6_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("google_2_6_text")}
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
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("google_2_7_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("google_2_7_text")}
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
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("google_2_8_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("google_2_8_text")}
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
            <h3 className="text-xl font-semibold my-6 text-secondary">
              {t("google_2_9_title")}
            </h3>
            <p className="text-secondary text-center">
              {t("google_2_9_text")}
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
              {t("google_3_title")}
            </h2>
            <div className="w-[50px] bg-primary h-1 mt-1 mb-10"></div>
            <p className="body-text">
              {t("google_3_1")}
            </p>
            <h3 className="text-2xl font-semibold text-gray-600 my-12 ">
              {t("google_3_2_title")}
            </h3>
            <div className="body-text">
              {t("google_3_2")}

              <br />
              <br />
              {t("google_3_3")}

              <br />
              <br />
              {t("google_3_4")}

              <br />
              <br />
              {t("google_3_5")}
            </div>
            
            <ButtonClient
            href={"/contact"}
            variant="filled"
            size="md"
            classes="!bg-primary hover:!bg-opacity-90 mt-10 "
            text={t("btn_contact")}
           />
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="w-full flex flex-col xl:container my-40 px-2 ">
        <h2 className="gray-section-title text-center">
          {t("google_4_title")}
        </h2>
        <div className="divider"></div>
        <h3 className="text-2xl text-gray-600 mb-8 font-semibold">
          1. {t("google_4_1")}
        </h3>
        <div className="bg-tabs py-20 px-8 rounded-3xl bg-cover bg-no-repeat">
         <TabsClient tabs={tabs} />
        </div>

        <h3 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          2. {t("google_4_2")}
        </h3>
        <div
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: t.raw("google_4_2_text" ),
          }}
        />

        <h3 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          3. {t("google_4_3")}
        </h3>
        <div className="text-gray-500">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("google_4_3_text" )}}
          />
        </div>

        <h3 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          4. {t("google_4_4")}
        </h3>
        <div className="text-gray-500">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("google_4_4_text" )}}
          />
        </div>

        <h3 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
          5. {t("google_4_5")}
        </h3>
        <div className="text-gray-500">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("google_4_5_text" )}}
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
              {t("google_5_title")}</h2>
            <div className="w-[50px] bg-primary h-1 mt-6 mb-16"></div>
            <p className="body-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("google_5_subtitle")}
                }
              />
            </p>
            <h3 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              1. {t("google_5_1_title")}
            </h3>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("google_5_1_text" ),
                }}
              />
            </div>

            <h3 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              2. {t("google_5_2_title")}
            </h3>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("google_5_2_text" ),
                }}
              />
            </div>

            <h3 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              3. {t("google_5_3_title")}
            </h3>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("google_5_3_text" ),
                }}
              />
            </div>

            <h3 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              4. {t("google_5_4_title")}
            </h3>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("google_5_4_text" ),
                }}
              />
            </div>

            <h3 className="text-2xl text-gray-600 mt-12 mb-8 font-semibold">
              5. {t("google_5_5_title")}
            </h3>
            <div className="text-gray-500">
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("google_5_5_text" ),
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
         <ButtonClient
            href={"/contact"}
            variant="filled"
            size="xl"
            classes="!bg-primary hover:!bg-opacity-90 shadow-xl"
             text={t("btn_contact")}
            />
        </div>
      </section>

      {/* competences */}
      <section className="w-full flex flex-col xl:container my-40 px-2 ">
        <h2 className="gray-section-title text-center">
          {t("google_6_title")}
        </h2>
        <div className="divider"></div>
        <div className="text-gray-600">
          <span
            dangerouslySetInnerHTML={{
              __html: t.raw("google_6_text")}}
          />
        </div>
      </section>

      {/* CTA 2*/}
      <section className="w-full mx-auto max-w-7xl p-4 py-16 ">
        <div className=" bg-white px-8 lg:px-12 py-16 lg:pb-8 lg:pt-12 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          {/* first div */}
          <div className="lg:w-9/12 ">
            <h2 className="second-title text-primary font-bold">
              {t("cta1_title")}{" "}</h2>
            <p className="mt-4 body-text !text-black lg:w-10/12">
              {t("cta1_subtitle")}
            </p>
          </div>
          {/* cta */}
          <div className="mt-10 lg:mt-0 flex flex-wrap gap-y-6 gap-x-4 w-full justify-center lg:w-3/12">
           <ButtonClient
            href={"/contact"}
            variant="outline"
            color="#EE5422"
            classes="!block !w-full"
            size="md"
            text={t("btn_contact")}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="2xl:container flex flex-col items-center mt-10 py-24 border-t border-secondary">
        <h2 className="text-gray-600 text-3xl font-medium">
          {t("google_faq_title")}
        </h2>
        <div className="divider"></div>
        <FaqAccordion faqs={faqs}/>
      </section>

      {/* other services */}
      <section className="2xl:container flex flex-col items-center mb-16 py-16">
        <h2 className="text-gray-600 text-3xl font-medium">
          {t("other_title")}
        </h2>
        <div className="divider"></div>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-seo"
        >
          {t("other_seo")}
        </Link>
        <Link
          className="text-xl text-dark-secondary mt-4 font-semibold hover:scale-105 duration-300"
          href="/services/agence-facebook-ads"
        >
          {t("other_fb")}
        </Link>
      </section>
    </div>
  );
}
