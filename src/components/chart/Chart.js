import "./chart.css"
import { BarChart,Line,LineChart, Bar, ResponsiveContainer} from 'recharts';
import { React } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function Chart({ items, dataKey, isLoading }) {
  const selChart = ({value, chartData, dataKey}) =>{
    if(value === "Bar"){
      return (
        <ResponsiveContainer width="90%" aspect={4/1}>
          <BarChart data={chartData}>
            <Bar type="monotone" dataKey={dataKey} fill="#ff2525" fillOpacity="50%" />
          </BarChart>
        </ResponsiveContainer>
      )
    }
    else{
      return (
        <ResponsiveContainer width="90%" aspect={4/1}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey={dataKey} fill="#ff2525" fillOpacity="50%"/>
          </LineChart>
        </ResponsiveContainer> 
      )
    }
  }
  return isLoading ? (
    <div className="charts">
      {items.map((i)=>(
        <div className="chart">
          <div className="top">
            <span className="data">{i.data}</span>
            <span className="title">{i.title}</span>
          </div>
          {selChart({value : i.type, chartData : i.chartData, dataKey : dataKey})}
        </div>
      ))}
    </div>
  ) :
  (
    <div className="charts">
      {items.map((i)=>(
        <div className="chart">
          <div className="top">
            <span className="title">{i.title}</span>
          </div>
          <div className="circle"><CircularProgress size={50} /></div>
        </div>
      ))}
    </div>
  )
}