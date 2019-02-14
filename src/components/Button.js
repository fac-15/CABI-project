import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Button = props => {
    console.log(props);

    return (
        <Link
            to={{
                pathname: props.route,
                state: { country: props.country, region: props.region }
            }}
        >
            <button className="button">{props.name}</button>
        </Link>
    );
};

export default Button;
