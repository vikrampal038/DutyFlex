import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl font-bold text-center p-5">
          {" "}
          Register Page
        </h1>
        <NavLink
          to="/home"
          className="text-center font-jakarta font-bold text-[14px] px-5 py-5  w-full rounded-md bg-[#FAE0E1]"
        >
          Back TO Home
        </NavLink>
      </div>
    </>
  );
};

export default Register;
