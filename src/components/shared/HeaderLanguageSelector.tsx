"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Globe, Check } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<AppLocale>("en");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocale(readLocaleFromBrowser());
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const selectLocale = (next: AppLocale) => {
    persistLocale(next);
    setLocale(next);
    setOpen(false);
    window.dispatchEvent(new CustomEvent(LOCALE_CHANGED_EVENT));
    router.refresh();
  };

  const label = locale === "ro" ? "RO" : "EN";

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-2 rounded-md bg-[#2C2C2E] px-3 py-2 text-sm font-medium text-white border border-white/10 hover:bg-[#3a3a3c] transition"
      >
        <Globe className="h-4 w-4 shrink-0 text-white/90" aria-hidden />
        <span>{label}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          role="listbox"
          className="absolute right-0 top-[calc(100%+8px)] z-[60] min-w-[220px] rounded-lg border border-white/10 bg-[#1a1a1a] py-2 shadow-xl"
        >
          <p className="px-3 pb-2 text-[11px] font-medium uppercase tracking-wide text-white/45">
            Select Language
          </p>
          <button
            type="button"
            role="option"
            aria-selected={locale === "en"}
            onClick={() => selectLocale("en")}
            className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-[#D6C3A3] hover:bg-white/10 ${
              locale === "en" ? "bg-white/10" : ""
            }`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full">
              <HeaderRightFlag1 />
            </span>
            <span className="flex-1">English (EN)</span>
            {locale === "en" ? (
              <Check className="h-4 w-4 shrink-0 text-white" aria-hidden />
            ) : (
              <span className="w-4" />
            )}
          </button>
          <button
            type="button"
            role="option"
            aria-selected={locale === "ro"}
            onClick={() => selectLocale("ro")}
            className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-[#D6C3A3] hover:bg-white/10 ${
              locale === "ro" ? "bg-white/10" : ""
            }`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full">
              <HeaderRightFlag2 />
            </span>
            <span className="flex-1">Română (RO)</span>
            {locale === "ro" ? (
              <Check className="h-4 w-4 shrink-0 text-white" aria-hidden />
            ) : (
              <span className="w-4" />
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderLanguageSelector;
