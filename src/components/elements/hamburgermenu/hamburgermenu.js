import { useState } from "react";
import React from "react";
import "./hamburgermenu.scss";

const HamburgerMenu = ({ onClick, isOpen }) => {
  // onClick prop so i can change the state in the dashboard for sidebar toggle

  return (
    <div
      className={`hamburger-btn ${isOpen ? "cross slide-in" : "slide-out"}`}
      onClick={onClick}
    >
      <div className="hamburger-btn_container">
        <span className="hamburger-btn_line top"></span>
        <span className="hamburger-btn_line middle"></span>
        <span className="hamburger-btn_line bottom"></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
