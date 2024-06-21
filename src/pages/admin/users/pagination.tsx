import React from "react";
import { Direction } from "../../../../public/assets/icons";

const Pagination = () => {
  return (
    <div className="text-xs flex justify-center pb-16">
      <div className="h-full p-2 bg-[#E6E6E6] rounded-md">
        Items per page: 6
      </div>
      <div className="flex ml-10 items-center">
        <p>1 to 4 of 10</p>
        <div className="ml-2 flex h-full">
          <div className="p-2 bg-[#E6E6E6] w-9 rounded-md h-full">
            <Direction />
          </div>

          <div className="p-2 bg-[#E6E6E6] w-9 rounded-md h-full ml-2">
            <Direction className="rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
