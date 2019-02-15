import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HowManyFarmers from "./HowManyFarmers.js";
import Header from "./Header";
import Title from "./Title.js";

export default function Crop(props) {

  return (
    <div>
      <Title />
      {console.log(props.match.params.crops)}
      <Header name={props.match.params.crops} />
      <div id="container">
            <HowManyFarmers />
            </div>
    </div>
  );
}
