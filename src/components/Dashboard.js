import React from 'react';
import PestBox from './PestBox';
import Button from './Button.js';
import CropBox from './CropBox';
import Title from './Title';
import factSheet from '../data/factsheet';
import { DashWrap, Loading } from './styledComponents';

const countryISOs = {
    Kenya: 'KE',
    Ghana: 'GH',
    Zambia: 'ZM'
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: '',
            region: '',
            riskAndName: null,
            crop: '',
            loading: true
        };
    }
    componentDidMount() {
        const { country, region } = this.props.location.state;
        this.setState({
            country: country,
            region: region
        });
        this.callBackendAPI(region)
            .then(res => res.json())
            .then(body => {
                const reversedBody = body.results.reverse();
                const oneName = [];
                const map = new Map();
                for (const item of reversedBody) {
                    if (!map.has(item.pest_name)) {
                        map.set(item.pest_name, true);
                        oneName.push({ name: item.pest_name, risk: item.risk });
                    }
                }
                const riskAndName = oneName.map(obj => {
                    return {
                        name: obj.name,
                        risk: obj.risk
                    };
                });

                this.setState({ riskAndName });
            })
            .catch(err => console.log('error in routes req', err));
    }

    callBackendAPI = async region => {
        const response = await fetch(
            `https://cabipestalert.herokuapp.com/riskres?region=${region}`
        );
        return response;
    };

    separatePestByCrop = crop => {
        const countryISO = countryISOs[this.state.country];

        if (this.state.riskAndName == null) {
            return [];
        }
        return this.state.riskAndName
            .map(pest => {
                return {
                    ...pest,
                    ...factSheet.find(
                        item =>
                            item.PestScientificName === pest.name &&
                            item.CountryISO === countryISO
                    )
                };
            })
            .filter(pest => pest.Crop === crop);
    };

    render() {
        if (this.state.riskAndName === null) {
            return <Loading>Loading...</Loading>;
        } else {
            return (
                <DashWrap>
                    <Title />
                    <CropBox
                        country={this.state.country}
                        region={this.state.region}
                        className="cropbox"
                        crops={this.state.data}
                    />
                    <PestBox
                        name="Tomato"
                        riskAndName={this.separatePestByCrop('tomato')}
                        country={this.state.country}
                        region={this.state.region}
                    />
                    <PestBox
                        name="Maize"
                        riskAndName={this.separatePestByCrop('maize')}
                        country={this.state.country}
                        region={this.state.region}
                    />
                    <PestBox
                        name="Beans"
                        riskAndName={this.separatePestByCrop('beans')}
                        country={this.state.country}
                        region={this.state.region}
                    />
                    <Button name="Back" route="/" />
                    <Button name="Feedback" route="/form" />
                </DashWrap>
            );
        }
    }
}

export default Dashboard;
