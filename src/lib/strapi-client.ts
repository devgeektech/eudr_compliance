import { localeFromDocumentCookie } from "./i18n-locale";
import {
  strapiFetch,
  type ExploreIndustryResponse,
  type ExploreIndustryItem,
  type WhyChooseUsCardItem,
} from "./strapi-shared";

export async function getExploreIndustries(): Promise<ExploreIndustryItem[]> {
  const locale = localeFromDocumentCookie();
  const res = await strapiFetch<ExploreIndustryResponse>(
    "/explore-industries",
    locale,
  );
  return res?.data ?? [];
}

export async function getWhyChooseUsCards(): Promise<WhyChooseUsCardItem[]> {
  const locale = localeFromDocumentCookie();
  const res = await strapiFetch<{ data: WhyChooseUsCardItem[] }>(
    "/why-choose-us-cards",
    locale,
  );
  return res?.data ?? [];
}
