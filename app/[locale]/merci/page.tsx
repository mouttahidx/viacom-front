import FormClient from "@/app/_components/contactComponents/FormClient";
import IframeForm from "@/app/_components/contactComponents/IframeForm";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";
import Image from "next/image";


export async function generateMetadata() {
  const t = await getTranslations();
 
  return {
    title: t('thanks_headline'),
    description:`${t("thanks_headline")}`
  };
}

export default function ThankYou({params:{locale}}:{params:{locale:string}}) {
  const t = useTranslations();


  


  return (
    <div>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10 text-center">
          {t("thanks_headline")}
        </h1>
      </div>

      {/* 1st */}
      <section className="">
      
          <p className="max-w-6xl mx-auto leading-8 text-center text-base mt-4 text-dark-secondary py-24 font-medium" dangerouslySetInnerHTML={{__html:t.raw('thanks_text')}} />
        
      
      </section>


    </div>
  );
}
