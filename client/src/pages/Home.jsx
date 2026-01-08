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
        <Hero id="hero" className="scroll-mt-[100px]" ref={heroRef} />
        <Features id="features" ref={heroRef} />
        {/* <Services id="service" ref={heroRef} /> */}
        <Streamline id="streamline" ref={heroRef} />
        <Guide id="guide" ref={heroRef} />
        <ClientPortal id="features" ref={heroRef} />
        {/* <section id="faqs" ref={heroRef}>
          <Heading ref={heroRef} />
          <MyAccordion ref={heroRef} />
        </section> */}
        <Contact id="contact" ref={heroRef} />
      </div>
    </>
  );
};

export default Home;
