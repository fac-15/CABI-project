import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function CropButton(props) {
    return (
        <div>
            <Link to={props.route}>
            <button>{props.crop}</button>
            </Link>
        </div>
    );
}