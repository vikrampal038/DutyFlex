import React from "react";
import { GuideData } from "../../data/GuideData";

const Guide = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[#3C367905] px-4 sm:px-6 lg:px-12">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        {/* for Mobile Image  */}
        <div className="w-full flex justify-center items-center lg:w-1/3">
          <img
            className="inline-block w-[80%] sm:w-[60%] md:w-[50%] lg:w-[90%] xl:w-[80%] h-auto"
            src="/Assets/Guide/image 21.png"
            alt="guide mobile image"
          />
        </div>

        {/* for Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-14">
          {/* Heading */}
          <div className="w-full text-start flex flex-col justify-center items-center xl:items-start md:center lg:align-center sm:align-start gap-5 ">
            <h1 className="text-[30px] sm:text-[34px] md:text-[40px] font-extrabold font-manrope tracking-wider text-black leading-tight">
              Guided Mobile App Tour
            </h1>
            <h1 className="text-[14px] sm:text-[16px] font-manrope font-normal text-[#383838] tracking-wide leading-relaxed">
              Explore every feature of the mobile app with our step-by-step
              guided tour.
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-7 lg:gap-8 w-full">
            {GuideData.map((item, index) => (
              <div
                key={index}
                className="border border-[#142965] rounded-xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-3 hover:shadow-md transition-all w-full"
              >
                {/* Icon */}
                <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] p-2.5 flex justify-center items-center">
                  <img
                    className="w-[24px] h-[28px] sm:w-[27px] sm:h-[32px]"
                    src={item.image}
                    alt="guide-icon"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-manrope font-normal tracking-wide text-[#142965] leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
