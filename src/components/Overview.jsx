import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-row m-6 font-semibold">
      <div className="flex-1">
        <span>Overview</span>
      </div>
      <div className="flex-1 ml-96 pl-96">
        <select className="border-gray-400 rounded-md border-2 font-normal bg-white h-8 w-32 px-2">
          <option>Last Month</option>
        </select>
      </div>
    </div>
  );
};

export default Overview;
