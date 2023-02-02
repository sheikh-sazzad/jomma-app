import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollHorizontal } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.css";
import LiveDate from "../LiveDate/LiveDate";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h3 className="dashboard font-bold text-2xl ml-3">
        <FontAwesomeIcon
          className="dashboard-icon"
          icon={faSquarePollHorizontal}
        ></FontAwesomeIcon>{" "}
        Dashboard
      </h3>
      <div className="portfolio mb-10">
        <p className="portfolio-details font-bold">Portfolio Details</p>

        <p className="font-bold">Portfolio Performance</p>
      </div>
      <div className="dashboard-bottom font-bold mb-5">
        <p className="stocks">Stocks</p>
        <p>Bonds</p>
        <p>Mutual Funds</p>
      </div>
      <p className="date font-bold text-2xl">
        <LiveDate></LiveDate>
      </p>
    </div>
  );
};

export default Dashboard;
