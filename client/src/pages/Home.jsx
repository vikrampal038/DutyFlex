import React from 'react'
import Hero from '../component/Home/Hero'
import Features from '../component/Home/Features'
import Services from '../component/Home/Services'
import Pricing from '../component/Home/Pricing'
import Faqs from '../component/Home/Faqs'

const Home = () => {
  return (
    <>
      <div >
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <Faqs />
      </div>
    </>
  )
}

export default Home
