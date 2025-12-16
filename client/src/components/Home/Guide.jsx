import React from "react";
import { GuideData } from "../../data/GuideData";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const Guide = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center bg-[#3C367905]">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 ">
        {/* Mobile Image */}
        <div className="w-full flex justify-center items-center lg:w-1/2 border">
          <img
            className="w-[300px] sm:w-[350px] md:w-[350px] lg:w-[400px]  object-contain"
            src="/Assets/Guide/image 21.png"
            alt="guide mobile image"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8 px-2 sm:px-4 border">
          {/* Heading */}
          <div className="w-full text-center lg:text-start flex flex-col gap-4">
            <h1
              className="font-jakarta text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40] w-full font-bold text-[#201C44] leading-8 sm:leading-10 md:leading-12 "
            >
              Guided Mobile App Tour
            </h1>

            <h2
              className="text-[16px] sm:text-[18px] md:text-[20px] 
                       font-manrope font-normal text-[#383838] tracking-wide leading-8"
            >
              Explore every feature of the mobile app with our step-by-step
              guided tour.
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-7 lg:gap-8 w-full">
            {GuideData.map((item, index) => (
              <div
                key={index}
                className="border border-[#142965] rounded-xl sm:p-2
                       flex items-center gap-3 hover:shadow-md transition-all"
              >
                {/* Icon */}
                <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[45px] md:w-[65px] flex justify-center items-center ">
                  <img
                    className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8"
                    src={item.image}
                    alt="guide-icon"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[14px] sm:text-[16px] md:text-[16px]  
                           font-manrope font-medium tracking-wide text-[#142965] leading-5 md:leading-6"
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <NavLink
            to="/"
            className=" text-center font-jakarta font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] rounded-sm bg-[#FAE0E1]
            hover:bg-[#201C44] hover:text-white transition-all duration-1400
              max-md:px-5 max-md:py-3 max-sm:px-4 max-sm:py-2 flex gap-2 justify-center items-center py-3 sm:py-3 px-5 mt-4 w-full sm:w-auto"
          >
            <button className=" text-[14px] sm:text-[16px] font-bold font-jakarta tracking-wide">
              Learn More
            </button>
            <FaChevronRight className="w-4 h-4   sm:w-[18px] sm:h-[18px]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Guide;
