import type { Metadata } from "next";
import { buildPageMetadataFromCopy } from "@/src/lib/seo/ro-metadata";
import { PAGE_SEO_COPY } from "@/src/lib/seo/page-seo-copy";
import StillHaveQuestions from '@/src/components/Faq/StillHaveQuestions'
import WhyChooseUsCards from '@/src/components/Faq/WhyChooseUsCards'
import FAQSection from '@/src/components/home/FAQsec'
import PageHeroBanner from '@/src/components/shared/PageHeroBanner'
import { getFaqs } from '@/src/lib/strapi-server'

export function generateMetadata(): Metadata {
  const seo = PAGE_SEO_COPY["/faq"];
  return buildPageMetadataFromCopy("/faq", seo.title, seo.description);
}

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
