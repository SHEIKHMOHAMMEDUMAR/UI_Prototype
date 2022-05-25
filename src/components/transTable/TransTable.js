import "./transTable.css"
import ContentLoader from "react-content-loader"
import { DataGrid } from "@mui/x-data-grid";
import { Cancel, CheckCircle, Error } from "@mui/icons-material";

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
    const ShowStatus = props => {
      if(props.Status === "Approved"){
        return(
          <div className="icon">
            <CheckCircle className="approved" />
            {props.Status}
          </div>
        )
      }
      else if(props.Status === "Rejected"){
        return(
          <div className="icon">
            <Cancel className="rejected" />
            {props.Status}
          </div>
        )
      }
      else if(props.Status === "Pending Docs"){
        return(
          <div className="icon">
            <Error className="pending_docs" />
            {props.Status}
          </div>
        )
     }
    }
    const cols = [
      { field: "Transaction_ID", headerName: "Transaction ID", flex: 1, headerAlign: 'left', align: 'left'},
      { field: "LSP", headerName: "LSP", flex: 1 ,headerAlign: 'left', align: 'left'},
      { field: "applicant", headerName: "Applicant", flex: 1 ,headerAlign: 'left', align: 'left'},
      { field: "loan_type", headerName: "Loan type", flex: 1 ,headerAlign: 'left', align: 'left'},
      { field: "amount", headerName: "Amount", flex: 1 ,headerAlign: 'right', align: 'right'},
      { field: "date", headerName: "Date - Time", flex: 1 ,headerAlign: 'left', align: 'left'},
      { field: "Status", headerName: "Status", flex: 1 ,headerAlign: 'left', align: 'left', cellRenderer: <ShowStatus />}
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
          Status: <ShowStatus Status={i.Status} />,
        };
      });
      return (
          <div className="transTable">
            <DataGrid
              rows={rows}
              columns={cols}
              pageSize={10}
              rowsPerPageOptions={[10]}
              pagination/>
          </div>
      ) 
  }
}