import React from "react"
import { render } from "@testing-library/react"

import Badge, { BadgeProps } from "."

const defaultProps: BadgeProps = {
  variant: "success",
  size: "sm",
  text: "Badge text",
}

describe(Badge, () => {
  it("displays badge text", () => {
    const { getByText } = render(<Badge {...defaultProps} />)

    const badge = getByText("Badge text")

    expect(badge).toBeInTheDocument()
  })

  describe("when size is set", () => {
    it("adds size class", () => {
      const { getByText } = render(<Badge {...defaultProps} size="sm" />)

      const bagde = getByText(defaultProps.text as string)

      expect(bagde).toHaveClass("Badge--sm")
    })
  })

  describe("when variant is set", () => {
    it("adds variant class", () => {
      const { getByText } = render(
        <Badge {...defaultProps} variant="primary" />
      )

      const bagde = getByText(defaultProps.text as string)

      expect(bagde).toHaveClass("Badge--primary")
    })
  })
})
