import React from "react";
import { useState } from "react";

import AnimatedText from "../animated-text";
import HamburgerMenu from "../elements/hamburgermenu/hamburgermenu";
import Sidebar from "../sidebar";

const Dashboard = () => {
  // Defining sidebar state open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // handle Menu toggle function, changing state true/false
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dashboard">
      <HamburgerMenu onClick={() => toggleMenu()} isOpen={isMenuOpen} />
      <AnimatedText />
      <Sidebar isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Dashboard;
