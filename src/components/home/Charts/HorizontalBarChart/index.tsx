import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = ["SP", "RJ", "GO", "MG", "SC"];

export const data = {
  labels: ["SP", "RJ", "GO", "MG", "SC"],
  datasets: [
    {
      label: "Positivos",
      backgroundColor: "#22C24F",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      label: "Negativos",
      backgroundColor: "#E73F3F",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
  ],
};

export function HorizontalBarChart() {
  return <Bar options={options} data={data} />;
}
