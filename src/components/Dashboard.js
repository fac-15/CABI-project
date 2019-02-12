import React from 'react';
import jsonGhana from '../../factsheets_Ghana.json';
import PestBox from './PestBox';
import Button from './Button.js';
import CropBox from './CropBox'

const Dashboard = props => (
    <div>
        <h1 className="App-Title">Hello Dashboard! Muahahahahaha</h1>
        <CropBox className="cropbox" crops={props.data} />
        <PestBox pests={props.data} />
        <Button name="Back" route="/" />
    </div>
);

export default Dashboard;
