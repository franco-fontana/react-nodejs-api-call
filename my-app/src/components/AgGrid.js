import { useCallback, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise/dist/styles/ag-grid.css";
import "ag-grid-enterprise/dist/styles/ag-theme-alpine.css";

function AgGrid(props) {
  const gridRef = useRef();

  const columnDefs = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      enableRowGroup: true,
    }),
    []
  );

  const cellClickedListener = useCallback((e) => {
    console.log("cellClicked", e);
  });

  const pushMeClicked = useCallback((e) => {
    gridRef.current.api.deselectAll();
  });

  return (
    <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
      <button className="mb-2" onClick={pushMeClicked}>
        Unselect rows
      </button>
      <AgGridReact
        ref={gridRef}
        onCellClicked={cellClickedListener}
        rowData={props.cars}
        columnDefs={columnDefs}
        rowSelection="multiple"
        animateRows={true}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}

export default AgGrid;
