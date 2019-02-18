import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import HowManyFarmers from './HowManyFarmers.js';
import Header from './Header';
import Title from './Title.js';
var jsonSheet = require('../data/factsheet.json');

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
        // console.log(this.state.data);
    }

    render() {
        console.log('PROP', this.props);
        return (
            <div>
                <Title />
                {/* {console.log('couuuntry: ', this.props.match.params.country)}
                {console.log('reeeegion: ', this.props.match.params.region)} */}

                {console.log('data: ', this.state.data)}
                {console.log(this.props.match.params.crops)}
                {console.log(this.props)}
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
                                // const a = e.Image1.url;
                                // console.log(a);

                                return (
                                    <li key={key}>
                                        <b>Common Name: </b>{' '}
                                        {e.CommonName.toUpperCase()}
                                        <br />
                                        <p>
                                            <b>Crop affected: </b> {e.Crop}
                                        </p>
                                        <br />
                                        {/* {console.log('image', e['Image 1'])} */}
                                        {console.log(
                                            'Images array:',
                                            e.Images[0].Image1.url
                                        )}
                                        {e.Images &&
                                            e.Images.map(i => {
                                                {
                                                    console.log(i.Image1.url);
                                                }
                                                <img
                                                    src={i.Image1.url}
                                                    width="706"
                                                    height="445"
                                                />;
                                            })
                                        // <img
                                        //     src={e['Image 1'].url}
                                        //     width="706"
                                        //     height="445"
                                        //     // alt="e.[Image 1].Caption"
                                        // />
                                        }
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
