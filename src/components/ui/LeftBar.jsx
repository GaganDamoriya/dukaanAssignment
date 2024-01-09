import React from "react";
import "./style.css";
import websiteImg from "../../assets/nishyan.jpg";
import { FaAngleDown } from "react-icons/fa";
import { sidebarlinks } from "../content/sideBarlinks";
import { CiWallet } from "react-icons/ci";
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="store-content">
        <div className=" site-details">
          <div className="siteImg">
            <img src={websiteImg} alt="" />
          </div>
          <div className="siteName">
            <span style={{ fontSize: "1rem" }}>Nishyan</span>
            <span
              style={{
                fontSize: ".8rem",
                color: "#ccc",
                textDecoration: "underline",
              }}
            >
              visit store
            </span>
          </div>
        </div>
        <div className="dropdown">
          <FaAngleDown size={"1.2rem"} />
        </div>
      </div>
      <div className="sidebar-Links">
        <ul>
          {sidebarlinks.map((nav, i) => {
            return (
              <li className="Navigaton-li" key={i}>
                <span
                  style={{
                    fontSize: "21px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {nav.icon}
                </span>
                <span>{nav.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="wallet">
        <span>
          <CiWallet fontSize={"2rem"} />
        </span>
        <span className="balance">
          <span style={{ color: "#ccc" }}>Available Credit</span>
          <span>220.20</span>
        </span>
      </div>
    </div>
  );
};

export default LeftBar;
