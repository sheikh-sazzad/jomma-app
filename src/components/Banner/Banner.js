import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBangladeshiTakaSign,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container text-white">
      <div className="mb-10">
        <h5 className="text-xl">since last week</h5>
        <h3 className="text-2xl font-bold">Portfolio Value</h3>
        <h2 className="text-3xl ml-5">
          <FontAwesomeIcon icon={faBangladeshiTakaSign}></FontAwesomeIcon> 0.00{" "}
          <FontAwesomeIcon
            className="arrow-icon"
            icon={faArrowUp}
          ></FontAwesomeIcon>
        </h2>
      </div>
      <div className="banner-bottom">
        <div>
          <h5 className="text-xl">BO A/C Balance(Cash)</h5>
          <h3 className="text-2xl font-semibold ml-5">
            <FontAwesomeIcon icon={faBangladeshiTakaSign}></FontAwesomeIcon>{" "}
            0.00
          </h3>
        </div>
        <div>
          <button className="banner-button font-bold text-xl p-3 mr-5">
            Prefund Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
