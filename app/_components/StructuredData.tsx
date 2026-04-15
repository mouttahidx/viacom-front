import {
  getSiteOrigin,
  organizationJsonLd,
  websiteJsonLd,
  professionalServicesJsonLd,
} from "@/lib/seo";

export default function StructuredData({ locale }: { locale: string }) {
  const origin = getSiteOrigin();
  const graphs = [
    organizationJsonLd(origin),
    websiteJsonLd(origin),
    professionalServicesJsonLd(origin, locale),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graphs,
        }),
      }}
    />
  );
}
