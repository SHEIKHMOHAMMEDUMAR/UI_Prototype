import "./chart.css"
import { BarChart,Line,LineChart, Bar, ResponsiveContainer} from 'recharts';
import { React } from "react";
import ContentLoader from "react-content-loader"

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
          <div className="circle"> <ContentLoader style={{width: "50%"}} viewBox="0 0 380 200">
                    <rect x="80" y="37" rx="4" ry="4" width="500" height="13" />
                    <rect x="80" y="60" rx="4" ry="3" width="500" height="10" />
                    <rect x="80" y="80" rx="3" ry="3" width="250" height="10" />
                    <rect x="80" y="100" rx="3" ry="3" width="250" height="10" />
                    <rect x="80" y="120" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                    </div>
        </div>
      ))}
    </div>
  )
}