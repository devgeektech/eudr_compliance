export const LOCALE_CHANGED_EVENT = "app:locale-changed";

export const LANGUAGE_COOKIE = "language";
export type AppLocale = "en" | "ro";
export const DEFAULT_LOCALE: AppLocale = "ro";

export function appendLocaleQuery(endpoint: string, locale: AppLocale): string {
  if (locale !== "ro") return endpoint;
  return endpoint.includes("?") ? `${endpoint}&locale=ro` : `${endpoint}?locale=ro`;
}

export function localeFromCookieValue(value: string | undefined): AppLocale {
  if (value === "en") return "en";
  if (value === "ro") return "ro";
  return DEFAULT_LOCALE;
}

export function localeFromDocumentCookie(): AppLocale {
  if (typeof document === "undefined") return DEFAULT_LOCALE;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${LANGUAGE_COOKIE}=([^;]*)`),
  );
  return localeFromCookieValue(match?.[1]?.trim());
}
