import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "./home.css"
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import Pyee from "../../components/pyee/Pyee";
import LSP from "../../components/lsp/LSP";
import { Transform } from "./Transform";

export default function Home() {
  const [value, setValue] = useState();
  const [options, setOptions] = useState("sevenDays")
  const api_url = "http://localhost:3000/application";
  const [apiData, setApi] = useState();
  
  const [userData,setData] = useState();
  const data = (e) => {
    setData(Transform(apiData, e.target.value));  
  }
  
  useEffect(() => {
    axios.get(api_url)
    .then(res => {
      setApi(res.data);
      setData(Transform(apiData,options));
    })
  }, [value]);

  return userData === undefined ? (
    <div className="home">
      <div className="drop">
        <select onChange = {data} > 
          <option value="sevenDays">Last 7 days</option>
          <option value="oneMonth">Last 1 month</option> 
          <option value="threeMonths">Last 3 months</option> 
          <option value="sixMonths">Last 6 months</option>
          <option value="oneYear">Last 1 year</option> 
        </select>
      </div>
      <FeatureInfo isLoading={false}/>
      <Chart isLoading={false} dataKey="Active User"/>
      <div className="homeWidgets">
          <Pyee isLoading={false} dataKey="Active User"/>
          <LSP isLoading={false} />
      </div>
    </div>
  ) : 
  (
    <div className="home">
      <div className="drop">
        <select onChange = {data} >
          <option value="sevenDays">Last 7 days</option> 
          <option value="oneMonth">Last 1 month</option> 
          <option value="threeMonths">Last 3 months</option> 
          <option value="sixMonths">Last 6 months</option>
          <option value="oneYear">Last 1 year</option> 
        </select>
      </div>
      <FeatureInfo items={userData.featureInfo} isLoading={true}/>
      <Chart items={userData.charts} isLoading={true} dataKey="Active User"/>
      <div className="homeWidgets">
          <Pyee items={userData.pieChart} isLoading={true} dataKey="Active User"/>
          <LSP items={userData.Table} isLoading={true} />
      </div>
    </div>
  );
}