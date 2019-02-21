import React from 'react';
// import styled from 'styled-components';
import { RiskBar } from './styledComponents';

const riskNumToString = num => {
    let string;
    if (num === 1) {
        string = 'Low risk';
    } else if (num === 2) {
        string = 'Medium risk';
    } else {
        string = 'High risk';
    }
    return string;
};

const RiskLevel = props => (
    <div>
        <RiskBar level={props.level}>{riskNumToString(props.level)}</RiskBar>
    </div>
);

export default RiskLevel;
