import "./lsp.css"
import React from "react";
import ContentLoader from "react-content-loader"
import { DataGrid } from "@mui/x-data-grid";
import { IconCon } from "../icon_con/IconCon";

export default function LSP({items, isLoading}) { 
  if( isLoading || items === undefined || items.length === 0 ) {
    return (
      <div className="table">
        <span>
          <ContentLoader  viewBox="0 0 380 700" >
            <rect x="15" y="10" rx="2" ry="2" width="100%" height="100%" />
          </ContentLoader>
        </span>
      </div>
    )
  } 
  else {
    const cols = [
      { field: "lsp", headerName: "LSP", width: 100 },
      { field: "loan_type", headerName: "Loan type", width: 200 },
      { field: "amount", headerName: "Amount", width: 200 },
      { field: "date", headerName: "Date - Time", width: 200 },
      { field: "Trans_status", headerName: "Status", width: 200, 
        renderCell: (params) => {
          return(
            <>
              <IconCon value={params.row.Trans_status} />
            </>
            );
        } 
      },
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
              autoPageSize={true}
              rowsPerPageOptions={[10]}/>
          </div>
      ) 
  }
}