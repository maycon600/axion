import React, { PureComponent } from "react";
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
    gender: "Mulheres",
    value: 3000,
    color: '#f00',
  },
  {
    gender: "Homens",
    value: 4000,
    color: '#00f',
  },
];

export default class VotersByGender extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-bar-chart-35meb";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Cell />
          <XAxis dataKey="gender" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={'color'} />;
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
