import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-8"
    >
      {/* for hero Details */}
      <div
        className="flex justify-around items-center 
    max-lg:flex-col max-lg:gap-10 max-md:gap-8 max-sm:gap-6"
      >
        {/* for Details Section */}
        <div
          className=" flex flex-col  
      max-lg:w-full max-md:gap-8 max-sm:gap-6"
        >
          {/* Heading + Para */}
          <div
            className="flex flex-col justify-start items-center gap-8
        max-md:gap-8 max-sm:gap-5"
          >
            <h1
              className="font-bold font-Jakarta leading-12 lg:leading-15 text-[#201C44] tracking-wider
          xl:text-[54px] lg:text-[35px] md:text-[30px] max-sm:text-[40px]"
            >
              DutyFlex is a cloud-based Security Guard Management SaaS platform
            </h1>

            <p
              className=" font-medium text-[#131126] font-Jakarta leading-6 lg:leading-8 tracking-widest
          max-lg:w-full max-md:text-[15px] max-sm:text-[18px]"
            >
              Designed for security companies, Residential and Corporate
              security teams. It automates guard scheduling, payroll-ready
              reports, and invoicing through a unified dashboard.
            </p>
          </div>

          {/* Button Section */}
          <div
            className="flex justify-start items-center gap-5 
            max-md:flex-wrap max-md:gap-4 max-sm:gap-3"
          >
            {/* Contact Now */}
            <button
              className="text-center font-jakarta font-bold text-[16px] px-6 py-4 rounded-sm bg-[#FAE0E1]
            hover:bg-[#201C44] hover:text-white transition-all duration-1400
              max-md:px-5 max-md:py-3 max-sm:px-4 max-sm:py-2"
            >
              Contact Now
            </button>

            {/* Arrow */}
            <button
              className="text-center px-6 py-4 text-[#201C44] rounded-sm bg-white border
          hover:bg-[#201C44] hover:text-white transition-all duration-1400
          max-md:px-5 max-md:py-3 max-sm:px-4 max-sm:py-2"
            >
              <FaChevronRight size={22} />
            </button>

            {/* Book a Demo */}
            <button
              className="text-center font-jakarta font-bold text-[16px] px-6 py-4 rounded-sm border border-black
          hover:bg-[#201C44] hover:text-white transition-all duration-1400
          max-md:px-5 max-md:py-3 max-sm:px-4 max-sm:py-2"
            >
              Book a Demo Today
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-end items-center max-lg:justify-center max-lg:w-full">
          <img
            className="inline-block w-[620px] h-[515px]
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
        className="rounded-sm w-full bg-[#3C3679] flex justify-around items-center p-10
      max-xl:p-8 max-lg:flex-col max-lg:gap-10 max-md:gap-8 max-sm:gap-6 max-md:p-6 max-sm:p-4"
        style={{
          boxShadow:
            "rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        {/* Service 1 */}
        <div
          className="flex justify-between items-center gap-3 
      max-md:gap-4 max-sm:gap-3 max-lg:flex-col max-lg:text-center"
        >
          <div
            className="w-[50px] h-[50px] rounded-sm bg-[#FAE0E1] flex justify-center items-center
          max-sm:w-10 max-sm:h-10"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <img
              className="w-[25px] h-[25px] sm:w-5 sm:h-5"
              src="/Assets/All Images/Tick Square.png"
              alt="serviceIcon"
            />
          </div>

          <h2
            className="text-16 w-10 lg:w-65 font-Jakarta font-normal leading-5 tracking-wider text-white
        max-lg:w-full max-md:text-[14px]"
          >
            Super useful and easy to with over 100+ customisations!
          </h2>
        </div>

        {/* Service 2 */}
        <div
          className="flex justify-between items-center gap-3 
      max-md:gap-4 max-sm:gap-3 max-lg:flex-col max-lg:text-center"
        >
          <div
            className="w-[50px] h-[50px] rounded-sm bg-[#F3DEB3] flex justify-center items-center
          max-sm:w-[40px] max-sm:h-[40px]"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <img
              className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]"
              src="/Assets/All Images/Time Circle.png"
              alt="serviceIcon"
            />
          </div>

          <h2
            className="text-16 w-65 font-Jakarta  font-normal leading-5 tracking-wider text-white
        max-lg:w-full max-md:text-[14px]"
          >
            Super useful and easy to with over 100+ customisations!
          </h2>
        </div>

        {/* Service 3 */}
        <div
          className="flex justify-between items-center gap-3
          max-md:gap-4 max-sm:gap-3 max-lg:flex-col max-lg:text-center"
        >
          <div
            className="w-[50px] h-[50px] rounded-sm bg-[#CBCFFA] flex justify-center items-center
          max-sm:w-[40px] max-sm:h-[40px]"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <img
              className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]"
              src="/Assets/All Images/Upload.png"
              alt="serviceIcon"
            />
          </div>

          <h2
            className="text-16 w-65 font-Jakarta  font-normal leading-5 tracking-wider text-white
            max-lg:w-full max-md:text-[14px]"
          >
            Super useful and easy to with over 100+ customizations!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
