import type { Metadata } from "next";
import { defaultLocale, pathnames } from "@/config";
import type { AppPathnames } from "@/config";

export const DEFAULT_SITE_ORIGIN = "https://viacommunication.com";

export function getSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_ORIGIN;
  return raw.replace(/\/$/, "");
}

/**
 * @param pathnameKey — key from `pathnames` in config (e.g. `/contact`, `/blogue`) or a path that is identical for every locale (e.g. `/faq`).
 */
export function localizedUrlPath(locale: string, pathnameKey: string): string {
  const map = pathnames[pathnameKey as AppPathnames] as
    | Record<string, string>
    | undefined;
  const segment =
    map && typeof map === "object" ? map[locale] ?? pathnameKey : pathnameKey;
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${localePrefix}${segment}`;
}

export function absoluteUrl(locale: string, pathnameKey: string): string {
  return `${getSiteOrigin()}${localizedUrlPath(locale, pathnameKey)}`;
}

export function blogPostPath(locale: string, slug: string): string {
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  if (locale === "fr") return `${localePrefix}/blogue/${slug}`;
  return `${localePrefix}/blog/${slug}`;
}

export function absoluteBlogPostUrl(locale: string, slug: string): string {
  return `${getSiteOrigin()}${blogPostPath(locale, slug)}`;
}

export function buildPageMetadata({
  locale,
  pathnameKey,
  title,
  description,
  ogImagePath = "/img/hero-home.webp",
}: {
  locale: string;
  pathnameKey: string;
  title: string;
  description: string;
  ogImagePath?: string;
}): Metadata {
  const origin = getSiteOrigin();
  const canonicalPath = localizedUrlPath(locale, pathnameKey);
  const canonical = `${origin}${canonicalPath}`;
  const imageUrl = ogImagePath.startsWith("http")
    ? ogImagePath
    : `${origin}${ogImagePath.startsWith("/") ? ogImagePath : `/${ogImagePath}`}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        "fr-CA": absoluteUrl("fr", pathnameKey),
        "en-CA": absoluteUrl("en", pathnameKey),
        "x-default": absoluteUrl(defaultLocale, pathnameKey),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "VIA Communication",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildBlogPostMetadata({
  locale,
  slug,
  title,
  description,
  ogImagePath,
}: {
  locale: string;
  slug: string;
  title: string;
  description: string;
  ogImagePath?: string;
}): Metadata {
  const origin = getSiteOrigin();
  const canonicalPath = blogPostPath(locale, slug);
  const canonical = `${origin}${canonicalPath}`;
  const imageUrl =
    ogImagePath && ogImagePath.startsWith("http")
      ? ogImagePath
      : ogImagePath
        ? ogImagePath.startsWith("/")
          ? `${origin}${ogImagePath}`
          : `${origin}/${ogImagePath}`
        : `${origin}/img/ad.webp`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        "fr-CA": absoluteBlogPostUrl("fr", slug),
        "en-CA": absoluteBlogPostUrl("en", slug),
        "x-default": absoluteBlogPostUrl(defaultLocale, slug),
      },
    },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      siteName: "VIA Communication",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd(origin: string) {
  const digits = process.env.NEXT_PUBLIC_PHONE?.replace(/\D/g, "") ?? "";
  return {
    "@type": "Organization",
    name: "VIA Communication",
    url: origin,
    logo: `${origin}/img/Logo.webp`,
    email: "info@viacommunication.com",
    ...(digits ? { telephone: `+1${digits}` } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: "1020, rue Bouvier, bureau 400",
      addressLocality: "Québec",
      addressRegion: "QC",
      postalCode: "G2K 0H3",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.facebook.com/VIACommunication/",
      "https://www.instagram.com/viacommunication1/",
    ],
  };
}

export function websiteJsonLd(origin: string) {
  return {
    "@type": "WebSite",
    name: "VIA Communication",
    url: origin,
    publisher: { "@type": "Organization", name: "VIA Communication" },
    inLanguage: ["fr-CA", "en-CA"],
  };
}

export function professionalServicesJsonLd(origin: string, locale: string) {
  const desc =
    locale === "fr"
      ? "Agence web et marketing numérique pour PME au Québec."
      : "Quebec web agency offering digital marketing and SEO for SMEs.";
  return {
    "@type": "ProfessionalService",
    name: "VIA Communication",
    url: origin,
    image: `${origin}/img/hero-home.webp`,
    description: desc,
    areaServed: { "@type": "AdministrativeArea", name: "Québec" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1020, rue Bouvier, bureau 400",
      addressLocality: "Québec",
      addressRegion: "QC",
      postalCode: "G2K 0H3",
      addressCountry: "CA",
    },
  };
}
