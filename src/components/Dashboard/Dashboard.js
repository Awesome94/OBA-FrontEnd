import React, {useEffect, useState} from 'react';
import PieChartComponent from '../Dashboard/Piechart/PiechartComponent';
import GraphComponent from '../Dashboard/Graph/GraphComponent';
import {userActions} from '../../_actions/user.actions';
import { useDispatch, connect, useSelector } from "react-redux";
import './dashboard.css';

const DashboardComponent = () => {
    const topQuantity = useSelector(state => state.topQuantity)
    const topQuality = useSelector(state => state.topQuality)
    const user = useSelector(state=>state.authentication.user)
    const dispatch = useDispatch();
    const [viewAll, setViewAll] = useState(false)

    useEffect(() => {
        dispatch(userActions.getAllTopQuantity());
        dispatch(userActions.getAllTopQuality());
        }, []);

    return ( 
        <div className="dashContainer">
            <div className="businessHeader">
                <p>Business Name:  Shoe Trading Inc</p>
                <p>User: Otis Otis</p>
            </div>
            <div className="businessHeader">
                <button>View all uploads</button>
            </div>
            <div className="graphs">
                <PieChartComponent />
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