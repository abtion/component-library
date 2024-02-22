import React from "react"
import { Tooltip } from "."
import { render } from "@testing-library/react"

describe(Tooltip, () => {
  it("renders its' children", () => {
    const { getByText } = render(<Tooltip tip="tooltip">Child 1</Tooltip>)

    const firstChild = getByText("Child 1")
    expect(firstChild).toBeInTheDocument()
  })

  it("renders tooltip", async () => {
    const { queryByText } = render(<Tooltip tip="tooltiptext">Child 1</Tooltip>)

    expect(queryByText("tooltiptext")).toBeInTheDocument()
  })
})
