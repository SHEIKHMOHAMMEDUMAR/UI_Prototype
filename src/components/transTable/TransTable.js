import "./transTable.css"
import ContentLoader from "react-content-loader"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconCon } from "../icon_con/IconCon";

export default function TransTable({items, isLoading}) { 
  if( isLoading || items === undefined || items.length === 0 ) {
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
  else {
    const cols = [
      { field: "Transaction_ID", headerName: "Transaction ID", flex: 1, headerAlign: 'left', align: 'right'},
      { field: "LSP", headerName: "LSP", flex: 1 ,headerAlign: 'left', align: 'left'},
      { field: "applicant", headerName: "Applicant", flex: 1 ,headerAlign: 'left', align: 'left'},
      { field: "loan_type", headerName: "Loan type", flex: 1 ,headerAlign: 'left', align: 'left'},
      { field: "amount", headerName: "Amount", flex: 1 ,headerAlign: 'right', align: 'right'},
      { field: "date", headerName: "Date - Time", flex: 1 ,headerAlign: 'left', align: 'left'},
      { field: "Status", headerName: "Status", flex: 1 ,headerAlign: 'left', align: 'left', 
        renderCell: (params) => {
          return(
            <>
              <IconCon value={params.row.Status} />
            </>
            );
        } 
      }
    ];
      const rows = items.map((i) => {
        return {
          id: i.Transaction_ID,
          Transaction_ID: i.Transaction_ID,
          LSP: i.LSP,
          applicant: i.applicant,
          loan_type: i.loan_type,
          amount: i.amount,
          date: i.date,
          Status: i.Status,
        };
      });
      return (
          <div className="transTable">
            <DataGrid
              rows={rows}
              columns={cols}
              autoPageSize={true}
              rowsPerPageOptions={[10]}
              components={{ Toolbar: GridToolbar }}
              checkboxSelection
              pagination/>
          </div>
      ) 
  }
}