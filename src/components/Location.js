import React, { Component } from 'react';
import Button from './Button';
import countyData from '../data/countyData';
import { DropdownWrap } from './styledComponents';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = { country: '', region: '', data: countyData };
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
    }

    handleCountryChange(event) {
        this.setState({ country: event.target.value });
    }

    handleRegionChange(event) {
        this.setState({ region: event.target.value });
    }

    render() {
        console.log(this.state.data[0].Ghana[0].COUNTY);
        const { country, region } = this.state;
        let countryData = '';
        if (this.state.country === 'Ghana') {
            countryData = this.state.data[0].Ghana;
        } else if (this.state.country === 'Kenya') {
            countryData = this.state.data[1].Kenya;
        } else {
            countryData = this.state.data[2].Zambia;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <DropdownWrap>
                    <select
                        className="dropdown"
                        value={country}
                        onChange={value => this.handleCountryChange(value)}
                    >
                        <option value="" disabled selected>
                            Select Country
                        </option>
                        <option value="Ghana">Ghana</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Zambia">Zambia</option>
                    </select>
                    <br />
                    <select
                        className="dropdown"
                        value={region}
                        onChange={value => this.handleRegionChange(value)}
                    >
                        <option value="" disabled selected>
                            Select County/District
                        </option>
                        {Object.values(countryData).map((region, key) => (
                            <option key={key} value={region.COUNTY}>
                                {region.COUNTY}
                            </option>
                        ))}
                    </select>
                    <br />
                    <Button
                        route={`home/${this.state.country}/${
                            this.state.region
                        }`}
                        type="submit"
                        name="Submit"
                        country={this.state.country}
                        region={this.state.region}
                    />
                </DropdownWrap>
            </form>
        );
    }
}

export default Location;
