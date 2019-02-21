import React from 'react';
import { Link } from 'react-router-dom';
import { CropButtonLink } from './styledComponents';

export default function CropButton(props) {
    return (
        <div>
            <Link to={props.route} props={props.country}>
                <CropButtonLink>{props.crop}</CropButtonLink>
            </Link>
        </div>
    );
}
