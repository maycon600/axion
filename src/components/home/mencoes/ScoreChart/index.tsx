import Chart from "chart.js/auto";
import { useState, useEffect, useRef } from "react";

interface Props {
  score: number;
}

export function ScoreChart({ score }: Props) {
  let chartWidth: any;
  const canvasRef = useRef(null);
  let gradientSegment: any;

  const [myChart, setMyChart] = useState<any>(null);

  useEffect(() => {
    if (myChart) {
      myChart.destroy();
    }

    const chartBox = document.querySelector(".chartBox");

    const canvas = document.getElementById("myChart") as HTMLCanvasElement;

    let ctx: any;

    if (canvas) {
      ctx = canvas.getContext("2d");
      if (chartBox) {
        chartWidth = chartBox.getBoundingClientRect().width;
      }
      gradientSegment = ctx.createLinearGradient(0, 0, chartWidth, 0);
      gradientSegment.addColorStop(0, "red");
      gradientSegment.addColorStop(0.5, "yellow");
      gradientSegment.addColorStop(1, "green");
    }

    const gaugeChartText = {
      id: "gaugeChartText",
      afterDatasetDraw(chart: any, args: any, pluginOptions: any) {
        const {
          ctx,
          data,
          chartArea: { top, bottom, left, right, width, height },
          scales: { r },
        } = chart;

        ctx.save();
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;
        const score = data.datasets[0].data[0];
        let rating = "";

        if (score < 300) rating = "Ruim";
        if (score >= 300 && score < 700) rating = "Neutro";
        if (score >= 700) rating = "Bom";

        function textLabel(
          text: string,
          x: any,
          y: any,
          fontSize: any,
          textBaseLine: any,
          textAlign: any
        ) {
          ctx.font = `${fontSize}px sans-serif`;
          ctx.fillStyle = "#292D32";
          ctx.textBaseLine = textBaseLine;
          ctx.textAlign = textAlign;
          ctx.fillText(text, x, y);
        }

        textLabel("0", left + 10, yCoor + 13, 15, "top", "left");
        textLabel("1000", right, yCoor + 13, 15, "bottom", "right");
        textLabel(score, xCoor, yCoor - 35, 40, "top", "center");
        textLabel(rating, xCoor, yCoor - 10, 18, "center", "bottom");
      },
    };

    const newChart = new Chart("myChart", {
      type: "doughnut",
      data: {
        labels: ["teste"],
        datasets: [
          {
            label: "Quantidade",
            data: [score, score - 1000],
            backgroundColor: [gradientSegment, "rgba(0, 0, 0, 0.2)"],
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        responsive: true,
        cutout: "80%",
        circumference: 180,
        rotation: 270,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
          datalabels: {
            color: ["#fff", "#fff", "#fff", "#000"],
          },
        },
      },
      plugins: [gaugeChartText],
    });

    setMyChart(newChart);

    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [score]);

  return (
    <div className="chartBox">
      <canvas
        ref={canvasRef}
        id="myChart"
        style={{ width: "30%", height: "30%" }}
      />
    </div>
  );
}
