import React from 'react';
import RiskLevel from './RiskLevel';
import { BrowserRouter as Router, Link } from "react-router-dom";
import factsheet from '../data/factsheet'

export default function PestButton({ pest, route }) {
    const { name, risk} = pest;

    return (
        <div className="pestBtn">
            <Link to={route}>
                <button>
                {factsheet.map(e => {
                        let commonName = "";
                    if (name === e.PestScientificName) {
                        commonName = e.CommonName
                        return <h3>{commonName}</h3>
                    }
                    })}
                    <RiskLevel level={risk} />
                </button>
            </Link>
        </div>
    );
}
