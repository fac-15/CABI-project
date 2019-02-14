import React from 'react';
import jsonGhana from '../../factsheets_Ghana.json';
import PestBox from './PestBox';
import Button from './Button.js';
import CropBox from './CropBox';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: '',
            region: '',
            data: {}
        };
    }
    componentDidMount() {
        // const { data } = this.props.match.params;
        const { country, region } = this.props.location.state;
        console.log(this.props.data);

        this.setState({
            country: country,
            region: region
        });
    }
    render() {
        return (
            <div>
                <h1 className="App-Title">Hello Dashboard! Muahahahahaha</h1>
                <CropBox
                    country={this.state.country}
                    region={this.state.region}
                    className="cropbox"
                    crops={this.state.data}
                />
                <PestBox pests={this.props.data} />
                <Button name="Back" route="/" />
            </div>
        );
    }
}

export default Dashboard;
