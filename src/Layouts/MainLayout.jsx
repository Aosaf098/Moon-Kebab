import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="w-11/12 mx-auto font-sora">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
