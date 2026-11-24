import type { Metadata } from "next";
import { buildPageMetadataFromCopy } from "@/src/lib/seo/ro-metadata";
import { PAGE_SEO_COPY } from "@/src/lib/seo/page-seo-copy";
import ExploreByIndustry from '@/src/components/Industry/ExploreByIndustry'
import IndustryDetailSections from '@/src/components/Industry/IndustryDetailSections'
import TailoredComplianceAcrossIndustries from '@/src/components/Industry/TailoredComplianceAcrossIndustries'
import GetEUDRCompliantwithConfidence from '@/src/components/Services/GetEUDRCompliantwithConfidence'
import PageHeroBanner from '@/src/components/shared/PageHeroBanner'
import { getIndustrySections } from "@/src/lib/strapi-server";


import React from 'react'

export function generateMetadata(): Metadata {
  const seo = PAGE_SEO_COPY["/industry"];
  return buildPageMetadataFromCopy("/industry", seo.title, seo.description);
}

const page = async () => {

  const industries= await getIndustrySections()
  return (
    <div>
      <PageHeroBanner titleKey='page.industries'/>
      <TailoredComplianceAcrossIndustries/>
      <ExploreByIndustry/>
      <IndustryDetailSections sections={industries}/>
      <GetEUDRCompliantwithConfidence/>
    </div>
  )
}

export default page
