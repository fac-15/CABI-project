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
            riskAndName: null,
            loading: true
        };
    }
    componentDidMount() {
        // const { data } = this.props.match.params;
        const { country, region } = this.props.location.state;
        console.log(this.props.data);

        this.setState({
            country: country,
            region: region,
            riskAndName: this.props.riskAndName
        });
    }

    render() {
        console.log('Dashboard risk', this.state.riskAndName);
        if (this.state.riskAndName === null) {
            return <div>Loading</div>;
        } else {
            return (
                <div>
                    <Title />
                    <CropBox
                        country={this.state.country}
                        region={this.state.region}
                        className="cropbox"
                        crops={this.state.data}
                    />
                    <PestBox
                        riskAndName={this.state.riskAndName}
                        country={this.state.country}
                    />
                    <Button name="Back" route="/" />
                </div>
            );
        }
    }
}

export default Dashboard;
