import React from 'react';
import PestButton from './PestButton';

const PestBox = props => (
    <div>
        <h2>{props.cropName}</h2>
        {props.pests.map(pest => (
            <PestButton pest={pest} />
        ))}
    </div>
);

export default PestBox;
