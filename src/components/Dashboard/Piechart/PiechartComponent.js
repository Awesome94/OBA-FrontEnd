import React from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Outgoing',
    'Incoming',
  ],
  datasets: [{
    data: [300, 50],
    backgroundColor: [
      '#FF6347',
      '#5cb85c',
    ],
    hoverBackgroundColor: [
      '#FF6347',
      '#5cb85c',
    ],
  }],
};

const PieChartComponent = (props) => (
  <div>
    <Pie data={data} width={300} height={400} />
  </div>
);

const mapStateToProps = ({ uploadCsv }) => ({ items: uploadCsv.fileData });
export default connect(mapStateToProps, {})(PieChartComponent);
