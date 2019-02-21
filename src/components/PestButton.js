import React from 'react';
import RiskLevel from './RiskLevel';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import factsheet from '../data/factsheet';

export default function PestButton({ pest, country, route, region, search }) {
    const { name, risk } = pest;
// console.log(query)
    return (
        <div className="pestBtn">
            <Link to={{pathname:route, search, state:{country: country, region: region}}}>
                {factsheet.map((e, key) => {
                        let commonName = "";
                    if (name === e.PestScientificName && 
                        country === (e.CountryISO === 'GH'
                    ? 'Ghana'
                    : e.CountryISO === 'KE'
                    ? 'Kenya'
                    : e.CountryISO === 'ZM'
                    ? 'Zambia'
                    : '')) {
                        commonName = e.CommonName
                        return <button key={key}>
                        <h3 >{commonName}</h3>
                        <RiskLevel level={risk} />
                        </button>
                    }
                })}
            </Link>
        </div>
    );
}
