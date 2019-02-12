import React from 'react';
import CropButton from './CropButton';

const CropBox = props => (
    <div>
        <h2>Can't identify the pest? Choose a crop:</h2>
        <CropButton crop="Tomato" route="/crop" />
        <CropButton crop="Bean" route="/crop" />
        <CropButton crop="Maize" route="/crop" />
    </div>
);

export default CropBox;