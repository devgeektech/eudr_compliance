import type { Metadata } from "next";
import { buildPageMetadataFromCopy } from "@/src/lib/seo/ro-metadata";
import { PAGE_SEO_COPY } from "@/src/lib/seo/page-seo-copy";
import ContactSection from '@/src/components/Contact/ContactSection'
import StartYourEUDRComplianceJourneyToday from '@/src/components/Contact/StartYourEUDRComplianceJourneyToday'
import WhyChooseUs from '@/src/components/Contact/WhyChooseUs'

import PageHeroBanner from '@/src/components/shared/PageHeroBanner'
import React from 'react'

export function generateMetadata(): Metadata {
  const seo = PAGE_SEO_COPY["/contact"];
  return buildPageMetadataFromCopy("/contact", seo.title, seo.description);
}

const Page = () => {
  return (
    <div>
      <PageHeroBanner titleKey='page.contact'/>
      <ContactSection/>
    <WhyChooseUs/>
      <StartYourEUDRComplianceJourneyToday/>
    </div>
  )
}

export default Page
