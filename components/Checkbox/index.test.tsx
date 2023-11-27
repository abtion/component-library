import React from "react"
import { render } from "@testing-library/react"
import Checkbox, { CheckboxProps } from "."

const defaultProps: CheckboxProps = {
  placeholder: "Checkbox placeholder",
}

describe(Checkbox, () => {
  describe("when variant is set", () => {
    it("adds variant class", () => {
      const { getByPlaceholderText } = render(
        <Checkbox {...defaultProps} variant="default" />
      )

      const checkbox = getByPlaceholderText(defaultProps.placeholder as string)

      expect(checkbox).toHaveClass("Checkbox--default")
    })
  })
})
