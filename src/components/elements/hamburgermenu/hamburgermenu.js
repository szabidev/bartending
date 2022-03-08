import React from "react";
import "./hamburgermenu.scss";

const HamburgerMenu = () => {
  // handle open and close situations

  return (
    <div className="hamburger-btn">
      <div className="hamburger-btn_container">
        <span className="hamburger-btn_line middle"></span>
        <span className="hamburger-btn_line top"></span>
        <span className="hamburger-btn_line bottom"></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
