import React from 'react'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Services from '../components/Home/Services'
import Faqs from '../components/Home/Faqs'
import Streamline from '../components/Home/Streamline'
import Guide from '../components/Home/Guide'
import Contact from '../components/Home/Contact'
import Accordian from '../components/Home/Accordian'

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
        <Accordian />
        <Contact />
      </div>
    </>
  )
}

export default Home
