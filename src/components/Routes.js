import React, { Component } from 'react';
require('babel-polyfill');
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Search from './Search';
import Dashboard from './Dashboard';
import Risk from './Risk';
import Form from './Form';
import Crop from './Crop';
import Pest from './Pest';
// import Header from './Header';
// import HowManyFarmers from './HowManyFarmers.js';

const pests = [
    {
        name: 'African-stalk-borer',
        risk: 1,
        crop: 'Maize',
        pestId: 1
    },
    {
        name: 'Fall-armyworm',
        risk: 3,
        crop: 'Tomato',
        pestId: 2
    },
    {
        name: 'Leafminer-on-beans',
        risk: 2,
        crop: 'Beans',
        pestId: 3
    }
];

class Routes extends Component {
    state = {
        data: null,
        panGhana: null,
        name: '',
        riskAndName: null
    };

    componentDidMount() {
        this.callBackendAPI()
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

    callBackendAPI = async () => {
        const response = await fetch('http://localhost:5000/riskres');
        // // const body = await response.json();
        // console.log(body)
        return response;
    };

    render() {
        console.log('risk and name array', this.state.riskAndName);
        return (
            <Router>
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={props => (
                                <Search
                                    {...props}
                                    riskAndName={this.state.riskAndName}
                                />
                            )}
                        />
                        <Route
                            path="/home"
                            component={props => (
                                <Dashboard
                                    {...props}
                                    data={pests}
                                    riskAndName={this.state.riskAndName}
                                />
                            )}
                        />
                        <Route
                            path="/:country/:region/:crops"
                            component={props => (
                                <Crop {...props} data={pests} country={this.country} region={this.region} />
                            )}
                        />
                        <Route
                            path="/pest/:pests"
                            component={props => (
                                <Pest {...props} data={pests} />
                            )}
                        />
                        <Route
                            path="/risk"
                            component={() => (
                                <Risk {...props} data={this.state.risk} />
                            )}
                        />{' '}
                        */}
                        <Route path="/form" component={Form} />
                        {/* <Route path='/search' component={Search} />
            <Route component={404} /> */}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
