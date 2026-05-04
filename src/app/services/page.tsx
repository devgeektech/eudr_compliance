

import GetEUDRCompliantwithConfidence from "@/src/components/Services/GetEUDRCompliantwithConfidence";
import OtherSections from "@/src/components/Services/OtherSections";
import WhatWeOffer from "@/src/components/Services/WhatWeOffer";
import PageHeroBanner from "@/src/components/shared/PageHeroBanner";
import { getWhatWeOfferCards, getServiceSections } from "@/src/lib/strapi-server";

export default async function ServicesPage() {
  const [whatWeOfferCards, serviceSections] = await Promise.all([
    getWhatWeOfferCards(),
    getServiceSections(),
  ]);

  return (
    <div>
      <PageHeroBanner titleKey='page.services' />
      <WhatWeOffer items={whatWeOfferCards} />
      <OtherSections sections={serviceSections} />
      <GetEUDRCompliantwithConfidence />
    </div>
  );
}
