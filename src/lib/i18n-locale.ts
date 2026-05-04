export const LOCALE_CHANGED_EVENT = "app:locale-changed";

export const LANGUAGE_COOKIE = "language";
export type AppLocale = "en" | "ro";

export function appendLocaleQuery(endpoint: string, locale: AppLocale): string {
  if (locale !== "ro") return endpoint;
  return endpoint.includes("?") ? `${endpoint}&locale=ro` : `${endpoint}?locale=ro`;
}

export function localeFromCookieValue(value: string | undefined): AppLocale {
  return value === "ro" ? "ro" : "en";
}

export function localeFromDocumentCookie(): AppLocale {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${LANGUAGE_COOKIE}=([^;]*)`),
  );
  return localeFromCookieValue(match?.[1]?.trim());
}
