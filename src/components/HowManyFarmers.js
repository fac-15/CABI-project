import React from 'react';
import { Form, ClickMe } from './styledComponents';

class HowManyFarmers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: 'panel' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            visible: this.state.visible == 'panel' ? 'panel visible' : 'panel'
        });
    }

    render() {
        return (
            <div>
                <div className={this.state.visible}>
                    <Form
                        src="https://docs.google.com/forms/d/e/1FAIpQLScFlWkjii83RviOdBI23NCD1ROWygM54tLAth6geKpNau-L1g/viewform?embedded=true"
                        width="640"
                        height="914"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                    >
                        Loading...
                    </Form>
                </div>
                <ClickMe onClick={this.handleClick}>
                    {!this.state.visible == 'panel' ? 'Slide up' : 'Click me!'}
                </ClickMe>
            </div>
        );
    }
}

export default HowManyFarmers;
