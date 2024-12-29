import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="mx-auto font-sora relative">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
