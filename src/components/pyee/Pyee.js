import "./pyee.css"
import { React, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend} from 'recharts';

export default function Pyee({items, dataKey}) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  const renderActiveShape = (props) => {
    const {cx,cy,innerRadius,outerRadius,startAngle,endAngle,fill} = props;
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" className="data">
          {items.data}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };
  const [activeIndex] = useState(0);
  return (
    <div className="piechart">
      <span className="title">{items.title}</span>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart className="pie">
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={items.chartData}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey={dataKey}
            >
              {(items.chartData).map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie>
          <Legend className="legend"/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}