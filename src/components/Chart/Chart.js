import React from "react";
import "./Chart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import BarChart from "../BarChart/BarChart";

const Chart = ({ chart }) => {
  return (
    <div className="chart-container">
      <div>
        <div>
          <h3 className="name text-xl font-bold mb-5">{chart.name}</h3>
        </div>
        <div className="unit">
          <p className="font-semibold">Unit/s</p>
          <span className="data font-bold">{chart.unit}</span>
        </div>
        <div className="port-folio">
          <p className="font-semibold">Portfolio Value (TK) </p>
          <span className="data font-bold">{chart.portfolio}</span>
        </div>
        <div className="gain">
          <p className="font-semibold">Gain/Loss (TK) </p>
          <span className="number-data font-bold">{chart.gain}</span>
        </div>
        <h4 className="percentage font-bold number-data mt-5">
          {chart.percentage}{" "}
          <FontAwesomeIcon
            className="dashboard-icon font-bold"
            icon={faArrowUp}
          ></FontAwesomeIcon>
        </h4>
      </div>
      <div className="bar-chart">
        <BarChart></BarChart>
      </div>
    </div>
  );
};

export default Chart;
