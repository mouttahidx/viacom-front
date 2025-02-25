import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function IconsList() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex gap-x-4 ">
        <Image
          unoptimized
          src={"/img/facebook-ads.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">{t("home_3_1_title")}</h3>
          <p className="body-text">{t("home_3_1_subtitle")}</p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          unoptimized
          src={"/img/google-ads.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">{t("home_3_2_title")}</h3>
          <p className="body-text">{t("home_3_2_subtitle")}</p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          unoptimized
          src={"/img/digital-marketing.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">{t("home_3_3_title")}</h3>
          <p className="body-text">{t("home_3_3_subtitle")}</p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          unoptimized
          src={"/img/seo.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">{t("home_3_4_title")}</h3>
          <p className="body-text">{t("home_3_4_subtitle")}</p>
        </div>
      </div>
    </div>
  );
}
