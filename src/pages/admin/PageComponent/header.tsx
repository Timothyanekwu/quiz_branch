import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import Search from "../../../../public/assets/svg/search";
import Cloud from "../../../../public/assets/svg/cloud";
import Bell from "../../../../public/assets/svg/bell";

const Header = () => {
  return (
    <div className="w-full my-10 flex justify-between ">
      <div className="w-[50.2%] flex items-center">
        <div>
          <InputGroup className="bg-[#E6E6E6] rounded-full" w={400}>
            <InputLeftElement
              pointerEvents="none"
              children={<Search fillColor="black" />}
            />
            <Input
              type="search"
              placeholder="Search..."
              borderRadius={20}
              fontSize={14}
            />
          </InputGroup>
        </div>
        <div className="flex w-full justify-between px-5 items-center">
          <Cloud fillColor="black" />
          <Bell fillColor="black" />
        </div>
      </div>
      <div>
        <Avatar size="md" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      </div>
    </div>
  );
};

export default Header;
