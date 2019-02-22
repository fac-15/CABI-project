import React from 'react';
import Title from './Title.js';
import Header from './Header';
import HowManyFarmers from './HowManyFarmers';
import { PestCommonHeader, PestImg } from './styledComponents';
const jsonSheet = require('../data/factsheet.json');

const countryISOs = {
    Kenya: 'KE',
    Ghana: 'GH',
    Zambia: 'ZM'
};

class Pest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            country: this.props.location.state.country,
            region: this.props.location.state.region
        };
    }

    componentDidMount() {
        this.setState({ data: jsonSheet });
    }

    render() {
        const pestName = this.props.match.params.pests;
        const country = this.props.match.params.country;
        return (
            <div>
                <Title />
                <Header name={pestName} />
                <div id="container">
                    <ul>
                        {jsonSheet.map((e, key) => {
                            e.countryISO =
                                e.CountryISO === 'GH'
                                    ? 'Ghana'
                                    : e.CountryISO === 'KE'
                                    ? 'Kenya'
                                    : e.CountryISO === 'ZM'
                                    ? 'Zambia'
                                    : '';

                            if (
                                e.countryISO === this.state.country &&
                                e.PestScientificName === pestName
                            ) {
                                return (
                                    <li key={key}>
                                        <PestCommonHeader>
                                            Common Name:{' '}
                                            {e.CommonName.toUpperCase()}{' '}
                                        </PestCommonHeader>
                                        <br />
                                        <p>
                                            <b> Crop affected: </b> {e.Crop}
                                        </p>
                                        <br />
                                        {Object.values(e.Images[0]).map(
                                            (image, key) => (
                                                <div key={key}>
                                                    <PestImg src={image.url} />
                                                    <p>
                                                        <b>Identify by: </b><br />
                                                        {image.Caption}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                        <p>
                                            <b> Country/Region: </b>
                                            {e.CountryISO === 'GH'
                                                ? 'Ghana'
                                                : e.CountryISO === 'KE'
                                                ? 'Kenya'
                                                : e.CountryISO === 'ZM'
                                                ? 'Zambia'
                                                : ''}
                                        </p>
                                        <br />
                                        <p>
                                            <b> Prevention: </b> {e.Prevention}
                                        </p>
                                        <br />
                                        <p>
                                            <b> Monitoring: </b> {e.Monitoring}
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

export default Pest;
