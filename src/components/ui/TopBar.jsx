import React from "react";
import "./style.css";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import { RiMessage2Fill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Input from "../reusable-comp/Input";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="inner_nav">
        <div className="heading">
          <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            Payments
          </span>

          <span className="subheading">
            <CiCircleQuestion /> how it works
          </span>
        </div>
        <div className="inputBar">
          <Input />
        </div>
        <div className="nav_icons">
          <div className="icon">
            <RiMessage2Fill />
          </div>
          <div className="icon">
            <FaCaretDown />
          </div>
        </div>
        <div className="mobileM">
          <div className="mobile-menu">
            <CiSearch />
          </div>

          <div className="mobile-menu">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
