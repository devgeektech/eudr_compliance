"use client";

import { useState, useEffect, useCallback } from "react";
import { LOCALE_CHANGED_EVENT, localeFromDocumentCookie, type AppLocale } from "@/src/lib/i18n-locale";
import en from "@/src/locales/en.json";
import ro from "@/src/locales/ro.json";

const dictionaries: Record<AppLocale, Record<string, string>> = { en, ro };

export function useTranslation() {
  const [locale, setLocale] = useState<AppLocale>("ro");

useEffect(() => {
  const handleChange = () => setLocale(localeFromDocumentCookie());
  window.addEventListener(LOCALE_CHANGED_EVENT, handleChange);
  return () => window.removeEventListener(LOCALE_CHANGED_EVENT, handleChange);
}, []);

  const t = useCallback(
    (key: string): string => dictionaries[locale][key] ?? key,
    [locale]
  );

  return { t, locale };
}
