import { appendLocaleQuery, type AppLocale } from "./i18n-locale";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "https://admin.eudrcompliancehub.com";

export function getStrapiMediaURL(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

export async function strapiFetch<T>(
  endpoint: string,
  locale: AppLocale,
  options?: { noCache?: boolean }
): Promise<T> {
  const path = appendLocaleQuery(endpoint, locale);

  try {
    const res = await fetch(`${STRAPI_URL}/api${path}`, {
      cache: options?.noCache ? "no-store" : "force-cache",
    });

    if (!res.ok) throw new Error(`API Error: ${res.status}`);

    const json = await res.json();
    return json as T;
  } catch {
    return {} as T;
  }
}

async function postAPI<T>(endpoint: string, body: unknown): Promise<T> {
  try {
    const res = await fetch(`${STRAPI_URL}/api${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error(`API Error: ${res.status}`);

    return await res.json();
  } catch (error) {
    console.error("POST API Error:", error);
    throw error;
  }
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type StrapiMedia = {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
};

export type ProductCoveredItem = {
  id: number;
  documentId: string;
  name: string;
  image: StrapiMedia | null;
  order: number;
};

export type WhatWeDoCardItem = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  bgImage: StrapiMedia | null;
  iconKey: string;
  order: number;
};

export type HowItWorksStepItem = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  iconKey: string;
  order: number;
};

export type AboutStatItem = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  order: number;
};

export type AboutFeatureItem = {
  id: number;
  documentId: string;
  text: string;
  iconKey: string;
  order: number;
};

export type SustainabilityCardItem = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  iconKey: string;
  order: number;
};

export type CompaniesMustDoCardItem = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  image: StrapiMedia | null;
  iconKey: string;
  order: number;
};

export type ServiceFeatureItem = {
  id: number;
  title: string;
  text: string;
  iconKey: string;
};

export type ServiceSectionItem = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  background: "dark" | "charcoal";
  imagePosition: "left" | "right";
  image: StrapiMedia | null;
  order: number;
  features: ServiceFeatureItem[];
};

export type WhatWeOfferCardItem = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  iconKey: string;
  order: number;
};
export type StrapiPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
export type ExploreIndustryResponse = {
  data: ExploreIndustryItem[];
  meta?: StrapiPagination;
};
export type ExploreIndustryItem = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  iconKey: string;
};

export type IndustryFeatureItem = {
  id: number;
  iconKey: string;
  title: string;
  text: string;
};

export type IndustrySectionItem = {
  id: number;
  documentId: string;
  pageName: string;
  title: string;
  description: string;
  background: "dark" | "charcoal";
  imagePosition: "left" | "right";
  image: StrapiMedia | null;
  iconBoxBg: string;
  order: number;
  showMiniCTAAfter: boolean;
  features: IndustryFeatureItem[];
};

export type WhyChooseUsCardItem = {
  id: number;
  title: string;
  description: string;
  iconKey: string;
  order: number;
};

type StrapiBlock = {
  type: string;
  children?: {
    type: string;
    text: string;
    bold?: boolean;
  }[];
};

export type PrivacyPolicyItem = {
  id: number;
  documentId: string;
  title: string;
  content: StrapiBlock[];
};

export type TermsItem = {
  id: number;
  documentId: string;
  title: string;
  content: {
    type: string;
    children?: {
      type: string;
      text: string;
      bold?: boolean;
    }[];
  }[];
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export function submitContactForm(data: {
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}) {
  return postAPI("/contact-submissions", {
    data,
  });
}
