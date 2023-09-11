import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import { GrCheckbox } from "react-icons/gr";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

import { httpAgGrid } from "@core/http-service";

var checkboxSelection = function (params) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};

var headerCheckboxSelection = function (params) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};

const AgGrid = () => {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const containerStyle = useMemo(
    () => ({ width: "100%", height: "650px" }),
    []
  );
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState();

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "make",
      minWidth: 270,
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,
    },
    // { field: "make", filter: true },
    { field: "model", filter: true },
    { field: "price" },
  ]);

  // DefaultColDef sets props common to all Columns
  // const defaultColDef = useMemo(() => (
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  // Example load data from server
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <div>
      {/* Example using Grid's API */}
      <div className="btn fw-bolder mb-4" onClick={buttonListener}>
        <GrCheckbox style={{ fontSize: "20px" }} />
      </div>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div style={containerStyle}>
        <div style={gridStyle} className="ag-theme-alpine-dark">
          <AgGridReact
            ref={gridRef} // Ref for accessing Grid's API
            rowData={rowData} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
            suppressRowClickSelection={true}
            groupSelectsChildren={true}
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection="multiple" // Options - allows click selection of rows
            // rowGroupPanelShow={"always"}
            // pivotPanelShow={"always"}
            onCellClicked={cellClickedListener} // Optional - registering for Grid Event
            pagination={true}
            enableRtl={true}
          />
        </div>
      </div>
    </div>
  );
};

export async function categoriesPagesLoader() {
  return defer({
    // categories: loadCategories(),
  });
}

const loadCategories = async () => {
  // const url = import.meta.env.VITE_AGGRID_URL;

  const response = await httpAgGrid.get();
  return response.data;
};

export default AgGrid;
