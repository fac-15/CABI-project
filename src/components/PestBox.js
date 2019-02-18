import React from 'react';
import PestButton from './PestButton';

const PestBox = props => (
    <div className="wrapper">
        <div className="pestBox">
        {console.log(props)}
        {props.pests.map(pest => (
            <PestButton pest={pest} route={`/pest/${pest.name}`} />
        ))}
        </div>
    </div>
);

export default PestBox;
