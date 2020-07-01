import React from 'react';
import PieChartComponent from '../Dashboard/Piechart/PiechartComponent';
import GraphComponent from '../Dashboard/Graph/GraphComponent';
import './dashboard.css';

const DashboardComponent = () => {
    return ( 
        <div className="dashContainer">
            <div className="businessHeader">
                <p>Business Name:  Shoe Trading Inc</p>
                <p>User: Otis Otis</p>
            </div>
            <div className="graphs">
                <PieChartComponent/>
                <p>Another one</p>
            </div>
            <div className="graphs">
                <GraphComponent/>
                <GraphComponent/>
            </div>
        </div>
     );
}
 
export default DashboardComponent;