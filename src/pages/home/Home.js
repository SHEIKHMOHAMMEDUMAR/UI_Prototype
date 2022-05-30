import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "./home.css"
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import Pyee from "../../components/pyee/Pyee";
import LSP from "../../components/lsp/LSP";
import { Transform } from "./Transform";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home () {

  const api_url = "http://localhost:3000/application";
  const [apiData, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setData] = useState([]);
  const [errr, setError] = useState(false);
  const [errM, setErrM] = useState("");

  const updatedFilterData = (e) => {
    setData(Transform(apiData, e.target.value));  
  }
  
  useEffect(() => {
    axios.get(api_url)
    .then( res => {
      if(res.status === 200){
        setError(false);
        setApi(res.data);
        setLoading(false);
        setData(Transform(apiData, "sevenDays"));
      }
    })
    .catch( err => {
      setError(true);
      setErrM(err.message);
    });
  }, [loading]);

  return errr ? (
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="error">
            {errM}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <div className="drop">
            <select onChange = {updatedFilterData} className="filter">
              <option value="sevenDays">Last 7 days</option>
              <option value="oneMonth">Last 1 month</option> 
              <option value="threeMonths">Last 3 months</option> 
              <option value="sixMonths">Last 6 months</option>
              <option value="oneYear">Last 1 year</option> 
            </select>
          </div>
          <FeatureInfo items={userData.featureInfo} isLoading={loading}/>
          <Chart items={userData.charts} isLoading={loading} dataKey="Active User"/>
          <div className="homeWidgets">
            <Pyee items={userData.pieChart} isLoading={loading} dataKey="Active User"/>
            <LSP items={userData.Table} isLoading={loading} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}