
import ContactSection from '@/src/components/Contact/ContactSection'
import StartYourEUDRComplianceJourneyToday from '@/src/components/Contact/StartYourEUDRComplianceJourneyToday'
import WhyChooseUs from '@/src/components/Contact/WhyChooseUs'

import PageHeroBanner from '@/src/components/shared/PageHeroBanner'
import React from 'react'

const Page = () => {
  return (
    <div>
      <PageHeroBanner title='Contact Us'/>
      <ContactSection/>
    <WhyChooseUs/>
      <StartYourEUDRComplianceJourneyToday/>
    </div>
  )
}

export default Page
