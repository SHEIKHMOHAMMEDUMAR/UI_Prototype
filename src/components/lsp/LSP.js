import "./lsp.css"
import React from "react";
import ContentLoader from "react-content-loader"
import { Cancel, CheckCircle } from "@mui/icons-material";
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
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick/>
    </div>
  ) : (
    <div className="table">
      <DataGrid
        columns={cols}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick/>
      <span>
        <ContentLoader  viewBox="0 0 380 700" >
          <rect x="15" y="10" rx="2" ry="2" width="360" height="500" />
        </ContentLoader>
      </span>
    </div>
    
  )
}





/*import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
isLoading ? (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">LSP</TableCell>
            <TableCell align="left">Loan Type</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="left">Date - Time</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((i) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {i.lsp}
              </TableCell>
              <TableCell align="left">{i.l_type}</TableCell>
              <TableCell align="right">{i.Amt}</TableCell>
              <TableCell align="left">{i.DT}</TableCell>
              <TableCell align="left"><span className="status">{i.Status}</span>
                                      <span className="logo">{logo({item:i.Status})}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">LSP</TableCell>
            <TableCell align="left">Loan Type</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="left">Date - Time</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
      <ContentLoader  viewBox="0 0 380 700" speed={1.5}>
            <rect x="15" y="10" rx="2" ry="2" width="360" height="500" />
            </ContentLoader>
    </TableContainer>

  )*/