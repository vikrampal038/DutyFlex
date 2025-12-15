import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Services from "../components/Home/Services";
import Heading from "../components/Home/Faqs/Heading.jsx";
import Streamline from "../components/Home/Streamline";
import Guide from "../components/Home/Guide";
import MyAccordion from "../components/Home/Faqs/MyAccordion.jsx";
import ContactForm from "../components/Home/ContactForm.jsx";
import ClientPortal from "../components/Home/ClientPortal .jsx";
const Home = () => {
  return (
    <>

      <div>
        <Hero />
        <Features />
        <Services />
        <Streamline />
        <Guide />
        <ClientPortal  />
        <Heading />
        <MyAccordion />
        
        {/* Contact section with id */}
        <section id="contact">
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Home;
