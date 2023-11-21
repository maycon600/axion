import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const options = {
  responsive: true,
  plugins: {
    ChartDataLabels,
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Chart.js Pie Chart",
    },
    datalabels: {
      color: "#fff",
      font: {
        weight: "bold",
        size: 16,
      },
    },
  },
};

export const data = {
  labels: ["Instagram", "YouTube", "Facebook", "TikTok"],
  datasets: [
    {
      label: "Número de Votos",
      data: [20, 20, 10, 10, 10, 10, 10, 10],
      backgroundColor: [
        "#165DFF",
        "#14C9C9",
        "#F7BA1E",
        "#722ED1",
        "#3491FA",
        "#D91AD9",
        "#FF7D00",
        "#7B61FF",
      ],
      borderWidth: 0,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} options={options} />;
}
