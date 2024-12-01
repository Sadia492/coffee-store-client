import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function MainLayout() {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
