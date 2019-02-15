import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PestButton from './PestButton';
import Title from './Title.js';

const Risk = props => (
    <div>
        <Title />
        <h1>Hello Risk!</h1>
        <ul>
            {props.data.map(pest => (
                <PestButton pest={pest} />
            ))}
        </ul>
    </div>
);

export default Risk;
