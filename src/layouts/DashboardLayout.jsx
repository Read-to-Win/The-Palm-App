import React, { useEffect } from "react";
import SideBar from "../components/SideBar";
import { Outlet, useNavigate } from "react-router";

const DashboardLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // retrieve the token from local storage
    const token = localStorage.getItem("accessToken");
    // if theres no token,take them to login
    if (!token) {
      navigate("/sign-in");
    }
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <div className="px-10 w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
