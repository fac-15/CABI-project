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
                                        <b>Common Name: </b>{' '}
                                        {e.CommonName.toUpperCase()}
                                        <br />
                                        <p>
                                            <b>Crop affected: </b> {e.Crop}
                                        </p>
                                        <br />
                                        <p>
                                            <b>Country/Region: </b>
                                            {e.CountryISO === 'GH'
                                                ? 'Ghana'
                                                : e.CountryISO === 'KE'
                                                ? 'Kenya'
                                                : e.CountryISO === 'ZM'
                                                ? 'Zambia'
                                                : ''}
                                        </p>
                                        <br />
                                        <b>
                                            Direct Control with restrictions:{' '}
                                        </b>
                                        <br />
                                        <p>
                                            {
                                                e[
                                                    'Direct Control with restrictions'
                                                ]
                                            }
                                        </p>
                                        <br />
                                        <b>
                                            Direct Control without restrictions:{' '}
                                        </b>
                                        <br />
                                        <p>
                                            {
                                                e[
                                                    'Direct Control without restrictions'
                                                ]
                                            }
                                        </p>
                                        <br />
                                        <p>
                                            <b>Monitoring: </b> {e.Monitoring}
                                        </p>
                                        <br />
                                        <p>
                                            <b>Prevention: </b> {e.Prevention}
                                        </p>
                                        
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
