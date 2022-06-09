import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Accessibility } from "@mui/icons-material";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {}
  })
);

const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
};

const handleCellClick = (param, event) => {
  event.stopPropagation();
};

const handleRowClick = (param, event) => {
  event.stopPropagation();
};

const columns = [
  {
    field: "firstName",
    headerName: "First Name",
    width: 130
  },
  { field: "lastName", headerName: "Last Name", width: 130 },
  {
    field: "Print",
    renderCell: (cellValues) => {
      return (
        <>
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            handleClick(event, cellValues);
          }}
        >
          Print
        </Button>
        <Accessibility/>
        </>
      );
    }
  },
  {
    field: "Route",
    renderCell: (cellValues) => {
      return <Link href={`#${cellValues.row.url}`}>Link</Link>;
    }
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, url: "jonspage" },
  { id: 2, lastName: "Lannister", firstName: "Amy", age: 42, url: "amyspage" },
  {
    id: 3,
    lastName: "Lanny",
    firstName: "Jaime",
    age: 45,
    url: "jaimespage"
  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, url: "aryaspage" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 12,
    url: "daeneryspage"
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Jane",
    age: 15,
    url: "janespage"
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    url: "ferraraspage"
  }
];

export default function Example() {
  const classes = useStyles();

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rowHeight={120}
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
      <div style={{ margin: "40px", textAlign: "center" }}>
        <a
          target="_blank"
          href="https://smartdevpreneur.com/the-ultimate-guide-to-customizing-material-ui-datagrid/"
        >
          How do you add buttons to the DataGrid?
        </a>
      </div>
    </div>
  );
}
