import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../components/ui/LeftBar";
import TopBar from "../components/ui/TopBar";
import "./style.css";

const RouteLayout = () => {
  return (
    <div className="root_layout">
      <LeftBar />
      <div className="main_page">
        <TopBar />
        <section className="render_page">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default RouteLayout;
