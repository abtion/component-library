import React from "react"

import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css" // Mandatory
import "ag-grid-community/styles/ag-theme-quartz.css" // Optional

export default {
  title: "External Libraries/ag-grid",
}

type CarType = {
  make: string
  model: string
  price: number
  electric: boolean
}

export const Default = (): JSX.Element => {
  return (
    <div className="ag-theme-quartz" style={{ height: 200 }}>
      <AgGridReact<CarType>
        rowData={[
          { make: "Tesla", model: "Model Y", price: 64950, electric: true },
          { make: "Ford", model: "F-Series", price: 33850, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        ]}
        columnDefs={[
          { field: "make" },
          { field: "model" },
          { field: "price" },
          { field: "electric" },
        ]}
      />
    </div>
  )
}
