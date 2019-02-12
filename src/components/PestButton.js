import React from 'react';
import RiskLevel from './RiskLevel';

export default function PestButton({ pest }) {
    const { name, risk, crop } = pest;
    return (
        <div>
            <h3>{name}</h3>
            <RiskLevel level={risk} />
            <p>{crop}</p>
        </div>
    );
}
