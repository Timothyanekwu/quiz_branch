import React, { Dispatch, SetStateAction } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import Image from "next/image";
import { Bell, Burger, Cloud } from "../../../public/assets/icons";

interface Datas {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
}
const Header: React.FC<Datas> = ({ setView, view }) => {
  return (
    <div className="header-main">
      <div className="header-input-container">
        <Burger
          onClick={() => setView(!view)}
          className="w-7 h-7 sm:w-9 sm:h-9 hidden sm:block mr-4 lg:hidden"
        />

        <InputGroup className="bg-[#E6E6E6] rounded-full">
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

        <div className="header-input-icons">
          <div className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#E6E6E6] stroke-2 ">
            <Cloud />
          </div>
          <div className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#E6E6E6] stroke-2 ml-3">
            <Bell className="text-xl" />
          </div>
        </div>
      </div>
      <div className="header-avatar">
        <Burger onClick={() => setView(!view)} className="w-7 h-7 sm:hidden" />
        <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      </div>
    </div>
  );
};

export default Header;
