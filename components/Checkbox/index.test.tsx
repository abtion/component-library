import React from "react"
import { render } from "@testing-library/react"
import Checkbox, { CheckboxProps } from "."

const defaultProps: CheckboxProps = {
  placeholder: "Checkbox placeholder",
}

describe(Checkbox, () => {
  it("renders a checkbox", () => {
    const { container } = render(<Checkbox {...defaultProps} />)

    const checkbox = container.querySelector('input[type="checkbox"]')

    expect(checkbox).toBeInTheDocument()
  })
})
