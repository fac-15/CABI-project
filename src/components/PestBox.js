import React from "react";
import PestButton from "./PestButton";
import factsheet from "../data/factsheet";

const PestBox = props => (
  <div className="wrapper">
    {/* {factsheet.map(e => {
      let cropName = "";
      if (
        props.riskAndName.name === e.PestScientificName &&
        country ===
          (e.CountryISO === "GH"
            ? "Ghana"
            : e.CountryISO === "KE"
            ? "Kenya"
            : e.CountryISO === "ZM"
            ? "Zambia"
            : "")
      ) {
        cropName = e.Crop;
        return <h2>{cropName}</h2>;
      }
    })} */}
    <div className="pestBox">
      {console.log("Pestbox props:", props)}
      {props.riskAndName.map(pest => (
        <PestButton
          pest={pest}
          country={props.country}
          route={`/pest/${pest.name}`}
        />
      ))}
    </div>
  </div>
);

export default PestBox;
