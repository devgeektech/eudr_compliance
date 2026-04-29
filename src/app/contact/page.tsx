import ContactForm from '@/src/components/Contact/ContactForm'
import PageHeroBanner from '@/src/components/shared/PageHeroBanner'
import React from 'react'

const Page = () => {
  return (
    <div>
      <PageHeroBanner title='Contact Us'/>
      <ContactForm/>
    </div>
  )
}

export default Page
