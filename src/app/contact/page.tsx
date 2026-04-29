import BookACallCard from '@/src/components/Contact/BookACallCard'
import ContactDetails from '@/src/components/Contact/ContactDetails'
import ContactForm from '@/src/components/Contact/ContactForm'
import ContactSection from '@/src/components/Contact/ContactSection'
import PageHeroBanner from '@/src/components/shared/PageHeroBanner'
import React from 'react'

const Page = () => {
  return (
    <div>
      <PageHeroBanner title='Contact Us'/>
      <ContactSection/>
    </div>
  )
}

export default Page
