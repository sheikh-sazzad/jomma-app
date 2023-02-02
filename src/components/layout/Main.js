import React from "react";
import Banner from "../Banner/Banner";
import Charts from "../Charts/Charts";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Dashboard></Dashboard>
      <Charts></Charts>
    </div>
  );
};

export default Main;
