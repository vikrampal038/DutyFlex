import React from "react";

const Pricing = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center bg-[#3C367905]">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 ">
        {/* Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-8 px-2 sm:px-4 ">
          {/* Heading */}
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1 className="font-jakarta text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40] w-full font-bold text-[#201C44] leading-8 sm:leading-10 md:leading-12 ">
              Guided Mobile App Tour
            </h1>

            <h2
              className="text-[16px] sm:text-[18px] md:text-[20px] font-manrope font-normal text-[#383838] tracking-wide leading-8"
            >
              Explore every feature of the mobile app with our step-by-step
              guided tour.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
