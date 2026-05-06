"use client";

import { useState } from "react";
import { useTranslation } from "@/src/hooks/useTranslation";

const CookieBanner = () => {
  const { t } = useTranslation();

  const [show, setShow] = useState(() => {
    if (typeof document === "undefined") return false;
    return !document.cookie.includes("cookie_consent=");
  });

  const accept = () => {
    document.cookie =
      "cookie_consent=accepted; path=/; max-age=31536000";
    setShow(false);
  };

  const reject = () => {
    document.cookie =
      "cookie_consent=rejected; path=/; max-age=31536000";
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95vw] md:w-auto max-w-4xl z-[9999]">
      <div className="bg-[#131315]/95 backdrop-blur-md border border-white/10 text-white rounded-2xl shadow-2xl px-5 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        
        {/* Text */}
        <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-2xl">
          {t("cookieBanner.description")}{" "}
          <a href="/privacy-policy" className="underline hover:text-white">
            {t("cookieBanner.privacy")}
          </a>
        </p>

        {/* Buttons */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            {t("cookieBanner.reject")}
          </button>

          <button
            onClick={accept}
            className="px-5 py-2 text-sm bg-[#1E2A23] hover:bg-[#25352c] rounded-full transition font-medium"
          >
            {t("cookieBanner.accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;