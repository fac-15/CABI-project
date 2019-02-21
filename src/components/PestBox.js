import React from 'react';
import PestButton from './PestButton';
import factsheet from '../data/factsheet';

const PestBox = props => (
  <div className="wrapper">
        <div className="pestBox">
          <h2>{props.name}</h2>
      {console.log("Pestbox props:", props)}
      {props.riskAndName.map((pest, key) => (
        <PestButton
        key={key}
          pest={pest}
          country={props.country}
          route={`/pest/${pest.name}?country=${props.country}`}
        />
      ))}
    </div>
</div>
);

export default PestBox;
