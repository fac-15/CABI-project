import React from 'react';
import HowManyFarmers from './HowManyFarmers.js';
import Header from './Header';
import Title from './Title.js';
import { CropCommonHeader, PestImg } from './styledComponents';
const jsonSheet = require('../data/factsheet.json');

class Crop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            country: this.props.country,
            region: null
        };
    }

    componentDidMount() {
        this.setState({
            data: jsonSheet,
            country: this.state.country,
            region: this.region
        });
    }

    render() {
        return (
            <div>
                <Title />
                <Header name={this.props.match.params.crops} />
                <div id="container">
                    <ul>
                        {jsonSheet.map((e, key) => {
                            if (
                                e.Crop ===
                                    this.props.match.params.crops.toLowerCase() &&
                                this.props.match.params.country ===
                                    (e.CountryISO === 'GH'
                                        ? 'Ghana'
                                        : e.CountryISO === 'KE'
                                        ? 'Kenya'
                                        : e.CountryISO === 'ZM'
                                        ? 'Zambia'
                                        : '')
                            ) {
                                return (
                                    <li key={key}>
                                        <CropCommonHeader>
                                            Common Name:{' '}
                                            {e.CommonName.toUpperCase()}{' '}
                                        </CropCommonHeader>
                                        <br />
                                        <p>
                                            <b> Crop affected: </b> {e.Crop}
                                        </p>
                                        <br />

                                        {e.Images &&
                                            Object.values(e.Images[0]).map(
                                                image => (
                                                    <div>
                                                        <PestImg
                                                            className="pestImg"
                                                            src={image.url}
                                                        />
                                                        <p>
                                                            <b>Identify by: </b>
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
