import "./pyee.css"
import { React, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend} from 'recharts';
import ContentLoader from "react-content-loader";

export default function Pyee({items, dataKey, isLoading}) {
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
  return isLoading ? (
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
  ) : (
    <div className="piechart">
      <div className="title">{items.title}</div>
      <span><ContentLoader  viewBox="0 0 380 700" speed={1.5}>
            <rect x="40" y="20" rx="2" ry="2" width="360" height="1000" />
            </ContentLoader></span>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart className="piee">
          <Legend className="legend"/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}