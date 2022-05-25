import { React, useEffect, useState } from 'react';
import "./transactions.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SearchMenu from '../../components/searchMenu/SearchMenu';
import AdvancedSearch from '../../components/advancedSearch/AdvancedSearch';
import TransTable from '../../components/transTable/TransTable';
import axios from 'axios';

export default function Transactions ()  {
  const api_url = "http://localhost:3000/transactions";
  const [tloading, setTloading] = useState(true);
  const [userTdata, setTdata] = useState([]);
  const [errt, seterrt] = useState(false);
  
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
    });
  }, [tloading]);
  return errt ? (
    <>
    <div className="error">
        Unable to connect to the server try after sometime.
    </div>
    </>
  ):(
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="transactions">
            <SearchMenu />
            <AdvancedSearch />
            <TransTable items={userTdata} isLoading={tloading}/>
          </div>
        </div>
      </div>
    </>        
  )
}