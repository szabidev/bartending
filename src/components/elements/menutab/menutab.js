import React from "react";
import "./menutab.scss";

const MenuTab = (props) => {
  const { menuText } = props;

  return (
    <li className="menu-item">
      <a className="menu-item_link" href="#">
        {menuText}
      </a>
    </li>
  );
};

export default MenuTab;
