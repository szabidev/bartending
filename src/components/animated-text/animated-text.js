import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// Make seperate files for requests !!!!!!!

const AnimatedText = (props) => {
  const { welcomeTextFirst, welcomeTextSecond } = props || {};
  // data = the info from the json file
  const [data, setData] = useState([]);
  const baseURL = "JSON/welcomeText.json";

  // using useffect to make a get request at component load (first load)
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      // setData = extracting the value from the json file, updating state
      setData(response.data);
    });
  }, []);

  return (
    <div className="text-container">
      <span className="text-main">{data?.welcomeTextFirst}</span>
      <span className="text-second">{data?.welcomeTextSecond}</span>
    </div>
  );
};

export default AnimatedText;
