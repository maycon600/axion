import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "16-18",
    uv: 590,
    pv: 800,
  },
  {
    name: "19-29",
    uv: 868,
    pv: 967,
  },
  {
    name: "30-40",
    uv: 1397,
    pv: 1098,
  },
  {
    name: "41-50",
    uv: 1480,
    pv: 1200,
  },
  {
    name: "51-60",
    uv: 1520,
    pv: 1108,
  },
  {
    name: "61-70",
    uv: 1400,
    pv: 680,
  },
  {
    name: "+70",
    uv: 250,
    pv: 500,
  },
];

export function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" barSize={10} fill="#22C24F" />
        <Bar dataKey="uv" barSize={10} fill="#E73F3F" />
      </BarChart>
    </ResponsiveContainer>
  );
}
