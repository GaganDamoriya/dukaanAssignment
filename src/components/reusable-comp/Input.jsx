import React from "react";
import "./style.css";
import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
    <div className="search-bar">
      <CiSearch
        className="search_icon"
        style={{ fontSize: "1.2rem", color: "grey" }}
      />
      <input
        type="text"
        id="search-input"
        placeholder="Search features, tutorials, etc."
      />
    </div>
  );
};

export default Input;
