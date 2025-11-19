import React from "react";

const Guide = () => {
  return (
    <div className="py-14 flex flex-col justify-center items-center bg-[#3C367905]"  >
      <div className="flex justify-center items-center w-[80%] ">
        {/* for Mobile Image  */}
        <div className="w-1/3 flex justify-center items-center">
          <img className="inline-block" src="/Assets/Guide\image 21.png" alt="guide mobile image" />
        </div>

        {/* for Details */}
        <div className="w-1/2  flex flex-col justify-center items-center gap-14">
          {/* Heading  */}
          <div className=" w-full text-start flex flex-col justify-center items-start gap-5 ">
            <h1 className="text-[40px] font-extrabold font-manrope tracking-wider text-black">
              Guided Mobile App Tour
            </h1>
            <h1 className="text-[16px] font-manrope font-normal text-[#383838] tracking-wide">
              Explore every feature of the mobile app with our step-by-step
              guided tour.
            </h1>
          </div>
          {/* contain */}
          <div className=" w-full text-start flex flex-col justify-start items-start gap-8 ">
            {/* Row-1 */}
            <div className="flex justify-start items-center gap-8">
              {/* item 1 */}
              <div className="border border-[#142965] rounded-xl  px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[27px] h-[32px]"
                    src="/Assets/Guide/EnvironmentOutlined.png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  GPS-Verified Attendance
                </h3>
              </div>

              {/* item 2 */}
              <div className="border border-[#142965] rounded-xl px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[32px] h-[32px]"
                    src="/Assets/Guide/Frame 1000004389.png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  Patrol & Task Management
                </h3>
              </div>
            </div>

            {/* Row-2 */}
            <div className="flex justify-start items-center gap-8">
            {/* item 3 */}
              <div className="border border-[#142965] rounded-xl  px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[27px] h-[32px]"
                    src="/Assets/Guide/Vector.png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  QR & NFC Checkpoint Scanning
                </h3>
              </div>

              {/* item 4 */}
              <div className="border border-[#142965] rounded-xl px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[32px] h-[32px]"
                    src="/Assets/Guide/Vector (1).png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  SOS / Emergency Alerts
                </h3>
              </div>
            </div>

            {/* Row-3 */}
            <div className="flex justify-start items-center gap-8">
            {/* item 5 */}
              <div className="border border-[#142965] rounded-xl  px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[27px] h-[32px]"
                    src="/Assets/Guide/ScheduleOutlined.png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  Shift Management for Guards
                </h3>
              </div>

              {/* item 6 */}
              <div className="border border-[#142965] rounded-xl px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[32px] h-[32px]"
                    src="/Assets/Guide/WarningOutlined.png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  Live Incident Reporting
                </h3>
              </div>
            </div>

            {/* Row-4 */}
            <div className="flex justify-start items-center gap-8">
            {/* item 7 */}
              <div className="border border-[#142965] rounded-xl  px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[27px] h-[32px]"
                    src="/Assets/Guide/Vector.png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  Attendance & Break Logs
                </h3>
              </div>

              {/* item 8 */}
              <div className="border border-[#142965] rounded-xl px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[32px] h-[32px]"
                    src="/Assets/Guide/Vector.png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  Guard Profile & Digital Logs
                </h3>
              </div>
            </div>

            {/* Row-5 */}
            <div className="flex justify-start items-center gap-8">
            {/* item 9 */}
              <div className="border border-[#142965] rounded-xl  px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[27px] h-[32px]"
                    src="/Assets/Guide/Vector.png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  Communication & Updates
                </h3>
              </div>

              {/* item 10 */}
              <div className="border border-[#142965] rounded-xl px-3 py-1 flex justify-center items-center gap-[10px]">
                <div className="w-[50px] h-[50px] p-[10px]">
                  <img
                    className="text-[#142965] w-[32px] h-[32px]"
                    src="/Assets/Guide/Vector.png"
                    alt="guide-icon"
                  />
                </div>
                <h3 className="text-[20px] font-manrope font-normal tracking-wide text-[#142965]">
                  Offline Mode Support
                </h3>
              </div>
            </div>





































































          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
