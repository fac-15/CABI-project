import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Location from './Location';
import Title from './Title.js';
// import styled from 'styled-components';
import { SelectLocationHead } from './styledComponents';

const Search = props => (
    <div>
        <Title />
        <SelectLocationHead /*className="location"*/>
            Select your location
        </SelectLocationHead>
        <Location />
    </div>
);

export default Search;
