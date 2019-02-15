import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import HowManyFarmers from './HowManyFarmers.js';
import Header from './Header';
import Title from './Title.js';
// import fullJson from '../data/factsheet.json';

class Crop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null
        };
    }

    componentDidMount = async () => {
        // await fetch('../data/factsheet.json')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data.CommonName);
        //         this.setState({
        //             info: data[0].CommonName
        //         });
        //     });
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
        await fetch('../data/factsheet.json', { headers: myHeaders })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    info: data
                });
            });
    };

    render() {
        return (
            <div>
                <Title />
                {console.log('data: ', JSON.stringify(this.state.info))}
                {console.log(this.props.match.params.crops)}
                <Header name={this.props.match.params.crops} />
                <div id="container">
                    <HowManyFarmers />
                </div>
            </div>
        );
    }
}

export default Crop;
