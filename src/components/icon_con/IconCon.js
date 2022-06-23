import React from 'react'
import "./iconCon.css"
import { Cancel, CheckCircle, Error } from '@mui/icons-material';

export const IconCon = ({value}) => {
    if(value === "Approved"){
        return (
            <>
                <div className='icon_wrap'>
                    <CheckCircle className="approved" style={{marginRight: "10px"}} />
                    {value}
                </div>
            </>
        );
    }
    else if(value === "Declined" || value === "Rejected"){
        return (
            <>
                <div className='icon_wrap'>
                    <Cancel className="rejected" style={{marginRight: "10px"}} />
                    {value}
                </div>
            </>
        );
    }
    else if(value === "Pending Docs"){
        return (
            <>
                <div className='icon_wrap'>
                    <Error className="pending_docs" style={{marginRight: "10px"}} />
                    {value}
                </div>
            </>
        );
    }
}
