import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Button from './Button';
import countyData from '../data/countyData'


class Location extends Component {
    constructor(props) {
        super(props);

        this.state = { country: '', region: '', data: countyData };

        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCountryChange(event) {
        this.setState({ country: event.target.value });
        // this.setState({ country: value });
    }

    handleRegionChange(event) {
        this.setState({ region: event.target.value });
        // this.setState({ region: value });
    }

    handleSubmit(event) {
        alert('RESULT:  ' + this.state.country + this.state.region);
        event.preventDefault();
    }
    // selectCountry(val) {
    //     this.setState({ country: val });
    // }

    // selectRegion(val) {
    //     this.setState({ region: val });
    // }

    render() {
        console.log(this.state.data[0].Ghana[0].COUNTY)
        const { country, region } = this.state;
        let countryData = "";
        if (this.state.country === "Ghana") {
            countryData = this.state.data[0].Ghana;
        } else if (this.state.country === "Kenya") {
            countryData = this.state.data[1].Kenya;
        } else {
            countryData = this.state.data[2].Zambia;   
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="dropdown">
                    {/* <CountryDropdown
                    className="dropdown"
                    value={country}
                    onChange={value => this.handleChange(value)}
                    whitelist={['GH', 'KE', 'ZM']}
                /> */}
                    <select
                        className="dropdown"
                        value={country}
                        onChange={value => this.handleCountryChange(value)}
                    >
                        <option value="Ghana">Ghana</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Zambia">Zambia</option>
                    </select>
                    <br />
                    {/* <RegionDropdown
                    className="dropdown"
                    defaultOptionLabel="Select County or District"
                    country={country}
                    value={region}
                    onChange={value => this.handleChange(value)}
                /> */}
                    <select
                        className="dropdown"
                        value={region}
                        onChange={value => this.handleRegionChange(value)}
                    
                    >
                     {
                         Object.values(countryData).map(region => 
                        <option value={region.COUNTY}>{region.COUNTY}</option>
                        )}
                    </select>
                    <br />
                    <Button
                        // <Link to="" > </Link>
                        route={`home/${this.state.country}/${
                            this.state.region
                        }`}
                        type="submit"
                        name="Submit"
                        country={this.state.country}
                        region={this.state.region}
                    />
                </div>
            </form>
        );
    }
}

export default Location;
