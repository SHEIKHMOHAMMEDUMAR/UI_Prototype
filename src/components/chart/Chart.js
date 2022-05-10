import "./chart.css"
import { BarChart, Area, AreaChart, Bar, ResponsiveContainer} from 'recharts';
import { React } from "react";
import ContentLoader from "react-content-loader"

export default function Chart({ items, dataKey, isLoading }) {
  const selChart = ({value, chartData, dataKey, color}) =>{
    if(value === "Bar"){
      return (
        <ResponsiveContainer width="90%" aspect={4/1}>
          <BarChart data={chartData}>
            <Bar type="monotone" dataKey={dataKey} stroke={color} fill={color} fillOpacity="50%" />
          </BarChart>
        </ResponsiveContainer>
      )
    }
    else{
      return (
        <ResponsiveContainer width="90%" aspect={4/1}>
          <AreaChart data={chartData}>
            <Area type="monotone" dot = {{stroke: {color}, strokeWidth: 2 }} dataKey={dataKey} stroke={color} fill={color} fillOpacity="50%"/>
          </AreaChart>
        </ResponsiveContainer> 
      )
    }
  }
  return isLoading ? (
    <div className="charts">
      {items.map((i)=>(
        <div className="chart">
          <div className="top">
            <span className="data_c">{i.data}</span>
            <span className="title_c">{i.title}</span>
          </div>
          <div className="chartt">
            {selChart({value : i.type, chartData : i.chartData, dataKey : dataKey, color: i.color})}
          </div>
        </div>
      ))}
    </div>
  ) :
  (
    <div className="charts">
        <div className="chart">
          <div> <ContentLoader style={{width: "50%"}} viewBox="0 0 380 200">
            <rect x="80" y="37" rx="4" ry="4" width="500" height="13" />
            <rect x="80" y="60" rx="4" ry="3" width="500" height="10" />
            <rect x="80" y="80" rx="3" ry="3" width="250" height="10" />
            <rect x="80" y="100" rx="3" ry="3" width="250" height="10" />
            <rect x="80" y="120" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>
          </div>
        </div>
    </div>
  )
}