import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function IconsList() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/report.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">
            {t("services_1_1_title")}
          </h3>
          <p className="text-sm">
            {t("services_1_1_text")}
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/strategy.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">
            {t("services_1_2_title")}
          </h3>
          <p className="text-sm">
            {t("services_1_2_text")}
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/banner.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">
            {t("services_1_3_title")}
          </h3>
          <p className="text-sm">
            {t("services_1_3_text")}
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/reviews.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">
            {t("services_1_4_title")}
          </h3>
          <p className="text-sm">
            {t("services_1_4_text")}
          </p>
        </div>
      </div>
    </div>
  );
}