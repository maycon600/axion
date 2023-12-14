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

interface Props {
  data: {}[];
  conf: {
    dataKey: string;
    color: string;
  }[];
}

export function AgeGroupByGender({ data, conf }: Props) {
  const chartId = useId();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        id={chartId}
        layout="vertical"
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
        {conf.map((item) => {
          return <Bar dataKey={item.dataKey} barSize={10} fill={item.color} />;
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}
