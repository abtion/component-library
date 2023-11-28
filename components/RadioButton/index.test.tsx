import React from "react"
import { render } from "@testing-library/react"
import RadioButton from "."

describe(RadioButton, () => {
  it("renders a radio input", () => {
    const { container } = render(<RadioButton />)

    const radioButton = container.querySelector('input[type="radio"]')

    expect(radioButton).toBeInTheDocument()
  })
})
