import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";


// eslint-disable-next-line
export default props => {
    return (
        <PieChart width={200} height={200}>
            <Pie
                data={props.data}
                cx={'50%'}
                cy={'50%'}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {props.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={props.colors[index % props.colors.length]} />
                ))}
            </Pie>
        </PieChart>

    )
}