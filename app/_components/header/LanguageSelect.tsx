import {useLocale} from 'next-intl';
import {locales} from '@/config';
import Switcher from './Switcher';

export default function LanguageSelect() {
  const locale = useLocale();
  return (
    <Switcher defaultValue={locale} label={"tests"}>
      {locales.map((cur) => (
        <option key={cur} value={cur} className='text-black'>
          {cur}
        </option>
      ))}
    </Switcher>
  );
}