import React, { useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PieChartComponent from './Piechart/PiechartComponent';
import './dashboard.css';

const DashboardComponent = (props) => {
  const graphData = JSON.parse(localStorage.getItem('graphData')) ? JSON.parse(localStorage.getItem('graphData')) : {};
  const [incoming, setIncoming] = useState(props.items ? props.items.incoming : graphData.incoming);
  const [outgoing, setOutgoing] = useState(props.items ? props.items.outgoing : graphData.outgoing);
  const [topQtyData, setTopQtyData] = useState(props.items ? props.items.topQuantity : graphData.topQuantity);
  const [topValData, setTopValData] = useState(props.items ? props.items.topValue : graphData.topValue);
  const [topProduct, setTopProduct] = useState(props.items ? props.items.topProduct : graphData.topProduct);
  const [currentUser, setcurrentUser] = useState(props.items ? props.items.currentUser : graphData.currentUser);
  const [businessName, setBusinessName] = useState(props.items ? props.items.businessName : graphData.businessName);

  return (
    <div className="dashContainer">

      <div className="businessHeader">
        <p>
          Business Name:
          {businessName}
        </p>
        <p>
          User:
          {' '}
          {currentUser}
        </p>
      </div>
      <div className="businessHeader" />
      <div className="graphs">
        <PieChartComponent />
        <div className="productInfo">
          <div className="items">
            <p className="itemTitle">Top Product:</p>
            <p className="content">
              {' '}
              {topProduct}
            </p>
          </div>
          <div className="items">
            <p className="itemTitle">Incoming Amount(KSHS):</p>
            <p className="content">{incoming}</p>
          </div>
          <div className="items">
            <p className="itemTitle">Outgoing Amount(KSHS):</p>
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
