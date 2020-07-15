import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PieChartComponent from './Piechart/PiechartComponent';
import GraphComponent from './Graph/GraphComponent';
import { userActions } from '../../_actions/user.actions';
import './dashboard.css';

const DashboardComponent = (props) => {
  const user = useSelector((state) => state.authentication.user);
  const graphData = JSON.parse(localStorage.getItem('graphData'));
  const [incoming, setIncoming] = useState(props.items ? props.items.incoming : graphData.incoming);
  const [outgoing, setOutgoing] = useState(props.items ? props.items.outgoing : graphData.outgoing);
  const [topQtyData, setTopQtyData] = useState(props.items ? props.items.topQuantity : graphData.topQuantity);
  const [topValData, setTopValData] = useState(props.items ? props.items.topValue : graphData.topValue);

  const dispatch = useDispatch();
  const checkdata = () => {
    console.log(graphData);
  };

  return (
    <div className="dashContainer">

      <div className="businessHeader">
        <p>Business Name:  Shoe Trading Inc</p>
        <p>User: Otis Otis</p>
      </div>
      <div className="businessHeader">
        <button onClick={() => checkdata()}>View all uploads</button>
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
            <p className="content">{incoming}</p>
          </div>
          <div className="items">
            <p className="itemTitle">Outgoing Amount:</p>
            <p className="content">
              {' '}
              {outgoing}
            </p>
          </div>
        </div>
      </div>
      <div className="graphs">
        <ComposedChart
          width={600}
          height={400}
          data={topValData}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="Item" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Value" barSize={20} fill="#413ea0" />
        </ComposedChart>
        <ComposedChart
          width={650}
          height={400}
          data={topQtyData}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="Item" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Quantity" barSize={35} fill="#413ea0" />
        </ComposedChart>
      </div>
    </div>
  );
};
const mapStateToProps = ({ uploadCsv }) => ({ items: uploadCsv.items });
export default connect(mapStateToProps, {})(DashboardComponent);
