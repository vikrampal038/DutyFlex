import React from 'react'
import Hero from '../component/Home/Hero'
import Features from '../component/Home/Features'
import Services from '../component/Home/Services'
import Faqs from '../component/Home/Faqs'
import Streamline from '../component/Home/Streamline'
import Guide from '../component/Home/Guide'
import ContactForm from '../component/Home/ContactForm'

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
        <ContactForm />
      </div>
    </>
  )
}

export default Home
