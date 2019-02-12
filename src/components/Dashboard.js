import React from "react";
import jsonGhana from "../../factsheets_Ghana.json";
import Button from "./Button.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1 className="App-Title">Hello Dashboard! Muahahahahaha</h1>
      <Button name="Back" route="/" />
    </div>
  );
}
