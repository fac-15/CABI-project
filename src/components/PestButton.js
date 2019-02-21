import React from 'react';
import RiskLevel from './RiskLevel';
import { BrowserRouter as Router, Link } from "react-router-dom";
import factsheet from '../data/factsheet'

export default function PestButton({ pest, country, route }) {
    const { name, risk} = pest;

    return (
        <div className="pestBtn">
            <Link to={route} country={country}>
                {factsheet.map((e) => {
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
                        return <button>
                        <h3>{commonName}</h3>
                        <RiskLevel level={risk} />
                        </button>
                    }
                })}
            </Link>
        </div>
    );
}
