import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import HowManyFarmers from './HowManyFarmers.js';
import Header from './Header';
import Title from './Title.js';
var jsonSheet = require('../data/factsheet.json');

class Crop extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        this.setState({ data: jsonSheet });
        // console.log(this.state.data);
    }

    render() {
        return (
            <div>
                <Title />
                {console.log('data: ', this.state.data)}
                {console.log(this.props.match.params.crops)}
                <Header name={this.props.match.params.crops} />
                <div id="container">
                    <ul>
                        {jsonSheet.map((e, key) => {
                            if (
                                e.Crop ===
                                this.props.match.params.crops.toLowerCase()
                            ) {
                                return (
                                    <li key={key}>
                                        {e.PestScientificName}{' '}
                                        <p>{e.CountryISO}</p>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                    <HowManyFarmers />
                </div>
            </div>
        );
    }
}

export default Crop;
