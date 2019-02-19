import React from 'react';
import CropButton from './CropButton';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const CropBox = props => (
    <div className="cropBox">
        <p>
            You are in {props.country}, {props.region}.{' '}
            <Link to="/">Change location</Link>
        </p>
        <h2>Can't identify the pest? Choose a crop:</h2>
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
    </div>
);

export default CropBox;
