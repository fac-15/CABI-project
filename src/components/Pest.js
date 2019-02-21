import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Title from "./Title.js";
import Header from "./Header";
import HowManyFarmers from "./HowManyFarmers";
const jsonSheet = require('../data/factsheet.json');


const countryISOs = {
    'Kenya': 'KE',
    'Ghana': 'GH',
    'Zambia': 'ZM'
}

class Pest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            country: this.props.country
        };
    }

    componentDidMount() {
        this.setState({ data: jsonSheet });
        // console.log(this.state.data);
    }

    render() {
        const pestName = this.props.match.params.pests;
        const country = this.props.match.params.country;
        console.log('In PEST:', this.props)
        return (
            <div>
                <Title />
                <Header name={pestName} />
                <div id="container">
                    <ul>
                        {jsonSheet.map((e, key) => {
                            if (e.PestScientificName === pestName && country === countryISOs[country]) {
                                return (
                                    <li key={key}>
                                        <h4>Common Name: {' '}
                                        {e.CommonName.toUpperCase()} </h4>
                                        <br />
                                        <p>
                                          <b>  Crop affected: </b> {e.Crop}
                                        </p>
                                        <br />
                                        {
                                            Object.values(e.Images[0]).map((image, key) => 
                                            <div><img key={key} className="pestImg" src={image.url} /><p><b>Identify by: </b>{image.Caption}</p></div>)
                                          } 
                                        <p>
                                        <b> Country/Region: </b>
                                            {country}
                                        </p>
                                        <br />
                                        <p>
                                        <b>   Prevention: </b> {e.Prevention}
                                        </p>
                                        <br />
                                        <p>
                                        <b>   Monitoring: </b> {e.Monitoring}
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