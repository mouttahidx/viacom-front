import createMiddleware from "next-intl/middleware";
import { pathnames,localePrefix,locales,defaultLocale } from "./config";
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  localeDetection: false,
  localePrefix,
  pathnames
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',],
};