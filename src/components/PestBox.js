import React from "react";
import PestButton from "./PestButton";

const PestBox = props => (
  <div>
    {props.pests.map(pest => (
      <PestButton pest={pest} route="/pest" />
    ))}
  </div>
);

export default PestBox;
