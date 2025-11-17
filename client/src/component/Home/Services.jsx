import React from "react";
import { ServiceData } from "../../data/ServiceData";

const Services = () => {
  return (
    <>
      <div className=" pt-14 w-full flex justify-center">
        <div className=" w-full gap-14 flex flex-col justify-center items-center">
          {/* For Heading */}
          <div className="flex flex-col justify-center gap-4 items-center w-[60%] px-15">
            <h1 className="tracking-wide text-[16px] font-bold font-gilroy">
              Our Services
            </h1>
            <h2 className="font-manrope tracking-tight text-[40px] text-center font-bold">
              Save Time Managing Your Business With Our Best Services
            </h2>
          </div>

          {/* For All Details */}
          <div className=" w-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-8  ">
            {ServiceData.map((item) => (
              <div
                key={item.title}
                className=" border border-[#E7E7E7] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex  flex-col gap-5 py-9 px-6"
              >
                <div className="flex justify-start flex-col gap-2.5">
                  <div className="w-10 h-10 items-center flex justify-center rounded-md bg-[#ECECEC]">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <h3 className="text-[20px] font-bold tracking-wide text-start  text-[#000000]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] font-medium text-[#757095] tracking-wider">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
