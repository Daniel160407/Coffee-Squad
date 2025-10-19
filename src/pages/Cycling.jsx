import Header from "../components/layout/Header";
import PageHeader from "../components/layout/PageHeader";
import RadarChart from "../components/Chart/ChartForStats";
import BarChart from "../components/Chart/ChartForWeeklyWorkout";
import MyBarChart from "../components/Chart/ChartForWeeklyWorkout";
import MarginLayout from "../components/layout/MarginLayout";
import Footer from "../components/layout/Footer";

const Cycling = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <MarginLayout />
      <MyBarChart />
      <Footer/>
    </>
  );
};

export default Cycling;
