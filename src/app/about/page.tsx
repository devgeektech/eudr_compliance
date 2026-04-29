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
} from "@/src/lib/strapi";

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
      <PageHeroBanner title="about us" />
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
