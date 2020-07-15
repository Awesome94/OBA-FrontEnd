import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';

const PieChartComponent = (props) => {
  const graphData = JSON.parse(localStorage.getItem('graphData'));
  const [incoming, setIncoming] = useState(props.items ? props.items.incoming : graphData.incoming);
  const [outgoing, setOutgoing] = useState(props.items ? props.items.outgoing : graphData.outgoing);

  const data = {
    labels: [
      'Outgoing Amount',
      'Incoming Amount',
    ],
    datasets: [{
      data: [outgoing, incoming],
      backgroundColor: [
        '#FF6384',
        '#5cb85c',
      ],
      hoverBackgroundColor: [
        '#FF6347',
        '#5cb85c',
      ],
    }],
  };

  return (
    <div>
      <Pie data={data} width={300} height={400} />
    </div>
  );
};
const mapStateToProps = ({ uploadCsv }) => ({ items: uploadCsv.items });
export default connect(mapStateToProps, {})(PieChartComponent);
