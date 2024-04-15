import Image from "next/image";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function IconsList() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/facebook-ads.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">
            <FormattedMessage id="home.3.1.title" />
          </h3>
          <p className="body-text">
            <FormattedMessage id="home.3.1.subtitle" />
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/google-ads.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">
            <FormattedMessage id="home.3.2.title" />
          </h3>
          <p className="body-text">
            <FormattedMessage id="home.3.2.subtitle" />
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/digital-marketing.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">
            <FormattedMessage id="home.3.3.title" />
          </h3>
          <p className="body-text">
            <FormattedMessage id="home.3.3.subtitle" />
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <Image
          src={"/img/seo.webp"}
          alt=""
          width={100}
          height={100}
          className="object-contain w-[100px]"
        />
        <div className="flex flex-col gap-y-3">
          <h3 className="list-title">
            <FormattedMessage id="home.3.4.title" />
          </h3>
          <p className="body-text">
            <FormattedMessage id="home.3.4.subtitle" />
          </p>
        </div>
      </div>
    </div>
  );
}
