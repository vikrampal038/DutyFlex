import React from "react";

const Services = () => {
  // for Data
  const ServiceData = [
    {
      image: "/Assets/All Images/ui-checks-grid.png",
      title: "SaaS Subscription",
      detail: "Dutyflex platform access with updates and support.",
    },
    {
      image: "/Assets/All Images/ui-checks-grid.png",
      title: "SaaS Subscription",
      detail: "Dutyflex platform access with updates and support.",
    },
    {
      image: "/Assets/All Images/ui-checks-grid.png",
      title: "SaaS Subscription",
      detail: "Dutyflex platform access with updates and support.",
    },
    {
      image: "/Assets/All Images/ui-checks-grid.png",
      title: "SaaS Subscription",
      detail: "Dutyflex platform access with updates and support.",
    },
    {
      image: "/Assets/All Images/ui-checks-grid.png",
      title: "SaaS Subscription",
      detail: "Dutyflex platform access with updates and support.",
    },
  ];


  return (
    <>
      <div className="pt-18 w-full flex justify-center ">
        <div className="w-full  gap-12 flex flex-col justify-center items-center">
          {/* For Heading */}
          <div className="flex flex-col justify-center gap-2 items-center w-full">
            <h1 className="tracking-wide text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  font-bold font-gilroy text-center">
              Our Services
            </h1>

            <h2 className="font-manrope w-full tracking-tight text-[#201C44] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center font-bold leading-snug">
              Save Time Managing Your Business With Our Best Services
            </h2>
          </div>

          {/* All Details */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
            {ServiceData.map((item, index) => (
              <div
                key={index}
                className=" border w-full  h-auto sm:h-48 md:h-50 lg:h-50 xl:h-50 2xl:h-50 border-[#E7E7E7] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5 py-9 px-3 "
              >
                <div className="flex justify-start flex-col gap-2.5">
                  <div className="w-10 h-10 items-center flex justify-center rounded-md bg-[#ECECEC]">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold tracking-wide text-start text-[#000000]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#757095] tracking-wider">
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
