import React from 'react';
import PestButton from './PestButton';
import factsheet from '../data/factsheet';
// import styled from 'styled-components';
import {
    PestBoxWrapper,
    PestBoxContainer,
    CropNameHeader
} from './styledComponents';

const PestBox = props => (
    <PestBoxWrapper /*className="wrapper"*/>
        <PestBoxContainer /*className="pestBox"*/>
            <CropNameHeader>{props.name}</CropNameHeader>
            {props.riskAndName.map((pest, key) => (
                <PestButton
                    key={key}
                    pest={pest}
                    country={props.country}
                    region={props.region}
                    search={`?country=${props.country}?region=${props.region}`}
                    route={`/pest/${pest.name}`}
                />
            ))}
        </PestBoxContainer>
    </PestBoxWrapper>
);

export default PestBox;
