import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />
<div className="px-20">
      <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
