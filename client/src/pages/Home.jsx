import React from 'react'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Services from '../components/Home/Services'
import Faqs from '../components/Home/Faqs/Faqs.jsx'
import Streamline from '../components/Home/Streamline'
import Guide from '../components/Home/Guide'
import MyAccordion from '../components/Home/Faqs/Accordion.jsx'
import ContactForm from '../components/Home/ContactForm.jsx'

const Home = () => {
  return (
    <>
      <div >
        <Hero />
        <Features />
        <Services />
        <Streamline />
        <Guide />
        <Faqs />
        <MyAccordion />
        <ContactForm />
      </div>
    </>
  )
}

export default Home
