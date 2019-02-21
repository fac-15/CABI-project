require('babel-polyfill');
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';
import Dashboard from './Dashboard';
import Risk from './Risk';
import Form from './Form';
import Crop from './Crop';
import Pest from './Pest';

class Routes extends Component {
    state = {
        data: null,
        panGhana: null,
        name: '',
        riskAndName: null
    };

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={props => <Search {...props} />}
                        />
                        <Route
                            path="/home"
                            component={props => <Dashboard {...props} />}
                        />
                        <Route
                            path="/:country/:region/:crops"
                            component={props => <Crop {...props} />}
                        />
                        <Route
                            path="/pest/:pests"
                            component={props => <Pest {...props} />}
                        />
                        <Route
                            path="/risk"
                            component={() => <Risk {...props} />}
                        />
                        <Route path="/form" component={Form} />
                        <Route component={404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
