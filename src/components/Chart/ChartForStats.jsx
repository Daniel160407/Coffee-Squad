import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

 
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({labels, dataoflabels}) => {
  const chartId = React.useId();

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Performance",
        data: dataoflabels,
        backgroundColor: "rgba(115, 66, 255, 0.3)",
        borderColor: "#7c3aed",
        pointBackgroundColor: "#7c3aed",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#7c3aed",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { color: "#222" },
        grid: { color: "#222" },
        pointLabels: {
          color: "#fff",
          font: { size: 14 },
        },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
      <div className="w-full">
        <Radar
          data={data}
          options={options}
          key={chartId}
          updateMode="resize"
          redraw
        />
      </div>
  );
};

export default RadarChart;
