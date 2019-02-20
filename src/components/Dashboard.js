import React from 'react';
import PestBox from './PestBox';
import Button from './Button.js';
import CropBox from './CropBox';
import Title from './Title';
import factSheet from '../data/factsheet';

const countryISOs = {
    'Kenya': 'KE',
    'Ghana': 'GH',
    'Zambia': 'ZM'
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: '',
            region: '',
            riskAndName: null,
            crop: "",
            loading: true
        };
    }
    componentDidMount() {
        // const { data } = this.props.match.params;
        const { country, region } = this.props.location.state;
        console.log(this.props.data);

        this.setState({
            country: country,
            region: region,
            riskAndName: this.props.riskAndName
        });
    }

    separatePestByCrop = (crop) => {
      const countryISO = countryISOs[this.state.country];

      if (this.state.riskAndName == null) {
          return [];
      }
      return this.state.riskAndName
        .map(pest => {
            return {
                ...pest,
                ...factSheet.find(item => item.PestScientificName === pest.name && item.CountryISO === countryISO)
            }
        })
        .filter(pest => pest.Crop === crop);
      // return factSheet.filter(e => this.state.riskAndName.find(obj => obj.name === e.PestScientificName));
    }

    render() {

        // console.log('Dashboard risk', this.state.riskAndName);
        // console.log("Cropname:", this.state.crop)
        console.log('tomato pests for', this.state.country, this.separatePestByCrop('maize'));
        if (this.state.riskAndName === null) {
            return <div>Loading</div>;
        } else {
            return (
                <div>
                    <Title />
                    <CropBox
                        country={this.state.country}
                        region={this.state.region}
                        className="cropbox"
                        crops={this.state.data}
                    />
                    <PestBox
                        name='Tomato'
                        riskAndName={this.separatePestByCrop('tomato')}
                        country={this.state.country}
                    />
                    <PestBox
                        name='Maize'
                        riskAndName={this.separatePestByCrop('maize')}
                        country={this.state.country}
                    />
                    <PestBox
                        name='Beans'
                        riskAndName={this.separatePestByCrop('beans')}
                        country={this.state.country}
                    />
                    <Button name="Back" route="/" />
                </div>
            );
        }
    }
}

export default Dashboard;
