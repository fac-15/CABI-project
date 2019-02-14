
import React from "react";
import jsonGhana from "../../factsheets_Ghana.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HowManyFarmers from "./HowManyFarmers.js";
import Header from './Header';

// const Crop = props => (
//     <div>
//         <Header name={props.name} />
//         {/* <h1 className="App-Title">TEXT</h1> */}
//     </div>
// );

export default function Crop(props) {
    const name = window.location.href.split('/')[4];

    return (
        <div>
            {console.log(name)}
            <Header name={name} />
            <div id="container">
            <HowManyFarmers />
            </div>
        </div>
    );
}
