import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaCommentDots } from "react-icons/fa";
import { MdArrowDropDownCircle } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex flex-row m-4">
        <span>Payments</span>
        <div className="ml-8">
          <CiCircleQuestion className="inline" />
          <span>How it works?</span>
        </div>
      </div>
      <div className="bg-gray-200 m-2 ml-32 p-2 rounded-lg w-72 h-10">
        <CiSearch className="inline mr-1 mb-1" size={20} color="grey" />
        <input
          type="text"
          placeholder="Search fetures, tutorials, etc."
          className="rounded-md bg-gray-200 w-60 text-white"
        />
      </div>
      <div className="flex flex-row pl-72">
        <div className="w-10 h-10 bg-gray-300 rounded-3xl m-1">
          <FaCommentDots size={20} color="grey" className="inline m-2.5" />
        </div>
        <div className="w-10 h-10 bg-gray-300 rounded-3xl m-1">
          <MdArrowDropDownCircle size={20} color="grey" className="inline m-2.5" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
