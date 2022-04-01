import Drop from "../../components/drop/Drop"
import "./home.css"
import { React, useState } from "react";
import { userData } from "../../data";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import Pyee from "../../components/pyee/Pyee";
import LSP from "../../components/lsp/LSP";

const options = [
    {
      label: "Last 7 days",
      value : "7 days",
    },
    {
      label: "Last 1 month",
      value : "1 month",
    },
    {
      label: "Last 3 months",
      value : "3 months",
    },
    {
      label: "Last 6 months",
      value : "6 months",
    },
    {
      label: "Last 1 year",
      value : "1 year",
    },
  ];

const Home = ()  =>{
    const [selected, setselected] = useState(options[0]);
    return (
        <div className="home">
            <Drop selected={selected} setselected={setselected} options={options} />
            <FeatureInfo items={userData.featureInfo} />
            <Chart items={userData.charts} dataKey="Active User"/>
            <div className="homeWidgets">
                <Pyee items={userData.pieChart} dataKey="Active User"/>
                <LSP items={userData.Table}/>
            </div>
        </div>
    )
}
export default Home