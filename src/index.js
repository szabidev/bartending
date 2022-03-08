import React from "react";
import ReactDOM from "react-dom";

import Dashboard from "./components/dashboard";
import Footer from "./components/footer";

import "../src/styles/index.scss";

const App = () => {
  return (
    <div>
      <Dashboard />
      {/* <Footer /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
