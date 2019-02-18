import React from 'react';
import CropButton from './CropButton';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const CropBox = props => (
    <div>
        <p>
            You are in {props.country}, {props.region}.{' '}
            <Link to="/">Change location</Link>
        </p>
        <h2>Can't identify the pest? Choose a crop:</h2>
        <CropButton crop="Tomato" route="/crop/Tomato" />
        <CropButton crop="Beans" route="/crop/Beans" />
        <CropButton crop="Maize" route="/crop/Maize" />
    </div>
);

export default CropBox;
