import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Streamline from "../components/Home/Streamline";
import Guide from "../components/Home/Guide";
import Contact from "../components/Home/Contact.jsx";
import ClientPortal from "../components/Home/ClientPortal .jsx";
// import Service from "../components/Home/Services.jsx";
// import Heading from "../components/Home/Faqs/Heading.jsx";
// import MyAccordion from "../components/Home/Faqs/MyAccordion.jsx";

const Home = ({ heroRef }) => {
  return (
    <>
      <div>
        <section id="hero" className="scroll-mt-[100px]" ref={heroRef}>
          <Hero />
        </section>

       <section id="features" ref={heroRef}>
         <Features />
       </section>

        {/* <Services id="service" ref={heroRef} /> */}

        <section id="streamline" ref={heroRef}>
          <Streamline  />
        </section>

        <section id="guide" ref={heroRef}>
          <Guide  />
        </section>

        <section id="features" ref={heroRef}>
          <ClientPortal  />
        </section>

        {/* <section id="faqs" ref={heroRef}>
          <Heading ref={heroRef} />
          <MyAccordion ref={heroRef} />
        </section> */}

        <section id="contact" ref={heroRef}>
          <Contact  />
          </section>
      </div>
    </>
  );
};

export default Home;
