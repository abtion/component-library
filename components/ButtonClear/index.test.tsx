import React from "react"
import { render, waitFor } from "@testing-library/react"

import ButtonClear, { ButtonClearProps } from "."
import userEvent from "@testing-library/user-event"

const defaultProps: ButtonClearProps = {
  children: "ButtonClear text",
}

describe(ButtonClear, () => {
  it("displays button text", () => {
    const { getByText } = render(<ButtonClear {...defaultProps} />)

    const button = getByText(defaultProps.children as string)

    expect(button).toBeInTheDocument()
  })

  describe("when size is set", () => {
    it("adds size class", () => {
      const { getByText } = render(<ButtonClear {...defaultProps} size="md" />)

      const button = getByText(defaultProps.children as string)

      expect(button.parentElement).toHaveClass("ButtonClear--md")
    })
  })

  describe("when variant is set", () => {
    it("adds variant class", () => {
      const { getByText } = render(
        <ButtonClear {...defaultProps} variant="primary" />
      )

      const button = getByText(defaultProps.children as string)

      expect(button.parentElement).toHaveClass("ButtonClear--primary")
    })
  })

  describe("when user clicks", () => {
    it("shows a loader", async () => {
      const { getByText } = render(
        <ButtonClear
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
        <ButtonClear {...defaultProps} onClick={onClickFunc} />
      )
      await userEvent.dblClick(getByText(defaultProps.children as string))
      expect(onClickFunc).toHaveBeenCalledTimes(1)
    })
  })
})
