import React from 'react';
import PestButton from './PestButton';
import factsheet from '../data/factsheet';
// import styled from 'styled-components';
import { PestBoxWrapper, PestBoxContainer } from './styledComponents';

const PestBox = props => (
    <PestBoxWrapper /*className="wrapper"*/>
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
        <PestBoxContainer /*className="pestBox"*/>
            {console.log('Pestbox props:', props)}
            {props.riskAndName.map(pest => (
                <PestButton
                    pest={pest}
                    country={props.country}
                    route={`/pest/${pest.name}`}
                />
            ))}
        </PestBoxContainer>
    </PestBoxWrapper>
);

export default PestBox;
