import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";

export default function IconsList() {
  const intl = useIntl();
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
            {intl.formatMessage({ id: "services.1.1.title" })}
          </h3>
          <p className="text-sm">
            {intl.formatMessage({ id: "services.1.1.text" })}
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
            {intl.formatMessage({ id: "services.1.2.title" })}
          </h3>
          <p className="text-sm">
            {intl.formatMessage({ id: "services.1.2.text" })}
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
            {intl.formatMessage({ id: "services.1.3.title" })}
          </h3>
          <p className="text-sm">
            {intl.formatMessage({ id: "services.1.3.text" })}
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
            {intl.formatMessage({ id: "services.1.4.title" })}
          </h3>
          <p className="text-sm">
            {intl.formatMessage({ id: "services.1.4.text" })}
          </p>
        </div>
      </div>
    </div>
  );
}
