import "./lsp.css"
import React from "react";
import ContentLoader from "react-content-loader"
import { DataGrid } from "@mui/x-data-grid";

export default function LSP({items, isLoading}) { 
  if(isLoading) {
    const cols = [
      { field: "lsp", headerName: "LSP", width: 100 },
      { field: "loan_type", headerName: "Loan type", width: 200 },
      { field: "amount", headerName: "Amount", width: 200 },
      { field: "date", headerName: "Date - Time", width: 200 },
      { field: "Trans_status", headerName: "Status", width: 200 }
    ];
      const rows = items.map((i) => {
        return {
          id: i.id,
          lsp: i.lsp,
          loan_type: i.loan_type,
          amount: i.amount,
          date: i.date,
          Trans_status: i.Trans_status,
        };
      });
      return (
        <div className="table">
          <DataGrid
            rows={rows}
            columns={cols}
            pageSize={10}
            rowsPerPageOptions={[10]}
            /*checkboxSelection
            disableSelectionOnClick*//>
        </div>
      ) 
  } 
  else {
    return (
      <div className="table">
        <span>
          <ContentLoader  viewBox="0 0 380 700" >
            <rect x="15" y="10" rx="2" ry="2" width="360" height="500" />
          </ContentLoader>
        </span>
      </div>
    )
  }
}
/*const logo = ({item}) => {
    if (item === "Approved"){
      return <CheckCircle className="Approved"/>
    }
    else{
      return <Cancel className="Declined"/>
    }
  }*/