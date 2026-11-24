import type { Metadata } from "next";
import { buildPageMetadataFromCopy } from "@/src/lib/seo/ro-metadata";
import { PAGE_SEO_COPY } from "@/src/lib/seo/page-seo-copy";
// import FAQSection from "../components/home/FAQsec";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import ProductsCoveredSec from "../components/home/ProductsCoveredSec";
import ReadyToEnsure from "../components/home/ReadyToEnsure";
import RiskIsReal from "../components/home/RiskIsReal";
import WhatWeDo from "../components/home/WhatWeDo";
import WhoWeHelp from "../components/home/WhoWeHelp";
import {
  getProductsCovered,
  getWhatWeDoCards,
  getHowItWorksSteps,
  getFaqs,
} from "@/src/lib/strapi-server";

export function generateMetadata(): Metadata {
  const seo = PAGE_SEO_COPY["/"];
  return buildPageMetadataFromCopy("/", seo.title, seo.description);
}

export default async function Home() {
  const [productsCovered, whatWeDoCards, howItWorksSteps, faqs] = await Promise.all([
    getProductsCovered(),
    getWhatWeDoCards(),
    getHowItWorksSteps(),
    getFaqs(),
  ]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <ProductsCoveredSec items={productsCovered} />
      <WhatWeDo items={whatWeDoCards} />
      <WhoWeHelp />
      <HowItWorks items={howItWorksSteps} />
      <ReadyToEnsure />
      <RiskIsReal />
      {/* <FAQSection faqs={faqs} /> */}
    </div>
  );
}
