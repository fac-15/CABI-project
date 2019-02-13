import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = props => {
    return <h1>{props.name}</h1>;
};

export default Header;
