import Chart from "chart.js/auto";
import { useState, useEffect } from "react";

export function FollowerData() {
  const [myChart, setMyChart] = useState<any>(null);

  const data = [
    { year: 2013, count: 40 },
    { year: 2014, count: 30 },
    { year: 2015, count: 30 },
    { year: 2016, count: 20 },
  ];

  useEffect(() => {
    // Check if myChart exists and destroy it if it does
    if (myChart) {
      myChart.destroy();
    }

    const labels = data.map((d) => d.year);

    const sliceThickness = {
      id: "sliceThickness",
      beforeDraw(chart: any, plugins: any) {
        console.log(chart.getDatasetMeta(0).data[0].outerRadius);
        const chart_width = chart.getDatasetMeta(0).data[0].outerRadius;
        let sliceThicknessPixels = [
          456 * (1 - data[0].count / 100),
          456 * (1 - data[1].count / 100),
          456 * (1 - data[2].count / 100),
          456 * (1 - data[3].count / 100),
        ];
        sliceThicknessPixels.forEach((d, i) => {
          chart.getDatasetMeta(0).data[i].outerRadius =
            (chart.chartArea.width / (window.innerWidth <= 425 ? d * 2 : d)) *
            100;
        });
      },
    };

    const newChart = new Chart("myChart", {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Dataset 1",
            data: data.map((d) => d.count),
            backgroundColor: ["#2F5CFC", "#0A2BA0", "#000411", "#E5E8F0"],
          },
        ],
      },
      options: {
        cutout: "36%",
        maintainAspectRatio: false,
        offset: 10,
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: "#fff",
          },
        },
      },
      plugins: [sliceThickness],
    });

    setMyChart(newChart);

    // Clean up the chart on component unmount
    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <canvas id="myChart" />
    </div>
  );
}
