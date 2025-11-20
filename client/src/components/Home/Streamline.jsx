import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
const Streamline = () => {

  // for Data 
const StreamlineData = [
  {
    image: "/Assets/Streamline/Tick Square.png",
    title: "Sales onboarding & requirement collection",
  },
  {
    image: "/Assets/Streamline/Tick Square.png",
    title: "Platform & client configuration",
  },
  {
    image: "/Assets/Streamline/Tick Square.png",
    title: "User import & credential setup",
  },
  {
    image: "/Assets/Streamline/Tick Square.png",
    title: "Rate cards & invoice rules configuration",
  },
  {
    image: "/Assets/Streamline/Tick Square.png",
    title: "Training for admins, supervisors & guards",
  },
  {
    image: "/Assets/Streamline/Tick Square.png",
    title: "Pilot rollout followed by full go-live",
  },
  {
    image: "/Assets/Streamline/Tick Square.png",
    title: "Review & optimization",
  },
];

  return (
    <div className="py-14 flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-10">
      <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
        {/* For Details Section */}
        <div className="flex flex-col justify-start items-start gap-[25px] w-full lg:w-1/2">
          <h1 className="font-jakarta text-[26px] sm:text-[28px] md:text-[32px] w-full font-bold text-[#201C44] leading-tight">
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
            to="/"
            className="bg-[#FAE0E1] flex gap-2 justify-center items-center py-3 sm:py-4 px-6 mt-4 w-full sm:w-auto"
          >
            <button className="text-[#131126] text-[14px] sm:text-[16px] font-bold font-jakarta tracking-wide">
              Start Your Implementation
            </button>
            <FaChevronRight className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
          </NavLink>
        </div>

        {/* for Image section */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2 mt-10">
          <img
            className="absolute bottom-75 sm:bottom-103 md:bottom-120 lg:bottom-120 left-85 sm:left-115 md:left-133 lg:left-160 w-[60px] sm:w-20 md:w-[105px]"
            src="/Assets/Streamline/Group.png"
            alt="stramline logo"
          />

          <img
            className=" w-full sm:w-[550px] md:w-[650px] lg:w-[600px] h-auto"
            src="Assets/Streamline/image 20.png"
            alt="streamline image"
          />
        </div>
      </div>
    </div>
  );
};

export default Streamline;
