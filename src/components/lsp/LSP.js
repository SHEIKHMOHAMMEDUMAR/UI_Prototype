import "./lsp.css"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { React, useState } from "react";
import { CircularProgress } from "@material-ui/core";

export default function LSP({items, isLoading}) {
  const [item] = useState(items);
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
          {item.map((i) => (
            <TableRow
              key={i.lsp}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i.lsp}
              </TableCell>
              <TableCell align="left">{i.l_type}</TableCell>
              <TableCell align="right">{i.Amt}</TableCell>
              <TableCell align="left">{i.DT}</TableCell>
              <TableCell align="left">{i.Status}</TableCell>
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
          <span className="load"><CircularProgress size={100}/></span>
        </TableBody>
      </Table>
    </TableContainer>

  )
}