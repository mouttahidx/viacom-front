import { getLocale } from "next-intl/server";
import Script from "next/script";
import React from "react";

export default async function IframeForm() {
  const locale = await getLocale();
  return (
    <>
      {locale === "fr" ? (
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/a8pxVmg4UGizGp1zl7bE"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "3px",
          }}
          id="inline-a8pxVmg4UGizGp1zl7bE"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Web Form FR"
          data-height="754"
          data-layout-iframe-id="inline-a8pxVmg4UGizGp1zl7bE"
          data-form-id="a8pxVmg4UGizGp1zl7bE"
          title="Web Form FR"
        ></iframe>
      ) : (
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/TJSNAQjFXR652ciVOpBE"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "3px",
          }}
          id="inline-TJSNAQjFXR652ciVOpBE"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Web Form EN"
          data-height="714"
          data-layout-iframe-id="inline-TJSNAQjFXR652ciVOpBE"
          data-form-id="TJSNAQjFXR652ciVOpBE"
          title="Web Form EN"
        ></iframe>
      )}

      <Script src="https://link.msgsndr.com/js/form_embed.js" />
    </>
  );
}
