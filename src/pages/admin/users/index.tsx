import React from "react";
import SideBar from "../PageComponent/sidebar";
import Header from "../PageComponent/header";
import Sub from "./sub";
import TableSection from "./table";
import Pagination from "./pagination";

const Users = () => {
  return (
    <div className="flex pl-[19.7vw] w-screen pr-10">
      <SideBar />
      <div className="w-full">
        <div>
          <Header />
        </div>
        <div>
          <Sub />
        </div>
        <div>
          <TableSection />
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Users;
