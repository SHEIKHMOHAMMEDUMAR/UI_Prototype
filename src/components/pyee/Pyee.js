import "./pyee.css"
import { React, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend} from 'recharts';
import ContentLoader from "react-content-loader";

export default function Pyee({items, dataKey, isLoading}) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#80FF42", "#28BBFF", "#9FC400", "#FE8800", "#C4009F", "#BBFF28"];
  const renderActiveShape = (props) => {
    const {cx,cy,innerRadius,outerRadius,startAngle,endAngle,fill} = props;
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" className="data_p">
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
  return ( isLoading || items === undefined || items.length === 0 ) ? (
    <div className="piechart">
      <span><ContentLoader  viewBox="0 0 380 700" speed={1.5}>
            <rect x="40" y="30" rx="2" ry="2" width="360" height="1000" />
            </ContentLoader></span>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart className="pie">
        </PieChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className="piechart">
      <div className="title_p">{items.title}</div>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart className="pie" width="100%" height="100%" >
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={items.chartData}
            innerRadius={60}
            outerRadius={80}
            cy = {75}
            fill="#8884d8"
            dataKey={dataKey}
            >
            {items.chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend height={1} width={1} layout="vertical" align="center" verticalAlign="middle" iconType="line" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}