import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const services = [
    {
      id: 1,
      icon: "/Assets/All Images/Tick Square.png",
      bg: "#FAE0E1",
      text: "Super useful and easy to with over 100+ customisations!",
    },
    {
      id: 2,
      icon: "/Assets/All Images/Time Circle.png",
      bg: "#F3DEB3",
      text: "Super useful and easy to with over 100+ customisations!",
    },
    {
      id: 3,
      icon: "/Assets/All Images/Upload.png",
      bg: "#CBCFFA",
      text: "Super useful and easy to with over 100+ customizations!",
    },
  ];

  return (
    <div className=" flex flex-col justify-center items-center gap-15">
      {/* for hero Details */}
      <div className="grid justify-items-center items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-8 sm:gap-10">
        {/* for Details Section */}
        <div className=" w-full flex flex-col gap-8 ">
          {/* Heading + Para */}
          <div className="flex flex-col justify-start items-center gap-8 sm:gap-5 md:gap-8 ">
            <h1
              className="font-bold font-Jakarta leading-10 sm:leading-12 lg:leading-15 text-[#201C44] tracking-wider text-[30px] sm:text-[40px] md:text-[30px]
           lg:text-[35px]  xl:text-[54px] "
            >
              DutyFlex is a cloud-based Security Guard Management SaaS platform
            </h1>

            <p
              className=" font-medium text-[#131126] font-Jakarta leading-6 lg:leading-8 tracking-widest text-[14px]
            sm:text-[16px] max-md:text-[15px] max-lg:w-full"
            >
              Designed for security companies, Residential and Corporate
              security teams. It automates guard scheduling, payroll-ready
              reports, and invoicing through a unified dashboard.
            </p>
          </div>

          {/* Button Section */}
          <div
            className="flex justify-start items-center gap-3  
            max-md:flex-wrap "
          >
            {/* Contact Now */}
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#contact");
              }}
              className="text-center font-jakarta font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] px-4 py-2 rounded-sm bg-[#FAE0E1]
            hover:bg-[#201C44] hover:text-white transition-all duration-1400
              md:px-5 md:py-3 sm:px-4 sm:py-2"
            >
              Contact Now
            </button>

            {/* Arrow */}
            <button
              className="text-center px-4 py-2 text-[14px] text-[#201C44] rounded-sm bg-white border
          hover:bg-[#201C44] hover:text-white transition-all duration-1400
          max-md:px-5 max-md:py-3 max-sm:px-4 max-sm:py-2"
            >
              <FaChevronRight size={22} />
            </button>

            {/* Book a Demo */}
            <button
              className=" text-center font-jakarta font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] px-4 py-2 rounded-sm border border-black
          hover:bg-[#201C44] hover:text-white transition-all duration-1400
              md:px-5 md:py-3 sm:px-4 sm:py-2"
            >
              Book a Demo Today
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            className="w-[620px] h-[515px]
            max-xl:w-[520px] max-xl:h-[440px]
            max-lg:w-[850px] max-lg:h-[500px]
            max-md:w-[700px] max-md:h-[450px]
            max-sm:w-[450px] max-sm:h-[400px]"
            src="/Assets/All Images/image 19.png"
            alt="hero section img"
          />
        </div>
      </div>

      {/* Services */}
      <div
        className="rounded-sm w-full bg-[#3C3679] flex justify-around items-center flex-col p-10
      xl:p-8 lg:flex-row lg:gap-10 md:gap-10 sm:gap-6 md:p-6  sm:p-4 gap-4"
        style={{
          boxShadow:
            "rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="flex justify-between items-center gap-3 
      md:gap-4 sm:gap-3 lg:flex-row lg:text-center"
          >
            <div
              className="w-[50px] h-[50px] rounded-sm bg-[#FAE0E1] flex justify-center items-center
          max-sm:w-10 max-sm:h-10"
              style={{
                backgroundColor: service.bg,
                boxShadow:
                  "rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <img
                className="w-[25px] h-[25px] sm:w-5 sm:h-5"
                src={service.icon}
                alt="serviceIcon"
              />
            </div>

            <h2
              className="text-16 md:text-[14px] text-start w-full lg:w-50 xl:w-70  font-Jakarta font-normal leading-5 tracking-wider text-white
         "
            >
              {service.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
