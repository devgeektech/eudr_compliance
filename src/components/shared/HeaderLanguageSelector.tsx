"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  HeaderRightFlag1,
  HeaderRightFlag2,
} from "@/public/Home/images/svgs";
import {
  LANGUAGE_COOKIE,
  LOCALE_CHANGED_EVENT,
  type AppLocale,
  localeFromCookieValue,
} from "@/src/lib/i18n-locale";

const COOKIE_MAX_AGE_SEC = 60 * 60 * 24 * 365;

function readLocaleFromBrowser(): AppLocale {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${LANGUAGE_COOKIE}=([^;]*)`),
  );
  return localeFromCookieValue(match?.[1]?.trim());
}

function persistLocale(locale: AppLocale) {
  const value = locale === "ro" ? "ro" : "en";
  document.cookie = `${LANGUAGE_COOKIE}=${value}; path=/; max-age=${COOKIE_MAX_AGE_SEC}; SameSite=Lax`;
  document.documentElement.lang = value === "ro" ? "ro" : "en";
}

const HeaderLanguageSelector = () => {
  const router = useRouter();
const [locale, setLocale] = useState<AppLocale>(() => {
  if (typeof document === "undefined") return "en";
  return readLocaleFromBrowser();
});

  // useEffect(() => {
  //   setLocale(readLocaleFromBrowser());
  // }, []);

  const selectLocale = (next: AppLocale) => {
    if (next === locale) return;
    persistLocale(next);
    setLocale(next);
    window.dispatchEvent(new CustomEvent(LOCALE_CHANGED_EVENT));
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label="Switch language to English"
        title="English"
        onClick={() => selectLocale("en")}
        className={`cursor-pointer rounded-full transition ${
          locale === "en"
            ? "scale-105 ring-2 ring-[#D6C3A3] ring-offset-2 ring-offset-[#1E1E20]"
            : "opacity-55 saturate-75 hover:opacity-85"
        }`}
      >
        <HeaderRightFlag1 />
      </button>
      <button
        type="button"
        aria-label="Switch language to Romanian"
        title="Romana"
        onClick={() => selectLocale("ro")}
        className={`cursor-pointer rounded-full transition ${
          locale === "ro"
            ? "scale-105 ring-2 ring-[#D6C3A3] ring-offset-2 ring-offset-[#1E1E20]"
            : "opacity-55 saturate-75 hover:opacity-85"
        }`}
      >
        <HeaderRightFlag2 />
      </button>
    </div>
  );
};

export default HeaderLanguageSelector;
