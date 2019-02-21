import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import styled from 'styled-components';
import { ButtonContianer } from './styledComponents';

const Button = props => {
    console.log(props);

    return (
        <Link
            to={{
                pathname: props.route,
                state: { country: props.country, region: props.region }
            }}
        >
            <ButtonContianer /*className="button"*/>
                {props.name}
            </ButtonContianer>
        </Link>
    );
};

export default Button;
