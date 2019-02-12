import React from 'react';
import styled from 'styled-components';

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
        <Risk level={props.level}>{props.level}</Risk>
    </div>
);

export default RiskLevel;
