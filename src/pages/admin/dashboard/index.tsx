import React from "react";
import SideBar from "../PageComponent/sidebar";
import Header from "../PageComponent/header";

const Dashboard = () => {
  return (
    <div className="flex pl-[19.7vw] w-screen pr-10">
      <SideBar />
      <div className="w-full">
        <div>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
