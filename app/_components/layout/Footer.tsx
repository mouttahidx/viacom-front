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
            <p className="text-white mt-2">
              Québec: {process.env.NEXT_PUBLIC_PHONE}
            </p>
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
                rel="nofollow"
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
              rel="nofollow"
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
            <a
              className="text-white mt-2 font-semibold"
              href="https://francoisbeaudry.ca/"
              rel="nofollow"
              target="_blank"
            >
              Francois Beaudry
            </a>
            <p className="text-white mt-2 flex flex-col gap-y-2">
              <Link href="/politiques-de-confidentialite" rel="nofollow">
                {t("footer_policies")}
              </Link>
              <Link href="/conditions-d-utilisation" rel="nofollow">
                {t("footer_terms")}
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
              rel="nofollow"
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
              rel="nofollow"
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

            <a
              href="https://www.instagram.com/viacommunication1/"
              target="_blank"
              rel="nofollow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="fill-white w-4 h-4 "
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
