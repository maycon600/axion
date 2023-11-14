import { windowWidth } from "@/utils/mobile";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export function LineChartComponent() {
  const [width, setWidth] = useState(600);

  let isWindowAbove1000 = !windowWidth(1000);

  useEffect(() => {
    if (isWindowAbove1000) {
      setWidth(600);
    } else {
      setWidth(300);
    }
  });

  const data = [
    { name: "Page A", uv: 400, pv: 526, amt: 2400 },
    { name: "Page B", uv: 300, pv: 412, amt: 2400 },
    { name: "Page C", uv: 320, pv: 390, amt: 2400 },
    { name: "Page D", uv: 250, pv: 255, amt: 2400 },
    { name: "Page E", uv: 450, pv: 342, amt: 2400 },
  ];

  return (
    <LineChart
      width={width}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#78b712" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}
