import PageHeader from "../components/layout/PageHeader";
import BarChart from "../components/Chart/ChartForWeeklyWorkout";
import MyBarChart from "../components/Chart/ChartForWeeklyWorkout";
import MarginLayout from "../components/layout/MarginLayout";
import Header from "../components/layout/Header";
import RadarChart from "../components/Chart/ChartForStats";

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
