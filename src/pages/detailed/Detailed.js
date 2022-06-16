import { React, useEffect, useState } from 'react';
import "./detailed.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';
import { ArrowForwardIos, Clear, ContentCopy, Done, Person, PriorityHigh, Settings } from '@mui/icons-material';
import Delements from '../../components/delements/Delements';
import { useLocation } from "react-router-dom";
import ContentLoader from "react-content-loader";

export default function Detailed ()  { 
  
  const location = useLocation();
  const api_url = "https://api-databases.herokuapp.com/detailed";
  const [dloading, setDloading] = useState(true);
  const [userDdata, setDdata] = useState([]);
  const [errd, seterrd] = useState(false);
  const [errD, seterrD] = useState("");
  let v= [{ value: "User info", cond: "gray"}, 
  { value: "BRE", cond: "gray"},
  { value: "Documents", cond: "gray"},
  { value: "Applications", cond: "gray"},
  { value: "Offers", cond: "gray"},
  { value: "Acceptance", cond: "gray"},
  { value: "Repayment", cond: "gray"},
  { value: "Credit Monitoring", cond: "gray"},
  { value: "Disbursement", cond: "gray"}];

  const sbarElements = (value) => {

    if(value === "Approved"){
      for(let i=0;i<v.length;i++){
        v[i].cond = 'green';
      }
    }

    else if(value === "Pending Docs"){
      let ind = 0;
      while(v[ind].value !== 'Documents'){
        v[ind].cond = 'green';
        ind++;
      }
      v[ind].cond = 'yellow'; 
    }

    else if(value === "Rejected"){
      v[0].cond = 'red';
    }

    return (
      <>
        {v.map((it) => (
          <div>
            <Delements v={it}/>
          </div>
        ))}
      </>
    )
  }

  const DStatus = (value) => {
    if (value === 'Approved'){
      return(
        <>
        <Done style={{ color: 'green'}}/>
        DISBURSED
        </>
      )
    }
    if (value === 'Pending Docs'){
      return(
        <>
        <PriorityHigh style={{ color: 'orange'}} />
        INITIATED
        </>
      )
    }
    if (value === 'Rejected'){
      return(
        <>
        <Clear style={{ color: 'red'}} />
        REJECTED
        </>
      )
    }
  } 

  useEffect(() => {
    axios.get(api_url+"?Transaction_ID="+location.state.id)
    .then( res => {
      if(res.status === 200){
        seterrd(false);
        setDdata(res.data);
        setDloading(false);
      }
    })
    .catch( err => {
      seterrd(true);
      seterrD(err.message);
    });
  }, [dloading]);

  if( errd === false && dloading === true ){
    return (
      <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="error">
            <ContentLoader style={{width: "50%"}} viewBox="0 0 380 70">
              <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
              <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>
          </div>
        </div>
      </div>
    </>
    )
  }
  else if( errd === true && dloading === false ){
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="error">
              {errD} undefined
          </div>
        </div>
      </div>
    </>
  }
  else{
    return (
    <>
      <div>
        <Topbar />
        <div className="dcontainer">
          <Sidebar />
          <div className="detailed">
            <div className='bart'>
              <div className='stext'> 
                Transactions
                <ArrowForwardIos style={{ fontSize: "15px", margin: "0px 10px" }}/>
                <div > 
                    Details of {location.state.id} 
                </div>
              </div>
              <div className='sicons'>
                <Settings style={{ fontSize: "30px" }} />
                <Person style={{ fontSize: "30px" }} />
              </div>
            </div>
            <div className='sbar'>
              {sbarElements(userDdata[0].Status)}
            </div>
            <div className='transD'>
              <div className='titleD'>
                <div className='trans'> Transaction ID </div>
                <div className='trans'> Client ID </div>
                <div className='trans'> LSP </div>
                <div className='trans'> Loan Profile </div>
                <div className='trans'> Transaction Status </div>
              </div>
              <div className='contD'>
                <div className='ra'> {userDdata[0].Transaction_ID} <ContentCopy style={{ color: "#71700", marginLeft: "20px", cursor: "pointer" }} /> </div>
                <div className='ra'> {userDdata[0].Client_ID} <ContentCopy style={{ color: "#71700", marginLeft: "20px", cursor: "pointer" }} /> </div>
                <div className='ra'> {userDdata[0].lsp} </div>
                <div className='ra'> {userDdata[0].loan_profile} </div>
                <div className='ra'> {DStatus(userDdata[0].Status)} </div>
              </div>
            </div>
            <div className='userInfo'>
              User Information
            </div>
            <div className='uwrapper'>
              <div className='utitle'>
                <div className='userI'> User ID </div>
                <div className='userI'> User Name </div>
                <div className='userI'> User Category </div>
                <div className='userI'> Mobile Number </div>
                <div className='userI'> Remote Host </div>
                <div className='userI'> Remote Address </div>
              </div>
              <div className='ucontD'>
                <div className='ua'>{userDdata[0].userInfo.user_ID} <ContentCopy style={{ color: "#71700", marginLeft: "20px", cursor: "pointer" }} /> </div> 
                <div className='ua'>{userDdata[0].userInfo.userName} </div> 
                <div className='ua'>{userDdata[0].userInfo.category} </div> 
                <div className='ua'>{userDdata[0].userInfo.mobile} </div> 
                <div className='ua'>{userDdata[0].userInfo.remoteHost} </div> 
                <div className='ua'>{userDdata[0].userInfo.remoteAddr} </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}