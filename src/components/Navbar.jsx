import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { CiWallet } from "react-icons/ci";
import { HiCash } from "react-icons/hi";
import { CiSquareMore } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbSpeakerphone } from "react-icons/tb";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiToolsFill } from "react-icons/ri";
import { LiaPercentageSolid } from "react-icons/lia";
import { MdOutlinePeople } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";


import Title from "./Title";

const Navbar = () => {
  return (
    <div className="bg-[#1E2640] w-48 h-auto flex flex-col pt-1">
      <Title />
      <div className="flex flex-col m-4">
        <div className="flex flex-row gap-4 p-1">
          <IoHomeOutline color="white" className="mt-1" />
          <span className="text-white"> Home</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <GrNotes color="white" className="mt-1" />
          <span className="text-white"> Orders</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <CiSquareMore color="white" className="mt-1" />
          <span className="text-white"> Products</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <CiDeliveryTruck color="white" className="mt-1" />
          <span className="text-white"> Delivery</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <TbSpeakerphone color="white" className="mt-1" />
          <span className="text-white"> Marketing</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <TbBrandGoogleAnalytics color="white" className="mt-1" />
          <span className="text-white"> Analytics</span>
        </div>
        <div className="flex flex-row gap-4 p-1 bg-[#353C53] rounded-md">
          <HiCash color="white" className="mt-1" />
          <span className="text-white"> Payments</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <RiToolsFill color="white" className="mt-1" />
          <span className="text-white"> Tools</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <LiaPercentageSolid color="white" className="mt-1" />
          <span className="text-white"> Discounts</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <MdOutlinePeople color="white" className="mt-1" />
          <span className="text-white"> Audience</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <IoColorPaletteOutline color="white" className="mt-1" />
          <span className="text-white"> Appearance</span>
        </div>
        <div className="flex flex-row gap-4 p-1">
          <BsLightningCharge color="white" className="mt-1" />
          <span className="text-white"> Plugins</span>
        </div>
      </div>
      <div className="flex bg-blue-500 rounded-md mx-2 my-auto p-1">
        <CiWallet size={40} color="white" />
        <div className="flex flex-col pl-3">
          <span className="text-white">Available credits</span>
          <span className="text-white">222.10</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
