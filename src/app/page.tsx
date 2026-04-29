

import FAQSection from "../components/home/FAQsec";
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
} from "@/src/lib/strapi";

export default async function Home() {
  const [productsCovered, whatWeDoCards, howItWorksSteps] = await Promise.all([
    getProductsCovered(),
    getWhatWeDoCards(),
    getHowItWorksSteps(),
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
      <FAQSection />
    </div>
  );
}
