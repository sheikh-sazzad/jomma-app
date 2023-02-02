import React from "react";
import "./BarChart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "01 Feb 2020", uv: 4000, pv: 2400, amt: 2400 },
  { name: "01 Jun 2020", uv: 3000, pv: 1398, amt: 2210 },
  { name: "01 Oct 2020", uv: 2000, pv: 9800, amt: 2290 },
  { name: "01 Feb 2021", uv: 2780, pv: 3908, amt: 2000 },
  { name: "01 Jun 2021", uv: 1890, pv: 4800, amt: 2181 },
  { name: "01 Oct 2021", uv: 2390, pv: 3800, amt: 2500 },
  { name: "01 Feb 2022", uv: 3490, pv: 4300, amt: 2100 },
  { name: "01 Jun 2022", uv: 2500, pv: 4300, amt: 2100 },
  { name: "01 Oct 2022", uv: 2000, pv: 4300, amt: 2100 },
];

const BarChart = () => {
  return (
    <LineChart className="line-chart" width={500} height={250} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default BarChart;
