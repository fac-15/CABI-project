<<<<<<< HEAD
import React from 'react';
import jsonGhana from '../../factsheets_Ghana.json';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PestButton from './PestButton';

const Risk = props => (
    <div>
        <h1>Hello Risk!</h1>
        <ul>
            {props.data.map(pest => (
                <PestButton pest={pest} />
            ))}
        </ul>
    </div>
);

export default Risk;
=======
import React from "react";
import jsonGhana from "../../factsheets_Ghana.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
>>>>>>> staging
