import "server-only";

import { cookies } from "next/headers";
import { LANGUAGE_COOKIE, localeFromCookieValue, type AppLocale } from "./i18n-locale";
import {
  strapiFetch,
  type ProductCoveredItem,
  type WhatWeDoCardItem,
  type HowItWorksStepItem,
  type AboutStatItem,
  type AboutFeatureItem,
  type SustainabilityCardItem,
  type CompaniesMustDoCardItem,
  type ServiceSectionItem,
  type WhatWeOfferCardItem,
  type IndustrySectionItem,
  type PrivacyPolicyItem,
  type TermsItem,
  type FaqItem,
} from "./strapi-shared";

async function getLocale(): Promise<AppLocale> {
  const store = await cookies();
  return localeFromCookieValue(store.get(LANGUAGE_COOKIE)?.value);
}

export async function getProductsCovered() {
  return strapiFetch<ProductCoveredItem[]>(
    "/product-covereds?populate=image&sort=order:asc",
    await getLocale(),
  );
}

export async function getWhatWeDoCards() {
  return strapiFetch<WhatWeDoCardItem[]>(
    "/what-we-do-cards?populate=bgImage&sort=order:asc",
    await getLocale(),
  );
}

export async function getHowItWorksSteps() {
  return strapiFetch<HowItWorksStepItem[]>(
    "/how-it-works-steps?sort=order:asc",
    await getLocale(),
  );
}

export async function getAboutStats() {
  return strapiFetch<AboutStatItem[]>("/about-stats?sort=order:asc", await getLocale());
}

export async function getAboutFeatures() {
  return strapiFetch<AboutFeatureItem[]>(
    "/about-features?sort=order:asc",
    await getLocale(),
  );
}

export async function getSustainabilityCards() {
  return strapiFetch<SustainabilityCardItem[]>(
    "/sustainability-cards?sort=order:asc",
    await getLocale(),
  );
}

export async function getCompaniesMustDoCards() {
  return strapiFetch<CompaniesMustDoCardItem[]>(
    "/companies-must-do-cards?populate=image&sort=order:asc",
    await getLocale(),
  );
}

export async function getServiceSections() {
  return strapiFetch<ServiceSectionItem[]>(
    "/service-sections?populate[image]=true&populate[features]=true&sort=order:asc",
    await getLocale(),
  );
}

export async function getWhatWeOfferCards() {
  return strapiFetch<WhatWeOfferCardItem[]>(
    "/what-we-offer-cards?sort=order:asc",
    await getLocale(),
  );
}

export async function getIndustrySections() {
  return strapiFetch<IndustrySectionItem[]>(
    "/industry-sections?populate[image]=true&populate[features]=true&sort=order:asc",
    await getLocale(),
  );
}

export async function getPrivacyPolicies(): Promise<PrivacyPolicyItem[]> {
  const res = await strapiFetch<{ data: PrivacyPolicyItem[] }>(
    "/privacy-policies?sort=createdAt:asc",
    await getLocale(),
  );
  return res?.data ?? [];
}

export async function getTerms(): Promise<TermsItem[]> {
  const res = await strapiFetch<{ data: TermsItem[] }>(
    "/terms-and-services?sort=createdAt:asc",
    await getLocale(),
  );
  return res?.data ?? [];
}

export async function getFaqs(): Promise<FaqItem[]> {
  const res = await strapiFetch<{ data: FaqItem[] } | FaqItem[]>(
    "/faqs",
    await getLocale(),
  );
  if (Array.isArray(res)) return res;
  return (res as { data: FaqItem[] })?.data ?? [];
}
