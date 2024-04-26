"use client"
import { hasCookie, setCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);
  const t = useTranslations();
  useEffect(() => {
    setShowConsent(hasCookie("localConsent-viacom"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent-viacom", "true", {maxAge:24*60*60*1000});
  };

  if (showConsent) {
    return null;
  }

  return (
    
    <div className="z-[1000] flex-col gap-y-6 md:flex-row fixed bottom-0 left-0 right-0 flex items-start md:items-center justify-between px-4 py-8 bg-gray-100 border border-gray-300">
      <span className="text-dark text-base mr-16">
        <b>{t('rgpd.title')}</b>
        <br />
        {t('rgpd.text')}
      </span>
      <button
        className="bg-primary py-2 px-8 rounded text-white"
        onClick={() => acceptCookie()}
      >
        {t('btn.accept')}

      </button>
    </div>
  );
};

export default CookieConsent;
