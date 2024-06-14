import React from "react";
import Image from "next/image";

const Sub = () => {
  return (
    <div className="w-full flex justify-between mb-5">
      <p className="font-bold text-4xl text-[#9D75F7] ">USERS</p>
      <div className="flex text-xs items-center w-[38%] justify-between">
        <div className="bg-[#9D75F7] flex justify-center items-center px-2 rounded-full h-full text-white">
          <p className="pr-1">Add User</p>
          <Image src="/assets/add.svg" alt="add" width={13} height={13} />
        </div>
        <div className="flex">
          <p className="mr-2">Sort by</p>
          <Image
            src="/assets/dropdown.svg"
            alt="dropdown"
            width={13}
            height={13}
          />
        </div>
        <div className="flex">
          <p className="mr-2">Saved search</p>
          <Image
            src="/assets/dropdown.svg"
            alt="dropdown"
            width={13}
            height={13}
          />
        </div>
        <div>
          <Image src="/assets/filter.svg" alt="filter" width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default Sub;
