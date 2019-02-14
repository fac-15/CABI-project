import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Button from './Button';

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = { country: '', region: ' ' };
    }

    selectCountry(val) {
        this.setState({ country: val });
    }

    selectRegion(val) {
        this.setState({ region: val });
    }

    render() {
        const { country, region } = this.state;
        return (
            <div>
                <CountryDropdown
                    value={country}
                    onChange={val => this.selectCountry(val)}
                    whitelist={['GH', 'KE', 'ZM']}
                />
                <br />
                <RegionDropdown
                    defaultOptionLabel="Select County or District"
                    country={country}
                    value={region}
                    onChange={val => this.selectRegion(val)}
                />
                <br />
                <Button
                    name="Submit"
                    route="/home"
                    country={this.state.country}
                    region={this.state.region}
                />
            </div>
        );
    }
}

export default Location;
