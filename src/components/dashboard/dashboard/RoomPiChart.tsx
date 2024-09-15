import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Define your data and colors

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

// Define a type for the label props
interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: CustomLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={14}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const RoomPiChart = ({
  totalRooms,
  totalSeat,
  aseat,
  bseat,
}: {
  totalRooms: number;
  totalSeat: number;
  aseat: number;
  bseat: number;
}) => {
  const data = [
    { name: "Group A", value: totalRooms },
    { name: "Group B", value: totalSeat },
    { name: "Group C", value: aseat },
    { name: "Group D", value: bseat },
  ];
  return (
    <div style={{ width: "100%", height: "300px" }}>
      {" "}
      {/* Set a fixed height for the container */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoomPiChart;
