import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./LineChart.module.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function LineChartComponent() {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Total Rides",
        data: [65, 59, 50, 80, 81, 56, 55, 77],
        fill: false,
        borderColor: "#23cefdb3",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Months",
        },
      },
      y: {
        min: 40,
        max: 90,
        ticks: {
          stepSize: 10,
        },
        title: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} className={classes.lineChart} />
    </div>
  );
}
