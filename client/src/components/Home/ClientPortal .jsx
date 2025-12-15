import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const ClientPortal = () => {
  return (
    <div className=" pt-16 flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-10">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
        {/* For Details Section */}
        <div className="flex flex-col justify-start items-start gap-[25px] w-full lg:w-1/2">
          <h1 className="font-jakarta text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40] leading-8 sm:leading-10 lg:leading-12 w-full font-bold text-[#201C44]">
            Dutyflex Client Portal Simplify Real-Time Guard Management Anywhere,
            Anytime
          </h1>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-4 sm:leading-6 lg:leading-8 tracking-wide text-[#383838] font-normal font-manrope]">
            Experience how Dutyflex simplifies security operations, step by
            step. From guard scheduling to invoicing—see the entire workflow in
            one seamless walkthrough.
          </p>

          <div className="flex flex-col justify-start gap-4">
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-wide text-black font-normal font-manrope">
              {" "}
              ✔ Real-time dashboard{" "}
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]tracking-wide text-black font-normal font-manrope">
              {" "}
              ✔ Smart shift scheduling{" "}
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-wide text-black font-normal font-manrope">
              {" "}
              ✔ GPS + QR patrol tracking{" "}
            </p>
          </div>

          <NavLink
            to="/"
            className=" text-center font-jakarta font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] rounded-sm bg-[#FAE0E1]
            hover:bg-[#201C44] hover:text-white transition-all duration-1400
              max-md:px-5 max-md:py-3 max-sm:px-4 max-sm:py-2 flex gap-2 justify-center items-center py-3 sm:py-3 px-5 mt-4 w-full sm:w-auto"
          >
            <button className=" text-[14px] sm:text-[16px] font-bold font-jakarta tracking-wide">
              Learn More
            </button>
            <FaChevronRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          </NavLink>
        </div>

        {/* for Image section */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2 mt-10">
          <img
            className=" w-full sm:w-[550px] md:w-[650px] lg:w-[600px] h-auto"
            src="/Assets/All Images/image 22.png"
            alt="streamline image"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
