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
            data: {}
        };
    }

    componentDidMount() {
        // fetch(jsonSheet)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({ data: jsonSheet });
        //     });
        this.setState({ data: jsonSheet });
        console.log(jsonSheet);
    }

    render() {
        return (
            <div>
                <Title />
                {console.log('data: ', JSON.stringify(this.state.info))}
                {console.log(this.props.match.params.crops)}
                <Header name={this.props.match.params.crops} />
                <div id="container">
                    <ul>
                        {jsonSheet.map(e => {
                            if (e.Crop === 'maize') {
                                return (
                                    <li key={e.CountryISO}>
                                        {e.PestScientificName}
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
