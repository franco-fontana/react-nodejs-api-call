import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import { getAllCars } from "../services/AgGridService";

function AgGrid(props) {
  const columnDefs = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
      <AgGridReact rowData={props.cars} columnDefs={columnDefs} />
    </div>
  );
}

export default AgGrid;
