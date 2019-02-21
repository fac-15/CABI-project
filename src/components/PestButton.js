import React from 'react';
import RiskLevel from './RiskLevel';
import { Link } from 'react-router-dom';
import factsheet from '../data/factsheet';
import {
    PestButtonName,
    PestButtonWrap,
    PestButtonContainer
} from './styledComponents';

export default function PestButton({ pest, country, route, region, search }) {
    const { name, risk } = pest;
    // console.log(query)
    return (
        <PestButtonWrap>
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
                            <PestButtonContainer key={e.pestID}>
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
