import React from "react";
import { FeatureData } from "../../data/FeatureData";

import { AiOutlineDown } from "react-icons/ai"; // Ant Design
import { NavLink } from "react-router-dom";
const Features = () => {
  return (
    <>
      <div className="pt-14 w-full   flex justify-center">
        <div className="w-full  flex justify-center items-center gap-14 flex-col">
          {/* for Heading */}
          <div>
            <h1 className="tracking-wide font-bold text-[#201C44] text-[40px] font-manrope">Features for you here!</h1>
          </div>

          {/* All Details */}
          <div className=" w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {FeatureData.map((item,i) => (
              <div
                key={i}
                className=" rounded-xl relative h-120 w-82 shadow-sm hover:shadow-md transition-all duration-300 flex  flex-col gap-5 p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-contain"
                />

                <h3 className="text-[16px] font-medium tracking-wider  text-[#131126]">
                  {item.category}
                </h3>

                <p className="text-[24px] font-bold text-[#201C44] tracking-wide">{item.describtion}</p>

                <NavLink to={`/detail/${item.id}`} rel="noopener noreferrer">
                  <button className="items-center absolute bottom-5 flex justify-center w-[50px]  h-[50px] border border-[#FAE0E1]  text-[#3C3679] rounded-lg hover:bg-[#332d66] hover:text-white transition-all duration-500 ">
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

