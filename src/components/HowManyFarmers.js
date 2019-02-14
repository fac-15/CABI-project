import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';

class HowManyFarmers extends React.Component{
        constructor(props) {
            super(props);
            this.state = { visible: 'panel' };
            this.handleClick = this.handleClick.bind(this)
        }
    
        handleClick () {
            this.setState({ visible: this.state.visible == 'panel'? 'panel visible' : 'panel' });
        }
    
        render() {
            return <div>
                <div className={this.state.visible}>
                    <iframe className="form" src="https://docs.google.com/forms/d/e/1FAIpQLScFlWkjii83RviOdBI23NCD1ROWygM54tLAth6geKpNau-L1g/viewform?embedded=true" width="640" height="620" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
                  </div>
                  <button className="clickMe" onClick={this.handleClick}>{!this.state.visible == 'panel' ? 'Slide up' : 'Click me!'}</button>
            </div>
        }
    }
    

export default HowManyFarmers;
