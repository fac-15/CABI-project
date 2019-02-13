import React from "react";
import jsonGhana from "../../factsheets_Ghana.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Location from "./Location";
import Button from "./Button";

const Search = props => (
  <div>
    <h1 className="App-Title">Hello World</h1>
    <Link to="/home">Home</Link>
    <Location />
    <Button name="Submit" route="/home" />
  </div>
);

export default Search;

// {jsonGhana.Factsheets.map(i => {
//   if (i.PAN) return <p> {i.PAN} </p>;
// })}
// <p className="App-intro">{props.data}</p>
