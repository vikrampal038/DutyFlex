import React from "react";
import { GuideData } from "../../data/GuideData";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const Guide = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center bg-[#3C367905] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
      <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-0">
        {/* Mobile Image */}
        <div className="w-full flex justify-center items-center lg:w-1/2">
          <img
            className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[380px] xl:w-[450px]  object-contain"
            src="/Assets/Guide/image 21.png"
            alt="guide mobile image"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8 px-2 sm:px-4">
          {/* Heading */}
          <div className="w-full text-center lg:text-start flex flex-col gap-4">
            <h1
              className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40]
                       font-extrabold font-manrope tracking-wide text-black leading-tight"
            >
              Guided Mobile App Tour
            </h1>

            <h2
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 
                       font-manrope font-normal text-[#383838] tracking-wide leading-relaxed"
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
                className="border border-[#142965] rounded-xl px-3 py-2 sm:px-4 sm:py-3 
                       flex items-center gap-3 hover:shadow-md transition-all"
              >
                {/* Icon */}
                <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] p-2.5 flex justify-center items-center">
                  <img
                    className="w-[24px] h-[28px] sm:w-[28px] sm:h-[32px]"
                    src={item.image}
                    alt="guide-icon"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[14px] sm:text-[16px] md:text-[18px]  
                           font-manrope font-normal tracking-wide text-[#142965] leading-tight"
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
