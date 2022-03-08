import React from "react";
import ReactDom from "react-dom";
import AnimatedText from "../animated-text";
import HamburgerMenu from "../elements/hamburgermenu/hamburgermenu";
import Sidebar from "../sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <HamburgerMenu />
      <AnimatedText />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
