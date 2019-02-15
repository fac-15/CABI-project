import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Location from './Location';
import Title from './Title.js';

const Search = props => (
    <div>
        <Title />
        <h1 className="App-Title">Select your location</h1>
        <Link to="/home">Home</Link>
        <Location />
    </div>
);

export default Search;
