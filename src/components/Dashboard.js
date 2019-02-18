import React from 'react';
import PestBox from './PestBox';
import Button from './Button.js';
import CropBox from './CropBox';
import Title from './Title';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: '',
            region: '',
            data: {},
            risk: null
        };
    }
    componentDidMount() {
        // const { data } = this.props.match.params;
        const { country, region } = this.props.location.state;
        console.log(this.props.data);
        const risk = this.props.risk;

        this.setState({
            country: country,
            region: region,
            risk: risk

        });
    }

    render() {
        return (
            <div>
                <Title />
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
