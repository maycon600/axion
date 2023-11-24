import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const footer = (tooltipItems: any) => {
  let total = 0;
  let currentValue = 0;
  tooltipItems.forEach(function (tooltipItem: any) {
    let sum = 0;
    tooltipItem.dataset.data.forEach((data: any) => {
      sum += data;
    });
    total = sum;
    currentValue = tooltipItem.parsed;
  });
  return ((currentValue * 100) / total).toFixed(1) + "%";
};

export const options = {
  responsive: true,
  plugins: {
    ChartDataLabels,
    legend: {
      position: "right" as const,
      labels: {
        usePointStyle: true
      }
    },
    datalabels: {
      formatter: (value: any, ctx: any) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map((data: any) => {
          sum += data;
        });
        let percentage = ((value * 100) / sum).toFixed(1) + "%";
        if ((value * 100) / sum < 10) {
          return "";
        }
        return percentage;
      },
      color: "#fff",
      font: {
        weight: "bold",
        size: 12,
      },
    },
    tooltip: {
      callbacks: {
        footer: footer,
      },
    },
  },
};

export const data = {
  labels: [
    "Ensino Médio Incompleto",
    "Não Informado",
    "Ensino Médio Completo",
    "Ensino Fundamental Completo",
    "Analfabeto",
    "Sabe Ler e Escrever",
    "Ensino Fundamental Incompleto",
  ],
  datasets: [
    {
      label: "Número de eleitores",
      data: [100, 100, 100, 100, 100, 100, 100],
      backgroundColor: [
        "#E7298A",
        "#1B9E77",
        "#A6761D",
        "#66A61E",
        "#D95F02",
        "#66A61E",
        "#666666",
      ],
      borderWidth: 5,
      borderColor: "#fff",
    },
  ],
};

export function VotersInfo() {
  return <Pie data={data} options={options} />;
}
