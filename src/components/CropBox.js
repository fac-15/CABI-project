import React from 'react';
import CropButton from './CropButton';

const CropBox = props => (
    <div>
        <h2>Can't identify the pest? Choose a crop:</h2>
        {props.crops.map(crop => (
        <CropButton crop={crop} route="/crop" />
        ))}
    </div>
);

export default CropBox;