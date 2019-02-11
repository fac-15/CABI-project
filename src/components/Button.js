import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Button = props => {
  return (
    <Link to={props.route}>
      <button className="button">{props.name}</button>
    </Link>
  );
};

export default Button;
