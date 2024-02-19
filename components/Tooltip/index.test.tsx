import React from "react"
import { Tooltip } from "."
import { render } from "@testing-library/react"

describe(Tooltip, () => {
  it("renders its' children", () => {
    const { getByText } = render(
      <Tooltip hoverText="tooltip">
        <p>Child 1</p>
      </Tooltip>
    )

    const firstChild = getByText("Child 1")
    expect(firstChild).toBeInTheDocument()
  })

  it("renders tooltip", async () => {
    const { queryByText } = render(
      <Tooltip hoverText="tooltiptext">
        <p>Child 1</p>
      </Tooltip>
    )

    expect(queryByText("tooltiptext")).toBeInTheDocument()
  })
})
