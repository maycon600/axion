import React, { PureComponent, useEffect, useState, useId } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "16:00",
    uv: 4000,
  },
  {
    name: "17:00",
    uv: 3000,
  },
  {
    name: "21:00",
    uv: 2000,
  },
  {
    name: "08:00",
    uv: 2780,
  },
  {
    name: "10:00",
    uv: 1890,
  },
];

export function VotersActive() {
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
        <Legend />
        <Bar dataKey="uv" barSize={10} fill="#22C24F" />
      </BarChart>
    </ResponsiveContainer>
  );
}
