import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import Image from "next/image";
import { Bell, Cloud } from "../../../public/assets/icons";

const Header = () => {
  return (
    <div className="w-full py-10 flex justify-between">
      <div className="w-[55.2%] flex items-center">
        <div>
          <InputGroup className="bg-[#E6E6E6] rounded-full" w={400}>
            <InputLeftElement
              pointerEvents="none"
              children={
                <Image
                  alt="search"
                  width={24}
                  height={24}
                  src="/assets/search.svg"
                />
              }
            />
            <Input
              type="search"
              placeholder="Search..."
              borderRadius={20}
              fontSize={14}
            />
          </InputGroup>
        </div>
        <div className="flex h-full w-full px-5 items-center">
          <div className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#E6E6E6] stroke-2 mr-2">
            <Cloud />
          </div>
          <div className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#E6E6E6] stroke-2">
            <Bell className="text-xl" />
          </div>
        </div>
      </div>
      <div>
        <Avatar size="md" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      </div>
    </div>
  );
};

export default Header;
