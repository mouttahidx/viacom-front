import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { FormattedMessage } from "react-intl";
const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
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
        <b><FormattedMessage id="rgpd.title" /></b>
        <br />
        <FormattedMessage id="rgpd.text" />
      </span>
      <button
        className="bg-primary py-2 px-8 rounded text-white"
        onClick={() => acceptCookie()}
      >
      <FormattedMessage id="btn.accept" />
      </button>
    </div>
  );
};

export default CookieConsent;
