import React from 'react';
import RiskLevel from './RiskLevel';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import factsheet from '../data/factsheet';
// import styled from 'styled-components';
import {
    PestButtonName,
    PestButtonWrap,
    PestButtonContainer
} from './styledComponents';

export default function PestButton({ pest, country, route }) {
    const { name, risk } = pest;

    return (
        <PestButtonWrap /*className="pestBtn"*/>
            <Link to={route}>
                {factsheet.map(e => {
                    let commonName = '';
                    if (
                        name === e.PestScientificName &&
                        country ===
                            (e.CountryISO === 'GH'
                                ? 'Ghana'
                                : e.CountryISO === 'KE'
                                ? 'Kenya'
                                : e.CountryISO === 'ZM'
                                ? 'Zambia'
                                : '')
                    ) {
                        commonName = e.CommonName;
                        return (
                            <PestButtonContainer>
                                <PestButtonName>{commonName}</PestButtonName>
                                <RiskLevel level={risk} />
                            </PestButtonContainer>
                        );
                    }
                })}
            </Link>
        </PestButtonWrap>
    );
}
