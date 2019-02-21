import React from 'react';
import PestBox from './PestBox';
import Button from './Button.js';
import CropBox from './CropBox';
import Title from './Title';
import { DashWrap } from './styledComponents';

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

    // newfunc = () => {
    //     this.state.riskAndName.forEach(pest => {
    //         return this.setState({...name, ...risk, crop: e.Crop}
    //     }))
    // }

    render() {
        console.log('Dashboard risk', this.state.riskAndName);
        if (this.state.riskAndName === null) {
            return <div>Loading</div>;
        } else {
            return (
                <DashWrap>
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
                </DashWrap>
            );
        }
    }
}

export default Dashboard;
