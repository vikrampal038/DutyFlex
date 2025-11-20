import React from "react";

const Faqs = () => {
  return (
    <div className="pt-8 flex justify-center items-center">
      <div className=" w-[75%] flex flex-col justify-center items-center gap-14">
        {/* Heading Section */}
        <div className=" w-full flex flex-col justify-center items-center gap-3">
          <img src="/Assets/Faq/Icon.png" alt="faq heading" />
          {/* heading */}
          <div className="items-center flex flex-col gap-3 justify-center w-[50%]">
            <h1 className="text-[38px] font-bold font-jakarta tracking-wider text-[#201C44]">Frequently asked questions</h1>
            <h2 className="text-[16px] font-normal font-jakarta tracking-wider text-[#131126]">Whats happening around the World.</h2>
          </div>
        </div>

        {/* Details Section */}
        <div className=" w-full"></div>
      </div>
    </div>
  );
};

export default Faqs;
