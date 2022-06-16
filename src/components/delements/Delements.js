import { CheckCircle, Clear, Pending, Remove } from '@mui/icons-material';
import { React } from 'react';
import "./delements.css"

export default function Delements ({v})  { 
  if(v.cond === "green"){
    return(
        <>
        <div className='iconzz accept'>
            <CheckCircle style={{ color: "green", marginRight: "10px" }}/>
            {v.value} 
        </div>
        </>
      )
  }
  else if(v.cond === "yellow"){
    return(
        <>
        <div className='iconzz pend'>
            <Pending style={{ color: "orange", marginRight: "10px" }}/>
            {v.value} 
        </div>
        </>
      )
  }
  else if(v.cond === "red"){
    return(
        <>
        <div className='iconzz reje'>
            <Clear style={{ color: "red", marginRight: "10px" }}/>
            {v.value} 
        </div>
        </>
      )
  } 
  else if(v.cond === "gray"){
    return(
        <>
        <div className='iconzz undef'>
            <Remove style={{ color: "gray", marginRight: "10px" }}/>
            {v.value} 
        </div>
        </>
      )
  } 
}