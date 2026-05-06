"use client";

import React, { useState } from "react";
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
    new RegExp(`(?:^|;\\s*)${LANGUAGE_COOKIE}=([^;]*)`)
  );
  return localeFromCookieValue(match?.[1]?.trim());
}

function persistLocale(locale: AppLocale) {
  const value = locale === "ro" ? "ro" : "en";
  document.cookie = `${LANGUAGE_COOKIE}=${value}; path=/; max-age=${COOKIE_MAX_AGE_SEC}; SameSite=Lax`;
  document.documentElement.lang = value;
}

const HeaderLanguageSelector = () => {
  const router = useRouter();
  const [locale, setLocale] = useState<AppLocale>(() =>
    readLocaleFromBrowser()
  );
  const [open, setOpen] = useState(false);

  const selectLocale = (next: AppLocale) => {
    if (next === locale) {
      setOpen(false);
      return;
    }

    persistLocale(next);
    setLocale(next);
    window.dispatchEvent(new CustomEvent(LOCALE_CHANGED_EVENT));
    router.refresh();
    setOpen(false);
  };

  const current = locale === "ro"
    ? { label: "Română", Flag: HeaderRightFlag2 }
    : { label: "English", Flag: HeaderRightFlag1 };

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer rounded-lg bg-white px-3 py-2 shadow-sm"
      >
        <current.Flag />
        <span className="text-sm font-medium text-black">
          {current.label}
        </span>

        {/* Arrow */}
        <svg
          className={`h-4 w-4 text-black transition ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg border z-50">
          <button
            onClick={() => selectLocale("en")}
            className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg"
          >
            <HeaderRightFlag1 />
            <span className="text-sm text-black cursor-pointer">English</span>
          </button>

          <button
            onClick={() => selectLocale("ro")}
            className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg"
          >
            <HeaderRightFlag2 />
            <span className="text-sm text-black cursor-pointer">Română</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderLanguageSelector;