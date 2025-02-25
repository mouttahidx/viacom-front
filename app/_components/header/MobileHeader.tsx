import Image from "next/image";
import { Link } from "@/navigation"; 
import FreeQuote from "./FreeQuote";
import {  useTranslations } from "next-intl";
import LanguageSelect from "./LanguageSelect";
import MobileDrawer from "./MobileDrawer";

export default function MobileHeader() {
  const t = useTranslations();

  const translations = {
    'nav_fb':t('nav_fb'),
    'nav_google':t('nav_google'),
    'nav_marketing':t('nav_marketing'),
    'nav_seo':t('nav_seo'),
    'nav_services':t('nav_services'),
    'nav_portfolio':t('nav_portfolio'),
    'nav_blog':t('nav_blog'),
    'nav_contact':t('nav_contact'),
    'nav_faq':t('nav_faq'),
  }
  return (
    <div>
      <div className="w-full px-4 block lg:hidden">
        <div className="w-full flex justify-between items-center border-b border-gray-300">
          <Link href={"/"} rel="canonical">
            <Image
              unoptimized
              src="/img/Logo-dark.webp"
              width={100}
              height={80}
              className="w-[75px]"
              alt="logo of viacommunication"
            />
          </Link>
          <LanguageSelect />
        </div>
        {/* bottom div */}
        <div className="flex justify-between py-2 pl-3">
          <MobileDrawer translations={translations} />

          <FreeQuote />
        </div>
      </div>
    </div>
  );
}
