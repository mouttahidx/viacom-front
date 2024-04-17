import { Pathnames } from 'next-intl/navigation';

export const locales = ["en", "fr"] as const;

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
    "/services": {
        en: "/our-services",
        fr: "/nos-services"
    },
    "/contact-us": {
        "en": "/contact-us",
        "fr": "/contactez-nous"
    }
};

export const localePrefix = "always";

export type AppPathnames = keyof typeof pathnames;