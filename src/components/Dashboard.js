import React from 'react';
import jsonGhana from '../../factsheets_Ghana.json';
import PestBox from './PestBox';

const Dashboard = props => (
    <div>
        <h1 className="App-Title">Hello Dashboard! Muahahahahaha</h1>
        <PestBox cropName={props.crop} pests={props.data} />
    </div>
);

export default Dashboard;
