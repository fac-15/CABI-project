import React from 'react';
import PestButton from './PestButton';
import Title from './Title.js';

const Risk = props => (
    <div>
        <Title />
        <h1>Hello Risk!</h1>
        <ul>
            {props.data.map(obj => (
                <PestButton pest={obj.name} />
            ))}
        </ul>
    </div>
);

export default Risk;
