import "./lsp.css"
import React from "react";
import ContentLoader from "react-content-loader"
import { DataGrid } from "@mui/x-data-grid";

export default function LSP({items, isLoading}) {  
  const cols = [
  { field: "lsp", headerName: "LSP", width: 100 },
  { field: "l_type", headerName: "Loan type", width: 200 },
  { field: "Amt", headerName: "Amount", width: 100 },
  { field: "DT", headerName: "Date - Time", width: 200 },
  { field: "Status", headerName: "Status", width: 200 }
];
  const rows = items.map((i) => {
    return {
      id: i.id,
      lsp: i.lsp,
      l_type: i.l_type,
      Amt: i.Amt,
      DT: i.DT,
      Status: i.Status,
    };
  });
  return isLoading ? (
    <div className="table">
      <DataGrid
        rows={rows}
        columns={cols}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick/>
    </div>
  ) : (
    <div className="table">
      <DataGrid
        columns={cols}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick/>
      <span>
        <ContentLoader  viewBox="0 0 380 700" speed={1.5}>
          <rect x="15" y="10" rx="2" ry="2" width="360" height="500" />
        </ContentLoader>
      </span>
    </div>
    
  )
}
/*const logo = ({item}) => {
    if (item === "Approved"){
      return <CheckCircle className="Approved"/>
    }
    else{
      return <Cancel className="Declined"/>
    }
  }*/