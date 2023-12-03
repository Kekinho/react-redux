import React from "react";
import Card from "../../card/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default (props) => {
  return (
    <Card title="Chart" grey>
      <LineChart
        width={400}
        height={200}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {props.dataKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={props.colors[index % props.colors.length]}
          />
        ))}
      </LineChart>
    </Card>
  );
};
