import React from 'react';
import RiskLevel from './RiskLevel';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function PestButton({ pest, route }) {
    const { name, risk, crop } = pest;
    return (
        <div>
            <Link to={route}>
             <button>
              <h3>{name}</h3>
              <RiskLevel level={risk} />
              <p>{crop}</p>
             </button>
            </Link>
        </div>
    );
}
