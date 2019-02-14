import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import title from '../../public/title.png/';

const Title = () => (
    <div className="title-container">
        <img className="title" src={title} />
    </div>    
);

export default Title;