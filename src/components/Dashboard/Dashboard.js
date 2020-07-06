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
            <div className="productInfo">
                <div className="items">
                    <p className="itemTitle">Top Product:</p>
                    <p className="content"> Shoes</p>
                </div>
                <div className="items">
                    <p className="itemTitle">Incoming Amount:</p>
                    <p className="content"> 2,000</p>
                </div>
                <div className="items">
                    <p className="itemTitle">Outgoing Amount:</p>
                    <p className="content"> 1,000</p>
                </div>
            </div>
            </div>
            <div className="graphs">
                <GraphComponent/>
                <GraphComponent/>

            </div>
        </div>
     );
}
 
export default DashboardComponent;