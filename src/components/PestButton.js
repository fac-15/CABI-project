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

export default function PestButton({ pest, country, route, region, search }) {
    const { name, risk } = pest;
    // console.log(query)
    return (
        <PestButtonWrap /*className="pestBtn"*/>
            <Link
                to={{
                    pathname: route,
                    search,
                    state: { country: country, region: region }
                }}
            >
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
                            <PestButtonContainer key={key}>
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
