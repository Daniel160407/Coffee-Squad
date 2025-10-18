import { useState } from "react";
import Header from "../components/header/Header";
import PageHeader from "../components/layout/PageHeader";
import MarginLayout from "../components/MarginLayout/MarginLayout";
import RadarChart from "../components/Chart/ChartForStats";
import BarChart from "../components/Chart/ChartForWeeklyWorkout";
import MyBarChart from "../components/Chart/ChartForWeeklyWorkout";

const Cycling = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <MarginLayout />
      <RadarChart />
      <BarChart />
      <MyBarChart />
    </>
  );
};

export default Cycling;
