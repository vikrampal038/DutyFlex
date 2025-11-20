import React from "react";

const Heading = () => {
  return (
    <div
      className="pt-16 flex justify-center items-center 
  max-xl:px-8 max-lg:px-6 max-md:px-4 max-sm:px-2"
    >
      <div
        className="w-full flex flex-col justify-center items-center gap-14
    max-lg:w-[90%] max-md:gap-10 max-sm:gap-8"
      >
        {/* Heading Section */}
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <img
            src="/Assets/Faq/Icon.png"
            alt="faq heading"
            className="max-md:w-[70px] max-sm:w-[55px]"
          />

          {/* heading */}
          <div
            className="items-center flex flex-col gap-3 justify-center w-[50%]
        max-lg:w-[70%] max-md:w-[85%] max-sm:w-full"
          >
            <h1
              className="text-[38px] font-bold font-jakarta tracking-wider text-[#201C44]
          max-xl:text-[34px] max-lg:text-[30px] max-md:text-[26px] max-sm:text-[22px]"
            >
              Frequently asked questions
            </h1>

            <h2
              className="text-[16px] font-normal font-jakarta tracking-wider text-[#131126]
          max-md:text-[15px] max-sm:text-[14px]"
            >
              Whats happening around the World.
            </h2>
          </div>
        </div>

        {/* Details Section */}
        <div
          className="w-full 
      max-md:px-4 max-sm:px-2"
        ></div>
      </div>
    </div>
  );
};

export default Heading;
