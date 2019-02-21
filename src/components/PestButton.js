import React from 'react';
import RiskLevel from './RiskLevel';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import factsheet from '../data/factsheet';
import styled from 'styled-components';

const PestButtonName = styled.h3`
    text-align: center;
    flex: 0 0 100%;
`;

const PestButtonWrap = styled.div`
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    padding: 0.6em;
    color: white;
`;

const PestButtonContainer = styled.button``;

export default function PestButton({ pest, country, route }) {
    const { name, risk } = pest;

    return (
        <PestButtonWrap className="pestBtn">
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
