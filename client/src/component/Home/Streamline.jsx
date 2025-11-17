import React from "react";
// import { StreamlineData } from "../../data/StreamlineData";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
const Streamline = () => {
  return (
    <div className="py-14 flex flex-col justify-center items-center w-full">
      <div className=" flex justify-center items-center w-[80%]">
        {/* For Details Section */}
        <div className="flex flex-col items-start gap-[25px]">
          <h1 className="font-jakarta text-[32px] w-[60%] font-bold text-[#201C44]">
            Streamline your implementation with our guided process
          </h1>
          <div className="flex flex-col gap-[13px]">
            {/* List 1 */}
            <div className="flex gap-3 items-center">
              <div className=" flex justify-center items-center w-[50] py-3 rounded-md px-3 h-[50] bg-[#FAE0E1]">
                <img
                  src="/Assets/Streamline/Tick Square.png"
                  alt="tick icon"
                  className="text-[#131126] w-6 h-6"
                />
              </div>
              <h3 className="font-normal text-[16px] font-jakarta text-[#201C44]">
                Sales onboarding & requirement collection
              </h3>
            </div>

            {/* List 2 */}
            <div className="flex gap-3 items-center">
              <div className=" flex justify-center items-center w-[50] py-3 rounded-md px-3 h-[50] bg-[#FAE0E1]">
                <img
                  src="/Assets/Streamline/Tick Square.png"
                  alt="tick icon"
                  className="text-[#131126] w-6 h-6"
                />
              </div>
              <h3 className="font-normal text-[16px] font-jakarta text-[#201C44]">
                Platform & client configuration
              </h3>
            </div>

            {/* List 3 */}
            <div className="flex gap-3 items-center">
              <div className=" flex justify-center items-center w-[50] py-3 rounded-md px-3 h-[50] bg-[#FAE0E1]">
                <img
                  src="/Assets/Streamline/Tick Square.png"
                  alt="tick icon"
                  className="text-[#131126] w-6 h-6"
                />
              </div>
              <h3 className="font-normal text-[16px] font-jakarta text-[#201C44]">
                User import & credential setup
              </h3>
            </div>

            {/* List 4 */}
            <div className="flex gap-3 items-center">
              <div className=" flex justify-center items-center w-[50] py-3 rounded-md px-3 h-[50] bg-[#FAE0E1]">
                <img
                  src="/Assets/Streamline/Tick Square.png"
                  alt="tick icon"
                  className="text-[#131126] w-6 h-6"
                />
              </div>
              <h3 className="font-normal text-[16px] font-jakarta text-[#201C44]">
                Rate cards & invoice rules configuration
              </h3>
            </div>

            {/* List 5*/}
            <div className="flex gap-3 items-center">
              <div className=" flex justify-center items-center w-[50] py-3 rounded-md px-3 h-[50] bg-[#FAE0E1]">
                <img
                  src="/Assets/Streamline/Tick Square.png"
                  alt="tick icon"
                  className="text-[#131126] w-6 h-6"
                />
              </div>
              <h3 className="font-normal text-[16px] font-jakarta text-[#201C44]">
                Training for admins, supervisors & guards
              </h3>
            </div>

            {/* List 6 */}
            <div className="flex gap-3 items-center">
              <div className=" flex justify-center items-center w-[50] py-3 rounded-md px-3 h-[50] bg-[#FAE0E1]">
                <img
                  src="/Assets/Streamline/Tick Square.png"
                  alt="tick icon"
                  className="text-[#131126] w-6 h-6"
                />
              </div>
              <h3 className="font-normal text-[16px] font-jakarta text-[#201C44]">
                Pilot rollout followed by full go-live
              </h3>
            </div>

            {/* List 7 */}
            <div className="flex gap-3 items-center">
              <div className=" flex justify-center items-center w-[50] py-3 rounded-md px-3 h-[50] bg-[#FAE0E1]">
                <img
                  src="/Assets/Streamline/Tick Square.png"
                  alt="tick icon"
                  className="text-[#131126] w-6 h-6"
                />
              </div>
              <h3 className="font-normal text-[16px] font-jakarta text-[#201C44]">
                Review & optimization
              </h3>
            </div>
          </div>
          <NavLink
            to="/"
            className="bg-[#FAE0E1] flex gap-2 justify-center items-center py-4 px-6"
          >
            <button className="text-[#131126] text-[16px] font-bold font-jakarta tracking-wide">
              Start Your Implemntation
            </button>
            <FaChevronRight className="w-[18px] h-[18px]" />
          </NavLink>
        </div>

        {/* for Image section */}
        <div className=" relative flex justify-center items-center">
          <img className="absolute bottom-115 left-132" src="/Assets/Streamline/Group.png" alt="stramline logo" />
          <img className="block" src="/Assets/Streamline/image 20.png" alt="streamline image" />
        </div>
      </div>
    </div>
  );
};

export default Streamline;
