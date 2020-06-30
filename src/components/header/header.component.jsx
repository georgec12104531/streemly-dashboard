import React from "react";
import "./header.style.css";

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <div className="title">{title}</div>
    </div>
  );
};

export default Header;
