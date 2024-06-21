import React from "react";
import Image from "next/image";
import { Add, Dropdown, Filter } from "../../../../public/assets/icons";

const Sub = () => {
  return (
    <div className="w-full flex justify-between mb-5">
      <p className="font-bold text-2xl sm:text-3xl text-[#9D75F7] ">LIBRARY</p>
      <div className="sub-method-container">
        <div className="sub-method">
          <p className="pr-1">Add File</p>
          <Add className="hover:text-white " />
        </div>
        <div className="flex ml-4 sm:ml-5 cursor-pointer">
          <p className="mr-1">Sort by</p>
          <Dropdown />
        </div>

        <div className="ml-4 sm:ml-5 cursor-pointer">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Sub;
