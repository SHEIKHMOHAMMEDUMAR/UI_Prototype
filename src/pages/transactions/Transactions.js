import { React, useEffect, useState } from 'react';
import "./transactions.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
//import SearchMenu from '../../components/searchMenu/SearchMenu';
//import AdvancedSearch from '../../components/advancedSearch/AdvancedSearch';
import TransTable from '../../components/transTable/TransTable';
import axios from 'axios';
import { Download, Search } from '@mui/icons-material';

export default function Transactions ()  {
  const api_url = "https://api-databases.vercel.app/transactions";
  const [tloading, setTloading] = useState(true);
  const [userTdata, setTdata] = useState([]);
  const [errt, seterrt] = useState(false);
  const [errM, seterrM] = useState("");
  const [change, setChange] = useState("");

  useEffect(() => {
    axios.get(api_url)
    .then( res => {
      if(res.status === 200){
        seterrt(false);
        setTdata(res.data);
        setTloading(false);
      }
    })
    .catch( err => {
      seterrt(true);
      seterrM(err.message);
    });
  }, [tloading]);

  const updatedFilterDataa = (e) => {
    setChange(e.target.value);
    if(e.target.value==="all"){
      axios.get(api_url)
      .then( res =>{
        if(res.status === 200){
          setTdata(res.data);
        }
      });
    }
    else{
      axios.get(api_url + "?LSP=" + e.target.value)
      .then( res =>{
        if(res.status === 200){
          setTdata(res.data);
        }
      });
    }
  }

  const updatedFilterDatab = (e) => {
    const t = " 00:00:00";
    let a = api_url;
    const f_d = new Date(e.target.value.split(" ")[0]);
    const l_d = new Date(e.target.value.split(" ")[1]);
    if (change !== "all") {
      a += "?LSP="+change;
    }
    else{
      a += "?date=";
      a += (new Date(f_d.getTime())).toISOString().slice(0,10)+t;
    }
    while(f_d<=l_d){
      f_d.setDate(f_d.getDate() + 1);
      a += "&date="+(new Date(f_d.getTime())).toISOString().slice(0,10)+t;
    }
    axios.get(a)
      .then( res =>{
        if(res.status === 200){
          setTdata(res.data);
        }
      });
  }
  
  return errt ? (
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
  ):(
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="transactions">
            <div className='searchMenu'>
              <div className='search'>
                <div className='localsearch'>
                    <Search />
                    <input type="text" placeholder="Search"/>
                </div>
                <a href=" ">Search</a>
              </div>
              <div className='items'>
                <div className="item drop">
                  <select onChange = {updatedFilterDataa} >
                      <option value="all">All Organisations</option>
                      <option value="Amazon">Amazon</option> 
                      <option value="Flipkart">Flipkart</option> 
                      <option value="Myntra">Myntra</option>
                      <option value="Paytm">Paytm</option> 
                  </select>
                </div>
                <div className="item drop">
                  <select onChange = {updatedFilterDatab} >
                      <option value="12-25-2021 01-05-2022">Dec 25,2021 - Jan 5,2022</option>
                      <option value="12-15-2021 12-24-2021">Dec 15,2021 - Dec 24,2021</option> 
                      <option value="12-05-2021 12-14-2021">Dec 5,2021 - Dec 14,2021</option> 
                      <option value="11-25-2021 12-04-2021">Nov 25,2021 - Dec 4,2021</option>
                      <option value="11-15-2021 11-24-2021">Nov 15,2021 - Nov 24,2021</option> 
                  </select>
                </div>
                <div>
                    <a href=" " className="item download">
                        <Download />
                        Download
                    </a>
                </div>
              </div>
            </div>
            <TransTable items={userTdata} isLoading={tloading}/>
          </div>
        </div>
      </div>
    </>        
  )
}