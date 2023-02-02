import React, { useEffect, useState } from "react";
import Chart from "../Chart/Chart";
import "./Charts.css";

const Charts = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("chart.json")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);
  return (
    <div>
      <div className="search-bar">
        <input
          className="input-field"
          type="text"
          placeholder="Search Stocks"
        />
        <button className="clear-button font-semibold">Clear</button>
      </div>
      <div className="charts-container">
        {charts.map((chart) => (
          <Chart key={chart.id} chart={chart}></Chart>
        ))}
      </div>
    </div>
  );
};

export default Charts;
