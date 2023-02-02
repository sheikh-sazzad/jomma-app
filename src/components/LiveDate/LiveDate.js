import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "./LiveDate.css";

function LiveDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dateString = date.toLocaleDateString();
  const [month, day, year] = dateString.split("/");

  return (
    <div>
      <p>
        <FontAwesomeIcon
          className="dashboard-icon"
          icon={faCalendarDays}
        ></FontAwesomeIcon>{" "}
        {month}-{day}-{year}
      </p>
    </div>
  );
}

export default LiveDate;
