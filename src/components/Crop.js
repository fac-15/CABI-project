import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import HowManyFarmers from './HowManyFarmers.js';
import Header from './Header';
import Title from './Title.js';
var jsonSheet = require('../data/factsheet.json');

class Crop extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        this.setState({ data: jsonSheet[0] });
        // console.log(this.state.data);
    }

    render() {
        return (
            <div>
                <Title />
                {console.log('data: ', JSON.stringify(this.state.data))}
                {console.log(this.props.match.params.crops)}
                <Header name={this.props.match.params.crops} />
                <div id="container">
                    <ul>
                        {jsonSheet.map(e => {
                            if (e.Crop === 'tomato') {
                                return <li> {e.PestScientificName}</li>;
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
