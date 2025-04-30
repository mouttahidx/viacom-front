import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';
import { IntlErrorCode } from 'next-intl';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    // The locale is valid, so we can use it to load the correct messages
    locale,
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected and should only log an error
        console.error(error);
      } else {
        // Other errors indicate a bug in the app and should be reported
        console.error(error);      }
    },
    getMessageFallback({namespace, key, error}) {
      const path = [namespace, key].filter((part) => part != null).join('.');
 
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + ' is not yet translated';
      } else {
        return 'Dear developer, please fix this message: ' + path;
      }
    },
    messages: (
      await (locale === 'fr'
        ? // When using Turbopack, this will enable HMR for `en`
          import('./messages/fr.json')
        : import(`./messages/en.json`))
    ).default
  };
});