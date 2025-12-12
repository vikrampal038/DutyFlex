import React from "react";

const Heading = () => {
  return (
    <div
      className="pt-18 flex justify-center items-center 
  max-xl:px-8 max-lg:px-6 max-md:px-4 max-sm:px-2"
    >
      <div
        className="w-full flex flex-col justify-center items-center gap-12 max-md:gap-10 max-sm:gap-8"
      >
        {/* Heading Section */}
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <img
            src="/Assets/All Images/Icon.png"
            alt="faq heading"
            className="md:w-[70px] sm:w-[45px] w-[35]"
          />

          {/* heading */}
          <div
            className="items-center flex flex-col gap-3 justify-center w-[50%]
        max-lg:w-[70%] max-md:w-[85%] max-sm:w-full"
          >
            <h1
              className=" text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40]  font-bold font-jakarta tracking-wider text-[#201C44]"
            >
              Frequently asked questions
            </h1>

            <h2
              className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium font-jakarta tracking-wider text-[#131126]
          max-md:text-[15px] max-sm:text-[14px]"
            >
              Whats happening around the World.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
