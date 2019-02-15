import React, { Component } from 'react';
// import jsonGhana from '../../factsheets_Ghana.json';
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
        name: 'Busseloa',
        risk: 1,
        crop: 'Bean'
    },
    {
        name: 'Fall armyworm',
        risk: 2,
        crop: 'Tomato'
    },
    {
        name: 'Busseloa',
        risk: 3,
        crop: 'Maize'
    },
    {
        name: 'Busseloa',
        risk: 2,
        crop: 'Tomato'
    }
];

class Routes extends Component {
    state = {
        data: null,
        panGhana: null
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('./express_backend');
        const body = await response.json();
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
                                <Dashboard {...props} data={pests} />
                            )}
                        />
                        <Route
                            path="/crop/:crops"
                            component={props => (
                                <Crop {...props} data={pests} />
                            )}
                        />
                        <Route path="/pest" component={Pest} />
                        <Route
                            path="/risk"
                            component={() => <Risk data={pests} />}
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
