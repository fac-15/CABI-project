import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.iframe`
    margin: 0 auto;
    max-width: 100%;
`;

const ClickMe = styled.button`
    position: fixed;
    bottom: 0em;
    left: -1em;
    width: 20%;
    background: #368729;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    padding: 0.5em;
    color: white;
    text-transform: uppercase;
`;

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
                        // className="form"
                        src="https://docs.google.com/forms/d/e/1FAIpQLScFlWkjii83RviOdBI23NCD1ROWygM54tLAth6geKpNau-L1g/viewform?embedded=true"
                        width="640"
                        height="620"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                    >
                        Loading...
                    </Form>
                </div>
                <ClickMe className="clickMe" onClick={this.handleClick}>
                    {!this.state.visible == 'panel' ? 'Slide up' : 'Click me!'}
                </ClickMe>
            </div>
        );
    }
}

export default HowManyFarmers;
