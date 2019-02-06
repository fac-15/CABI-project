import React, { Component } from 'react';
import jsonGhana from '../../factsheets_Ghana.json';
require('babel-polyfill');

class App extends Component {
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

        if (response.status === 200) {
            throw Error(body.message);
        }
        return body;
    };

    render() {
        return (
            <div className="App">
                <header className="App-Header">
                    <h1 className="App-Title">Hello World</h1>

                    {jsonGhana.Factsheets.map(i => {
                        if (i.PAN) return <p> {i.PAN} </p>;
                    })}
                </header>
                <p className="App-intro">{this.state.data}</p>
            </div>
        );
    }
}

export default App;
