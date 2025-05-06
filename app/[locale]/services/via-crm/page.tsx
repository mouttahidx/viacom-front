import PageLayout from "@/components/PageLayout"; // or whatever the component name is
import { useTranslations } from "next-intl";

export default function ViaCrmPage() {
  const t = useTranslations();

  return (
    <PageLayout
      title={t("via_crm_title")}
      subtitle={t("crm_hero_title")}
    >
      <div dangerouslySetInnerHTML={{ __html: t.raw("crm_intro_text") }} />

      <h2>{t("crm_features_title")}</h2>
      <ul>
        <li>{t("crm_feature_1_title")}</li>
        <li>{t("crm_feature_2_title")}</li>
        ...
      </ul>

      <h2>{t("crm_benefits_title")}</h2>
      <div dangerouslySetInnerHTML={{ __html: t.raw("crm_benefits_text") }} />
    </PageLayout>
  );
}
