import React from 'react';
import CropButton from './CropButton';

const CropBox = props => (
    <div>
        <h2>Can't identify the pest? Choose a crop:</h2>
        <CropButton crop="Tomato" route="/crop/Tomato" />
        <CropButton crop="Bean" route="/crop/Bean" />
        <CropButton crop="Maize" route="/crop/Maize" />
    </div>
);

export default CropBox;
