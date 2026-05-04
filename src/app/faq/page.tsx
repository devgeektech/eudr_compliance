import StillHaveQuestions from '@/src/components/Faq/StillHaveQuestions'
import WhyChooseUsCards from '@/src/components/Faq/WhyChooseUsCards'
import FAQSection from '@/src/components/home/FAQsec'
import PageHeroBanner from '@/src/components/shared/PageHeroBanner'
import { getFaqs } from '@/src/lib/strapi-server'

export default async function page() {
  const faqs = await getFaqs()

  return (
    <div>
      <PageHeroBanner titleKey='page.faq'/>
      <FAQSection faqs={faqs}/>
      <StillHaveQuestions/>
      <WhyChooseUsCards/>
    </div>
  )
}
