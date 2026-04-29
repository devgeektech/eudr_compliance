import StillHaveQuestions from '@/src/components/Faq/StillHaveQuestions'
import WhyChooseUsCards from '@/src/components/Faq/WhyChooseUsCards'
import FAQSection from '@/src/components/home/FAQsec'
import PageHeroBanner from '@/src/components/shared/PageHeroBanner'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHeroBanner title='Fraquently Asked Questions'/>
      <FAQSection/>
      <StillHaveQuestions/>
      <WhyChooseUsCards/>
    </div>
  )
}

export default page
