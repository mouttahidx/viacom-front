import { Link } from "@/navigation";
import { MapPinIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto bg-secondary px-4 flex flex-col sm:flex-row flex-wrap pt-16 py-10 gap-y-16 items-start lg:items-start">
        {/* first column */}
        <div className="lg:w-5/12 md:w-4/12 sm:w-6/12">
          <Link href="/" rel="canonical">
            <Image
              unoptimized
              src="/img/Logo.webp"
              width={300}
              height={300}
              alt=""
              className="w-10/12 md:w-[280px] object-contain"
            />
          </Link>
        </div>
        {/* second column */}
        <div className="flex lg:w-4/12 flex-col gap-y-8 text-sm md:w-4/12 sm:w-6/12">
          <div className="">
            <h3 className="text-white font-medium"> {t("footer_contactus")}</h3>
            <p className="text-white mt-2">Québec: 418-825-2323</p>
          </div>

          <div className=" flex flex-col gap-y-10">
            <p className="text-white mt-2">
              {t("email")}:{" "}
              <a href="mailto:info@viacommunication.com">
                info@viacommunication.com
              </a>
            </p>

            <div className="">
              <h3 className="text-white font-medium">{t("address")}: </h3>
              <p className="text-white mt-2">
                1020, rue Bouvier, suite 400, Québec, QC G2K 0H3
              </p>
            </div>

            <div className="flex  items-center gap-x-1">
              <MapPinIcon className="fill-white w-6 h-6" />{" "}
              <a
                target="_blank"
                href="https://www.google.com/maps/place/1020+Rue+Bouvier+%23400,+Qu%C3%A9bec,+QC+G2K+0H3,+Canada/@46.8308746,-71.2852567,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb897c0ce7524e7:0x88a7c7e893518194!8m2!3d46.8308746!4d-71.283068"
                className="text-white"
              >
                {t("footer_open_map")}
              </a>
            </div>
          </div>
        </div>
        {/* third column */}
        <div className="flex lg:w-3/12 flex-col gap-y-8 text-sm md:w-4/12">
          <div>
            <a
              href="https://www.google.com/partners/agency?id=3993273537"
              target="_blank"
            >
              <Image
                unoptimized
                src="/img/google-partner.webp"
                width={300}
                height={300}
                alt=""
                className="w-6/12 lg:w-[300px]"
              />
            </a>
          </div>

          <div className=" flex flex-col gap-y-6">
            <p className="text-white font-medium">{t("footer_responsable")}</p>
            <p className="text-white mt-2 font-semibold">Francois Beaudry</p>
            {/* <p className="text-white mt-2">
            {t("email" })}:{" "}             <a href="mailto:info@viacommunication.com">
                info@viacommunication.com
              </a>
            </p>
            <p className="text-white mt-2">Québec: 418-825-2323</p> */}
            <p className="text-white mt-2">
              <Link href={"/politiques-de-confidentialite"}>
                {t("footer_policies")}
              </Link>
            </p>
          </div>
        </div>

        {/* bottom bar */}
        <div className="w-full text-gray-400 text-sm flex flex-col-reverse lg:flex-row justify-between lg:sitems-center">
          <div>
            <p>
              {t("footer_copyright")}
              <b className="text-white">VIA Communication </b>
              {new Date().getFullYear()}.
            </p>
          </div>
          <div className="flex gap-x-2 items-center mb-8 lg:mb-0">
            <span>{t("footer_followus")}</span>
            <a
              href="https://www.facebook.com/VIACommunication/"
              className=""
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0,0,256,256"
                className="fill-white w-4 h-4"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="bg-blend-normal"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M17.525,9h-3.525v-2c0,-1.032 0.084,-1.682 1.563,-1.682h1.868v-3.18c-0.909,-0.094 -1.823,-0.14 -2.738,-0.138c-2.713,0 -4.693,1.657 -4.693,4.699v2.301h-3v4l3,-0.001v9.001h4v-9.003l3.066,-0.001z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/via-communication/about/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0,0,256,256"
                className="fill-white w-5 h-5"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="mix-blend-normal"
                >
                  <g transform="scale(8,8)">
                    <path d="M8.64258,4c-1.459,0 -2.64258,1.18163 -2.64258,2.64063c0,1.459 1.18262,2.66797 2.64063,2.66797c1.458,0 2.64258,-1.20897 2.64258,-2.66797c0,-1.458 -1.18163,-2.64062 -2.64062,-2.64062zM21.53516,11c-2.219,0 -3.48866,1.16045 -4.09766,2.31445h-0.06445v-2.00391h-4.37305v14.68945h4.55664v-7.27148c0,-1.916 0.14463,-3.76758 2.51563,-3.76758c2.337,0 2.37109,2.18467 2.37109,3.88867v7.15039h4.55078h0.00586v-8.06836c0,-3.948 -0.84884,-6.93164 -5.46484,-6.93164zM6.36328,11.31055v14.68945h4.56055v-14.68945z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
