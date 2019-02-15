import React from 'react';
// import jsonGhana from '../../factsheets_Ghana.json';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Location from './Location';
import Title from './Title.js';

const Search = props => (
    <div>
        <Title />
        <h1 className="App-Title">Hello World</h1>
        <Link to="/home">Home</Link>
        <Location />
    </div>
);

export default Search;
