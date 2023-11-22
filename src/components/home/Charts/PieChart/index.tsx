import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const footeraa = (tooltipItems: any) => {  
  let total = 0
  let currentValue = 0
  tooltipItems.forEach(function (tooltipItem: any) {
    let sum = 0;
    tooltipItem.dataset.data.forEach((data: any) => {
      sum += data;
    });
    total = sum;
    currentValue = tooltipItem.parsed;
  });
  return (currentValue * 100) / total + "%";
};

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
      formatter: (value: any, ctx: any) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map((data: any) => {
          sum += data;
        });
        let percentage = ((value * 100) / sum).toFixed(2) + "%";
        if ((value * 100) / sum < 10) {
          return "";
        }
        return percentage;
      },
      color: "#fff",
      font: {
        weight: "bold",
        size: 13,
      },
    },
    tooltip: {
      callbacks: {
        footer: footeraa,
      },
    },
  },
};

export const data = {
  labels: ["Instagram", "YouTube", "Facebook", "TikTok"],
  datasets: [
    {
      label: "Número de Votos",
      data: [40, 40, 20, 20, 20, 20, 20, 20],
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
