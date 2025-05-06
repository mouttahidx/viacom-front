export const locales = ["fr", "en"] as const;
export const defaultLocale = 'fr' as const;
export const pathnames =  {// put here subpathes
"/":{
    fr:"/",
    en:'/'
},
'/contact':
{
  en:"/contact-us",
  fr:"/contactez-nous"
},
"/services":{
  en:"/our-services",
  fr:"/nos-services"
},
"/blogue":{
    en:"/blog",
    fr:"/blogue"
  },
  "/nos-realisations":{
    en:"/our-work",
    fr:"/nos-realisations"
  },
  "/blogue/[...slug]":{
    en:"/blog/[...slug]",
    fr:"/blogue/[...slug]"
  },
"/services/agence-facebook-ads":{
  en:"/our-services/facebook-ads-agency",
  fr:"/nos-services/agence-facebook-ads"
},
"/services/agence-seo":{
  en:"/our-services/seo-agency",
  fr:"/nos-services/agence-seo"
},
"/services/agence-google-ads":{
  en:"/our-services/google-ads-agency",
  fr:"/nos-services/agence-google-ads"
},
"/services/agence-marketing-digital":{
  en:"/our-services/digital-marketing-agency",
  fr:"/nos-services/agence-marketing-digital"
},
"/services/via-crm":{
  en:"/our-services/via-crm",
  fr:"/nos-services/via-crm"
},

};

export const localePrefix = "as-needed";

export type AppPathnames = keyof typeof pathnames;
