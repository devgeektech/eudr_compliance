import ExploreByIndustry from '@/src/components/Industry/ExploreByIndustry'
import IndustryDetailSections from '@/src/components/Industry/IndustryDetailSections'
import TailoredComplianceAcrossIndustries from '@/src/components/Industry/TailoredComplianceAcrossIndustries'
import GetEUDRCompliantwithConfidence from '@/src/components/Services/GetEUDRCompliantwithConfidence'
import PageHeroBanner from '@/src/components/shared/PageHeroBanner'
import { getIndustrySections } from "@/src/lib/strapi-server";


import React from 'react'

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
