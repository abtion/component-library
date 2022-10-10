import React from "react"
import { render } from "@testing-library/react"

import ButtonOutline, { ButtonOutlineProps } from "."

const defaultProps: ButtonOutlineProps = {
  children: "ButtonOutline text",
}

describe(ButtonOutline, () => {
  it("displays button text", () => {
    const { getByText } = render(<ButtonOutline {...defaultProps} />)

    const button = getByText(defaultProps.children as string)

    expect(button).toBeInTheDocument()
  })

  describe("when size is set", () => {
    it("adds size class", () => {
      const { getByText } = render(
        <ButtonOutline {...defaultProps} size="md" />
      )

      const button = getByText(defaultProps.children as string)

      expect(button).toHaveClass("ButtonOutline--md")
    })
  })

  describe("when variant is set", () => {
    it("adds variant class", () => {
      const { getByText } = render(
        <ButtonOutline {...defaultProps} variant="primary" />
      )

      const button = getByText(defaultProps.children as string)

      expect(button).toHaveClass("ButtonOutline--primary")
    })
  })
})
