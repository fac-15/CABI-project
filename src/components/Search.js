import React from 'react';
import Location from './Location';
import Title from './Title.js';
import { SelectLocationHead } from './styledComponents';

const Search = props => (
    <div>
        <Title />
        <SelectLocationHead>Select your location</SelectLocationHead>
        <Location />
    </div>
);

export default Search;
