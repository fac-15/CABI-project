import React from "react";
import jsonGhana from "../../factsheets_Ghana.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HowManyFarmers from "./HowManyFarmers.js";


const Crop = props => (
<div>
    <h1 className="App-Title">Hello Crop! Muahahahahaha</h1>
        <HowManyFarmers />
</div>
)


export default Crop;