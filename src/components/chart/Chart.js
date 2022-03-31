import "./chart.css"
import { BarChart, Bar, ResponsiveContainer} from 'recharts';
import { React, useState } from "react";

export default function Chart({ items, dataKey }) {
  const [item] = useState(items);
  return (
    <div className="charts">
      {item.map((i)=>(
        <div className="chart">
          <div className="top">
            <span className="data">{i.data}</span>
            <span className="title">{i.title}</span>
          </div>
            <ResponsiveContainer width="90%" aspect={4/1}>
              <BarChart data={i.chartData}>
                <Bar type="monotone" dataKey={dataKey} fill="#ff2525" fillOpacity="50%" />
              </BarChart>
            </ResponsiveContainer>
        </div>
      ))}
    </div>
  )
}
/*LineChart, Line, if ({i.type} === "Area") {
            <ResponsiveContainer width="90%" aspect={4/1}>
              <LineChart data={i.chartData}>
                <Line type="monotone" dataKey={dataKey} fill="#ff2525" fillOpacity="50%"/>
              </LineChart>
            </ResponsiveContainer>  
          }
          else{}*/