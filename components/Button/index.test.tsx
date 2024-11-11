import React from "react"
import { render, waitFor } from "@testing-library/react"

import Button, { ButtonProps } from "."
import userEvent from "@testing-library/user-event"

const defaultProps: ButtonProps = {
  children: "Button text",
}

describe(Button, () => {
  it("displays button text", () => {
    const { getByText } = render(<Button {...defaultProps} />)

    const button = getByText(defaultProps.children as string)

    expect(button).toBeInTheDocument()
  })

  describe("when size is set", () => {
    it("adds size class", () => {
      const { getByText } = render(<Button {...defaultProps} size="md" />)

      const button = getByText(defaultProps.children as string)

      expect(button.parentElement).toHaveClass("Button--md")
    })
  })

  describe("when variant is set", () => {
    it("adds variant class", () => {
      const { getByText } = render(
        <Button {...defaultProps} variant="primary" />
      )

      const button = getByText(defaultProps.children as string)

      expect(button.parentElement).toHaveClass("Button--primary")
    })
  })

  describe("when user clicks", () => {
    it("shows a loader", async () => {
      const { getByText } = render(
        <Button
          {...defaultProps}
          onClick={() => new Promise((resolve) => setTimeout(resolve, 200))}
        />
      )
      await userEvent.click(getByText(defaultProps.children as string))
      await waitFor(() => expect(getByText("Loading...")).toBeInTheDocument())
    })

    it("prevents calling onClick twice", async () => {
      const onClickFunc = jest.fn(
        () => new Promise((resolve) => setTimeout(resolve, 200))
      )
      const { getByText } = render(
        <Button {...defaultProps} onClick={onClickFunc} />
      )
      await userEvent.dblClick(getByText(defaultProps.children as string))
      expect(onClickFunc).toHaveBeenCalledTimes(1)
    })
  })
})
