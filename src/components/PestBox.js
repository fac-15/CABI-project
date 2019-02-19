import React from 'react';
import PestButton from './PestButton';

const PestBox = props => (
    <div className="wrapper">
        <div className="pestBox">
        {console.log('Pestbox props:', props)}
        {props.riskAndName.map(pest => (
            <PestButton pest={pest} route={`/pest/${pest.risk}`} />
        ))}
        </div>
    </div>
);

export default PestBox;
