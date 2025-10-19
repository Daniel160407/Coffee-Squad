import PageHeader from "../components/layout/PageHeader";
import MarginLayout from "../components/MarginLayout/MarginLayout";
import MyBarChart from "../components/Chart/ChartForWeeklyWorkout";
 
import Footer from "../components/Header & footer/footer";
import Header from "../components/Header & footer/header";
 

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
