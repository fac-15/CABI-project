import React from "react";
import jsonGhana from "../../factsheets_Ghana.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HowManyFarmers from "./HowManyFarmers.js";
import Header from "./Header";

export default function Crop(props) {
  return (
    <div>
      {console.log(props.match.params.crops)}
      <Header name={props.match.params.crops} />
      <HowManyFarmers />
    </div>
  );
}
