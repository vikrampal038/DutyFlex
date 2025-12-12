import React from "react";
import { FeatureData } from "../../data/FeatureData";

import { AiOutlineDown } from "react-icons/ai"; // Ant Design
import { NavLink } from "react-router-dom";
const Features = () => {
  return (
    <>
      <div className=" pt-14 w-full flex justify-center">
        <div className="w-full flex justify-center items-center gap-12 flex-col">
          {/* for Heading */}
          <div className="text-center">
            <h1 className="tracking-wide font-bold text-[#201C44] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40] font-manrope">
              Features for you here!
            </h1>
          </div>

          {/* All Details */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {FeatureData.map((item, index) => (
              <div
                key={index}
                className="rounded-xl w-full relative h-110 sm:h-100 md:h-90 lg:h-95 xl:h-95 2xl:h-116 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 p-3
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-contain"
                />

                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium tracking-wider text-[#131126]">
                  {item.category}
                </h3>

                <p className="text-[16px] sm:text-[18px] md:text[20px] lg:text[24px] leading-6 md:leading-6 lg:leading-7 font-bold text-[#201C44] tracking-wide">
                  {item.description}
                </p>

                <NavLink to={`/detail/${item.id}`} rel="noopener noreferrer">
                  <button
                    className="items-center absolute bottom-5 flex justify-center w-[50px] h-[50px] border border-[#FAE0E1] text-[#3C3679] rounded-lg hover:bg-[#332d66] hover:text-white transition-all duration-500
              sm:bottom-4 md:bottom-5"
                  >
                    <AiOutlineDown size={24} />
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
