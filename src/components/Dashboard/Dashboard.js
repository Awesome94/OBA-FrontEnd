import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import PieChartComponent from './Piechart/PiechartComponent';
import GraphComponent from './Graph/GraphComponent';
import { userActions } from '../../_actions/user.actions';
import './dashboard.css';

const DashboardComponent = (props) => {
  const topQuantity = useSelector((state) => state.topQuantity);
  const topQuality = useSelector((state) => state.topQuality);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const [viewAll, setViewAll] = useState(false);
  const [chartValues, setChartValues] = useState({
    incoming: 0,
    outgoing: 0,
  });

  useEffect(() => {
    // dispatch(userActions.getTopByQuantity());
    // dispatch(userActions.getTopByValue());
  }, []);
  const checkdata = () => {
    console.log(props);
    // setChartValues({incoming:items.incoming, outgoing:items.outgoing})
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
            <p className="content"> 2,000</p>
          </div>
          <div className="items">
            <p className="itemTitle">Outgoing Amount:</p>
            <p className="content"> 1,000</p>
          </div>
        </div>
      </div>
      <div className="graphs">
        <GraphComponent />
        <GraphComponent />

      </div>
    </div>
  );
};
const mapStateToProps = ({ uploadCsv }) => ({ items: uploadCsv.items });
export default connect(mapStateToProps, {})(DashboardComponent);
