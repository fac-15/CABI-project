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
        name: "African-stalk-borer",
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
        name: "Leafminer-on-beans",
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
        risk: null
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(body => 
                this.setState({ risk: body }))
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('./riskres');
        // // const body = await response.json();
        // console.log(body)
        return response;
    };

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={props => (
                                <Search {...props} data={props} />
                            )}
                        />
                        <Route
                            path="/home"
                            component={props => (
                                <Dashboard {...props} data={pests} risk={this.state.risk} />
                            )}
                        />
                        <Route
                            path="/crop/:crops"
                            component={props => (
                                <Crop {...props} data={pests} />
                            )}
                        />
                        <Route path="/pest/:pests" component={props => (
                             <Pest {...props} data={pests} />
                        )} />
                        <Route
                            path="/risk"
                            component={() => <Risk {...props} data={pests} />}
                        />
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
