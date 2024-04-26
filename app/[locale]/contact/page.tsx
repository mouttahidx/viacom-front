import FormClient from "@/app/_components/contactComponents/FormClient";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";
import Image from "next/image";


export async function generateMetadata() {
  const t = await getTranslations();
 
  return {
    title: t('contact_hero_title'),
    description:`${t("contact_hero_title")} - ${t("meta_description")}`
  };
}

export default function Contact({params:{locale}}:{params:{locale:string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  const translations = {
    "contact_name_error": t('contact_name_error'),
    "contact_email_error": t('contact_email_error'),
    "contact_phone_error": t('contact_phone_error'),
    "contact_message_error": t('contact_message_error'),
    "recaptcha_error": t('recaptcha_error'),
    "contact_2_name": t('contact_2_name'),
    "contact_2_fullName": t('contact_2_fullName'),
    "contact_phone": t('contact_phone'),
    "contact_email": t('contact_email'),
    "contact_2_message": t('contact_2_message'),
    "contact_2_send": t('contact_2_send'),
    "contact_email_success": t('contact_email_success'),
  }

  

  unstable_setRequestLocale(locale);

  return (
    <div>
           <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10">
          {t("contact_hero_title")}
        </h1>
      </div>

      {/* 1st */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-white">
        <div className="relative overflow-hidden lg:overflow-visible right-arrow col-span-1 md:col-span-3 lg:col-span-1 bg-primary min-h-[150px] md:min-h-[120px] flex items-center flex-col justify-center border-y border-white md:border-none">
          <h2 className="text-3xl !text-white text-center">
            {t("contact_1_title")}
          </h2>
          <p className="text-center text-sm mt-4">
            {t("contact_1_subtitle")}
          </p>
        </div>
        <div className="bg-[#1C4D83] px-2 text-centers min-h-[250px] flex items-center flex-col justify-center border-y border-white md:border-none">
          <MapPinIcon className="text-white w-12 h-12" />
          <h2 className="text-2xl mt-8 !text-white text-center">
            {t("contact_address")}
          </h2>
          <p className="text-center text-sm mt-4">
            1020, rue Bouvier, bureau 400, Québec, QC G2K 0H3
          </p>
        </div>
        <div className="bg-[#1C4D83] px-2 text-centers min-h-[250px] flex items-center flex-col justify-center border-y border-white md:border-none">
          <PhoneIcon className="text-white w-12 h-12" />

          <h2 className="text-2xl mt-8 !text-white text-center">
            {t("contact_phone")}
          </h2>
          <p className="text-center text-sm mt-4">
            Québec : <span className="text-primary">418-825-2323</span>
          </p>
        </div>
        <div className="bg-[#1C4D83] px-2 text-centers min-h-[250px] flex items-center flex-col justify-center border-y border-white md:border-none">
          <EnvelopeIcon className="text-white w-12 h-12" />

          <h2 className="text-2xl mt-8 !text-white text-center">
            {t("contact_email")}
          </h2>
          <p className="text-center text-sm mt-4">info@viacommunication.com</p>
        </div>
      </section>

      {/* 3rd */}
      <section className="w-full flex flex-col my-40 gap-y-20">
        {/* title subtitle */}
        <div className="text-center flex flex-col items-center">
          <h2 className="section-title">
            {t("contact_2_title")}
          </h2>
          <p className="body-text">
            {t("contact_2_subtitle")}
          </p>
        </div>

        {/* inner section */}
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-16 gap-x-16">
          <Image
            src={"/img/robot-finger-pc.webp"}
            alt="robot finger"
            width={400}
            height={400}
            className="w-full lg:w-6/12 object-contain max-h-[570px]"
          />
          {/* Form */}
          <div className="w-full xl:w-5/12 px-4">
            <FormClient translations={translations}/>
          </div>
        </div>
      </section>

      {/* map */}
      <section className="overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10918.603757817204!2d-71.283072!3d46.8308744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8bbf7588c338d%3A0x777238c0bc5bc07f!2sVIA%20Communication!5e0!3m2!1sen!2sma!4v1711927557554!5m2!1sen!2sma"
          width="600"
          height="450"
          className=" w-full border-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
