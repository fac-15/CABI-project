import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import styled from 'styled-components';
import { CropButtonLink } from './styledComponents';

export default function CropButton(props) {
    return (
        <div>
            <Link to={props.route} props={props.country}>
                <CropButtonLink /*className="cropBtn"*/>
                    {props.crop}
                </CropButtonLink>
            </Link>
        </div>
    );
}
