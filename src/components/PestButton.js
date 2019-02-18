import React from 'react';
import RiskLevel from './RiskLevel';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function PestButton({ pest, route }) {
    const { name, risk, crop } = pest;
    return (
        <div className="pestBtn">
            <h2>{crop}</h2>
            <Link to={route}>
                <button>
                    <h3>{name}</h3>
                    <RiskLevel level={risk} />
                </button>
            </Link>
        </div>
    );
}
