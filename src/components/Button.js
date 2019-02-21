import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContianer } from './styledComponents';

const Button = props => {
    return (
        <Link
            to={{
                pathname: props.route,
                state: { country: props.country, region: props.region }
            }}
        >
            <ButtonContianer>{props.name}</ButtonContianer>
        </Link>
    );
};

export default Button;
