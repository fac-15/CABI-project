import React from 'react';
import PestButton from './PestButton';

const PestBox = props => (
    <div className="pestBox">
        {console.log(props)}
        {props.pests.map(pest => (
            <PestButton pest={pest} route="/pest" />
        ))}
    </div>
);

export default PestBox;
