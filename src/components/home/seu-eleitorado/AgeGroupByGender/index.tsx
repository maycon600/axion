import { useId } from "react";
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
    Homens: 590,
    Mulheres: 800,
  },
  {
    name: "19-29",
    Homens: 868,
    Mulheres: 967,
  },
  {
    name: "30-40",
    Homens: 1397,
    Mulheres: 1098,
  },
  {
    name: "41-50",
    Homens: 1480,
    Mulheres: 1200,
  },
  {
    name: "51-60",
    Homens: 1520,
    Mulheres: 1108,
  },
  {
    name: "61-70",
    Homens: 1400,
    Mulheres: 680,
  },
  {
    name: "+70",
    Homens: 250,
    Mulheres: 500,
  },
];

export function AgeGroupByGender() {
  const chartId = useId();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        id={chartId}
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
        <Bar dataKey="Homens" barSize={10} fill="#22C24F" />
        <Bar dataKey="Mulheres" barSize={10} fill="#E73F3F" />
      </BarChart>
    </ResponsiveContainer>
  );
}
