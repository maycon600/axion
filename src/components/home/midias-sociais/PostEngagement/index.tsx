import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function PostEngagement (){

  const data = [
    {
      name: <img src="https://picsum.photos/200/300" alt="" />,
      likes: 4000,
      comments: 2400,
      sentiment: 2400,
      shares: 1620,
    },
    {
      name: 'Page B',
      likes: 3000,
      comments: 1398,
      sentiment: 2210,
      shares: 800,
    },
    {
      name: 'Page C',
      likes: 2000,
      comments: 9800,
      sentiment: 2290,
      shares: 1250,
    },
    {
      name: 'Page D',
      likes: 2780,
      comments: 3908,
      sentiment: 2000,
      shares: 250,
    },
    {
      name: 'Page E',
      likes: 1890,
      comments: 4800,
      sentiment: 2181,
      shares: 890,
    },
    {
      name: 'Page F',
      likes: 2390,
      comments: 3800,
      sentiment: 2500,
      shares: 621,
    },
    {
      name: 'Page G',
      likes: 3490,
      comments: 4300,
      sentiment: 2100,
      shares: 200,
    },
  ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} tick={<img src='https://picsum.photos/200/300' style={{ width: '100px', height: '100px' }} />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="shares" stackId="a" fill="#FFD712" barSize={25} />
          <Bar dataKey="sentiment" stackId="a" fill="#2F5CFC" />
          <Bar dataKey="comments" stackId="a" fill="#DA3252" />
          <Bar dataKey="likes" stackId="a" fill="#22C24F" />
        </BarChart>
      </ResponsiveContainer>
    );
}