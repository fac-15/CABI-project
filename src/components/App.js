import React, { Component } from "react";
require("babel-polyfill");
import jasonData from "../../factsheets_Ghana.json";
const arr1 = jasonData.Factsheets.filter(d => d.PAN == 20157800393);

class App extends Component {
  state = {
    data: null,
    json: []
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch("./express_backend");
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
        </header>
        <p> {jasonData.Factsheets[1].PAN}</p>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
