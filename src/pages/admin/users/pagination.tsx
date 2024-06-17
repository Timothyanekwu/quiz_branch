import React from "react";
import Image from "next/image";

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
            <Image
              src="/assets/direction.svg"
              alt="direction"
              width={18}
              height={18}
            />
          </div>

          <div className="p-2 bg-[#E6E6E6] w-9 rounded-md h-full ml-2">
            <Image
              src="/assets/direction.svg"
              alt="direction"
              width={18}
              height={18}
              className="rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
