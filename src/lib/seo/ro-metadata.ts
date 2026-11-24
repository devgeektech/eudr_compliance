import type { Metadata } from "next";
import ro from "@/src/locales/ro.json";
import {
  DEFAULT_OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  SITE_URL,
  TITLE_SUFFIX,
} from "./constants";

type RoDictionary = Record<string, string>;

const RO = ro as RoDictionary;

export type PageMetadataKeys = {
  titleKey: keyof typeof ro | string;
  descriptionKey?: keyof typeof ro | string;
};

export function getRoString(key: string): string {
  return RO[key] ?? "";
}

export function buildSeoTitle(titleKey: string): string {
  const base = getRoString(titleKey);
  if (!base) return SITE_NAME;
  return `${base}${TITLE_SUFFIX}`;
}

export function buildPageMetadataFromCopy(
  pathname: string,
  titleBase: string,
  description?: string,
): Metadata {
  const title = titleBase.trim()
    ? `${titleBase.trim()}${TITLE_SUFFIX}`
    : SITE_NAME;

  return buildPageMetadata(pathname, { titleKey: "" }, description, title);
}

export function buildPageMetadata(
  pathname: string,
  keys: PageMetadataKeys,
  descriptionOverride?: string,
  titleOverride?: string,
): Metadata {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const pageUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  const title =
    titleOverride?.trim() ||
    (keys.titleKey ? buildSeoTitle(keys.titleKey) : SITE_NAME);
  const description =
    descriptionOverride?.trim() ||
    (keys.descriptionKey ? getRoString(keys.descriptionKey) : "") ||
    undefined;

  return {
    title,
    ...(description ? { description } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "ro_RO",
      url: pageUrl,
      siteName: SITE_NAME,
      title,
      ...(description ? { description } : {}),
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      ...(description ? { description } : {}),
      images: [DEFAULT_OG_IMAGE],
    },
  };
}