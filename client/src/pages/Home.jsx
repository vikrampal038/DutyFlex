import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Streamline from "../components/Home/Streamline";
import Guide from "../components/Home/Guide";
import Contact from "../components/Home/Contact.jsx";
import ClientPortal from "../components/Home/ClientPortal .jsx";
// import Pricing from "../components/Home/Pricing.jsx";
// import Service from "../components/Home/Services.jsx";
// import Heading from "../components/Home/Faqs/Heading.jsx";
// import MyAccordion from "../components/Home/Faqs/MyAccordion.jsx";

const Home = ({ heroRef }) => {
  return (
    <>
      <div>
        <section id="hero" className="scroll-mt-[100px]">
          <Hero />
        </section>

        <section id="features">
          <Features />
        </section>

        {/* <Services id="service" ref={heroRef} /> */}

        <section id="streamline">
          <Streamline />
        </section>

        <section id="guide" >
          <Guide />
        </section>

        <section id="Client-Portal" >
          <ClientPortal />
        </section>

        {/* <section id="guide" ref={heroRef}>
          <Pricing />
        </section> */}

        {/* <section id="faqs" ref={heroRef}>
          <Heading ref={heroRef} />
          <MyAccordion ref={heroRef} />
        </section> */}

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
