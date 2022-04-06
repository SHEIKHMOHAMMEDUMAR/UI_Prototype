import "./lsp.css"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from "react";
import ContentLoader from "react-content-loader"
import { Cancel, CheckCircle } from "@mui/icons-material";

export default function LSP({items, isLoading}) {
  const logo = ({item}) => {
    if (item === "Approved"){
      return <CheckCircle className="Approved"/>
    }
    else{
      return <Cancel className="Declined"/>
    }
  }
  return isLoading ? (
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

  )
}