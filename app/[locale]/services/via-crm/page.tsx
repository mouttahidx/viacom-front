import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageLayout from "@/components/PageLayout"; // Update this import path if your layout component is named differently
import React from "react";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("via_crm_title"),
    description: t("meta_description"),
  };
}

export default function ViaCrmPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  return (
    <PageLayout title={t("via_crm_title")} subtitle={t("crm_hero_title")}>
      <div className="space-y-6">
        {/* Intro */}
        <div dangerouslySetInnerHTML={{ __html: t.raw("crm_intro_text") }} />

        {/* Features */}
        <h2 className="text-2xl font-semibold mt-8">{t("crm_features_title")}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("crm_feature_1_title")}</li>
          <li>{t("crm_feature_2_title")}</li>
          <li>{t("crm_feature_3_title")}</li>
          <li>{t("crm_feature_4_title")}</li>
          <li>{t("crm_feature_5_title")}</li>
          <li>{t("crm_feature_6_title")}</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold mt-8">{t("crm_benefits_title")}</h2>
        <div dangerouslySetInnerHTML={{ __html: t.raw("crm_benefits_text") }} />
      </div>
    </PageLayout>
  );
}
