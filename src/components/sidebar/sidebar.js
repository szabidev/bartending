import React from "react";
// import { useState } from "react";

import MenuTab from "../elements/menutab/menutab";
import SocalIcon from "../social-icon/social-icon";

import { ROUTES } from "../../routes";
import "./sidebar.scss";

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div className="container">
      {ROUTES && (
        // conditional rendering, if isMenuOpen is true add className / slide in/out sidebar
        <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <div className="menu">
            {ROUTES.map((item, i) => {
              return (
                <MenuTab
                  menuText={item.title}
                  key={i}
                  // path={location.pathname}
                />
              );
            })}
            <div className="social-container">
              <img src="logos/instagram-30.svg" />
              <img src="logos/facebook-30.svg" />
              <img src="logos/github-30.svg" />
              <img src="logos/linkedin-30.svg" />
              {/* <SocalIcon icon={"facebook"} size={"30"} /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
