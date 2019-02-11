import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/App';
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { render } from 'react-dom';

// const App = () => <h1>Hello World</h1>;

ReactDOM.render(
(<Router>
    
    <App />
</Router>)
, document.getElementById('root'));
