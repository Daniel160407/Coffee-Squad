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

const RadarChart = () => {
  const data = {
    labels: [
      "PMAX",
      "C. ANAEROBICA",
      "P. AEROBICA MAX",
      "POT. CRITICA",
      "ENDURANCE",
    ],
    datasets: [
      {
        label: "Performance",
        data: [56, 68, 68, 70, 33],
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
    <div
      style={{
        backgroundColor: "#0d1117",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "400px" }}>
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default RadarChart;
