import React from "react";
import logo from "../logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";


const Title = () => {
  return (
    <div className="flex flex-row space-x-2">
      <img src={logo} alt="logo" height={50} width={50} className="inline" />
      <div className="flex flex-col">
        <span className="text-white"> Nishyan</span>
        <span className="underline text-white font-thin"> Visit store</span>
      </div>
      <RiArrowDropDownLine size={50} />
    </div>
  );
};

export default Title;
