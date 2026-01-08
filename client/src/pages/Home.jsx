import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Streamline from "../components/Home/Streamline";
import Guide from "../components/Home/Guide";
import Contact from "../components/Home/Contact.jsx";
import ClientPortal from "../components/Home/ClientPortal .jsx";
// import Service from "../components/Home/Services.jsx"

const Home = () => {
  return (
    <>
      <div>
        <Hero id="hero" className="scroll-mt-[100px]"></Hero> />
        <Features id="features" />
        {/* <Services id="service" /> */}
        <Streamline id="streamline" />
        <Guide id="guide" />
        <ClientPortal id="features" />
        {/* <section id="faqs">
          <Heading />
          <MyAccordion />
        </section> */}
        <Contact id="contact" />
      </div>
    </>
  );
};

export default Home;
