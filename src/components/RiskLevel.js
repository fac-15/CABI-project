import React from 'react';
import styled from 'styled-components';

const riskNumToString = (num) => {
    let string;
    if (num === 1) {
        string = "Low risk";
    } else if (num === 2) {
        string = "Medium risk";
    } else {
        string = "High risk";
    }
    return string;
};

const riskColor = num => {
    return num === 1
        ? 'green'
        : num === 2
        ? 'orange'
        : num === 3
        ? 'red'
        : 'white';
};

const Risk = styled.p`
    background-color: ${props => riskColor(props.level)};
`;

const RiskLevel = props => (
    <div>
        <Risk level={props.level}>{riskNumToString(props.level)}</Risk>
    </div>
);

export default RiskLevel;
