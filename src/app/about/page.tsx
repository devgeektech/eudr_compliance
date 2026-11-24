import type { Metadata } from "next";
import { buildPageMetadataFromCopy } from "@/src/lib/seo/ro-metadata";
import { PAGE_SEO_COPY } from "@/src/lib/seo/page-seo-copy";
import CompaniesMustDo from "@/src/components/About/CompaniesMustDo";
import EmpoweringSustainability from "@/src/components/About/EmpoweringSustainability";
import GethelpwithEUDRcompliance from "@/src/components/About/GethelpwithEUDRcompliance";
import ImplementationTimeline from "@/src/components/About/ImplementationTimeline";
import RisksOfNonCompliance from "@/src/components/About/RisksOfNonCompliance";
import TheComplianceLedger from "@/src/components/About/TheComplianceLedger";
import WhatIsEUDR from "@/src/components/About/WhatIsEUDR";
import ProductsCoveredSec from "@/src/components/home/ProductsCoveredSec";
import PageHeroBanner from "@/src/components/shared/PageHeroBanner";
import {
  getAboutStats,
  getAboutFeatures,
  getSustainabilityCards,
  getCompaniesMustDoCards,
  getProductsCovered,
} from "@/src/lib/strapi-server";

export function generateMetadata(): Metadata {
  const seo = PAGE_SEO_COPY["/about"];
  return buildPageMetadataFromCopy("/about", seo.title, seo.description);
}

export default async function AboutPage() {
  const [stats, features, sustainabilityCards, companiesMustDoCards, productsCovered] =
    await Promise.all([
      getAboutStats(),
      getAboutFeatures(),
      getSustainabilityCards(),
      getCompaniesMustDoCards(),
      getProductsCovered(),
    ]);

  return (
    <div>
      <PageHeroBanner titleKey='page.about' />
      <WhatIsEUDR stats={stats} features={features} />
      <EmpoweringSustainability cards={sustainabilityCards} />
      <ProductsCoveredSec items={productsCovered} />
      <CompaniesMustDo items={companiesMustDoCards} />
      <TheComplianceLedger />
      <RisksOfNonCompliance />
      <ImplementationTimeline />
      <GethelpwithEUDRcompliance />
    </div>
  );
}
