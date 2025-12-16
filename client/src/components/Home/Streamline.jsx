import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const Streamline = () => {
  // for Data
  const StreamlineData = [
    {
      image: "/Assets/All Images/Tick Square.png",
      title: "Sales onboarding & requirement collection",
    },
    {
      image: "/Assets/All Images/Tick Square.png",
      title: "Platform & client configuration",
    },
    {
      image: "/Assets/All Images/Tick Square.png",
      title: "User import & credential setup",
    },
    {
      image: "/Assets/All Images/Tick Square.png",
      title: "Rate cards & invoice rules configuration",
    },
    {
      image: "/Assets/All Images/Tick Square.png",
      title: "Training for admins, supervisors & guards",
    },
    {
      image: "/Assets/All Images/Tick Square.png",
      title: "Pilot rollout followed by full go-live",
    },
    {
      image: "/Assets/All Images/Tick Square.png",
      title: "Review & optimization",
    },
  ];

  return (
    <div className=" py-18 flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-10">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 sm:gap-8 md:gap-12">
        {/* For Details Section */}
        <div className="flex flex-col justify-start items-start gap-8 w-full lg:w-1/2">
          <h1 className="font-jakarta text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40] w-full font-bold text-[#201C44] leading-tight">
            Streamline your implementation with our guided process
          </h1>

          <div className="flex flex-col gap-[13px]">
            {StreamlineData.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div className="flex justify-center items-center w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] py-3 rounded-md px-3 bg-[#FAE0E1]">
                  <img
                    src={item.image}
                    alt="tick icon"
                    className="text-[#131126] w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>

                <h3 className="font-normal text-[14px] sm:text-[16px] font-jakarta text-[#201C44] leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <NavLink
            to="/#"
            className=" text-center font-jakarta font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] rounded-sm bg-[#FAE0E1]
            hover:bg-[#201C44] hover:text-white transition-all duration-1400
              max-md:px-5 max-md:py-3 max-sm:px-4 max-sm:py-2 flex gap-2 justify-center items-center py-3 sm:py-4 px-5 mt-4 w-full sm:w-auto"
          >
            <button className="text-[14px] sm:text-[16px] font-bold font-jakarta tracking-wide">
              Start Your Implementation
            </button>
            <FaChevronRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          </NavLink>
        </div>

        {/* for Image section */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2 mt-10">
          <img
            className="absolute bottom-60 sm:bottom-103 md:bottom-120 lg:bottom-122 left-68 sm:left-120 md:left-100 lg:left-168 w-10 sm:w-20 md:w-[90px]"
            src="/Assets/All Images/Group.png"
            alt="stramline logo"
          />

          <img
            className=" w-full sm:w-[550px] md:w-[650px] lg:w-[600px] h-auto"
            src="Assets/All Images/image 20.png"
            alt="streamline image"
          />
        </div>
      </div>
    </div>
  );
};

export default Streamline;
