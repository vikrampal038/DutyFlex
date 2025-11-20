import React from "react";

const Contact = () => {
  return (
    <div className=" w-full py-14 flex justify-center items-center">
      <div className="w-[65%] flex justify-center items-center gap-50">
        {/* Contact details  */}
        <div className="w-1/2 ">
          <div className="flex flex-col gap-8">
            <div className="bg-[#A1A1A1] w-[87px] h-[87px] flex justify-center items-center rounded-full">
              <img src="/Assets/Contact/Path.png" alt="contact icon" />
            </div>
            <div className="flex flex-col justify-center items-start gap-5">
              <h1 className="text-[36px] text-black font-bold font-Gilroy leading-11">
                Get a free consultancy from our expert right now!
              </h1>
              <p className="text-[16px] font-normal font-Gilroy leading-8 text-[#7a7a7a]">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page so quickly with Albino.
              </p>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="w-1/2  p-1 flex justify-center items-center">
          <form className="border border-[#E7E9ED] rounded-xl p-5 w-full  ">
            <div className=" flex flex-col justify-center items-center gap-3">
              {/* for Name */}
              <div className="flex flex-col justify-start item-center gap-1 w-full">
                <label
                  className=" w-full text-[#161C2D] text-[15px] font-bold font-Gilroy tracking-wider"
                  for="name"
                >
                  Name
                </label>
                <input
                  className=" w-full border border-[#E7E9ED] outline-0 rounded-md py-2 px-3 text-md text-black font-medium font-Gilroy placeholder:text-sm "
                  type="text"
                  id="name"
                  placeholder="i.e. John Doe"
                />
                {/* <small className=" w-full text-md text-red-600 font-medium font-Gilroy">
                  this is error
                </small> */}
              </div>

              {/* for Email */}
              <div className="flex flex-col justify-start item-center gap-1 w-full">
                <label
                  className=" w-full text-[#161C2D] text-[15px] font-bold font-Gilroy tracking-wider"
                  for="email"
                >
                  Email
                </label>
                <input
                  className=" w-full border border-[#E7E9ED] outline-0 rounded-md py-2 px-3 text-md text-black font-medium font-Gilroy placeholder:text-sm "
                  type="email"
                  id="email"
                  placeholder="i.e. john@mail.com"
                />
                {/* <small className=" w-full text-md text-red-600 font-medium font-Gilroy">
                  this is error
                </small> */}
              </div>

              {/* for Phone */}
              <div className="flex flex-col justify-start item-center gap-1 w-full">
                <label
                  className=" w-full text-[#161C2D] text-[15px] font-bold font-Gilroy tracking-wider"
                  for="phone"
                >
                  Phone
                </label>
                <input
                  className=" w-full border border-[#E7E9ED] outline-0 rounded-md py-2 px-3 text-md text-black font-medium font-Gilroy placeholder:text-sm "
                  type="tel"
                  id="phone"
                  placeholder="i.e. 123-456-7890"
                />
                {/* <small className=" w-full text-md text-red-600 font-medium font-Gilroy">
                  this is error
                </small> */}
              </div>

              {/* for selection */}
              <div className="flex flex-col justify-start item-center gap-1 w-full">
                <label
                  className=" w-full text-[#161C2D] text-[15px] font-bold font-Gilroy tracking-wider"
                  for="option"
                >
                 Which service do you need?
                </label>
                <select
                  className=" w-full border border-[#E7E9ED] outline-0 rounded-md py-2 px-3 text-md text-black font-medium font-Gilroy placeholder:text-sm "
                  type="select"
                  id="Which service do you need?"
                  placeholder="i.e. 123-456-7890"
                >
                    <option>Select</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
                {/* <small className=" w-full text-md text-red-600 font-medium font-Gilroy">
                  this is error
                </small> */}
              </div>
            </div>

            <div className="flex justify-center items-center mt-5 bg-[#142965] p-3 rounded-lg ">
            <button className="text-center text-[#FFFFFF] text-[16px] font-bold font-Gilroy " >Get Free Consultancy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
