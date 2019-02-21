import React from 'react';
import CropButton from './CropButton';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import styled from 'styled-components';
import { CropboxWrap, ChooseACrop, LocationInfo } from './styledComponents';

const CropBox = props => (
    <CropboxWrap /*className="cropBox"*/>
        <LocationInfo>
            You are in {props.country}, {props.region}.{' '}
            <Link to="/">Change location</Link>
        </LocationInfo>
        <ChooseACrop>Can't identify the pest? Choose a crop:</ChooseACrop>
        <CropButton
            country={props.country}
            region={props.region}
            crop="Tomato"
            route={`/${props.country}/${props.region}/Tomato`}
        />
        <CropButton
            country={props.country}
            region={props.region}
            crop="Beans"
            route={`/${props.country}/${props.region}/Beans`}
        />
        <CropButton
            country={props.country}
            region={props.region}
            crop="Maize"
            route={`/${props.country}/${props.region}/Maize`}
        />
    </CropboxWrap>
);

export default CropBox;
