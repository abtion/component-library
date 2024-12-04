import React from "react"
import { fireEvent, render } from "@testing-library/react"
import FileInput from "."
import userEvent from "@testing-library/user-event"

describe(FileInput, () => {
  it("renders an invisible file input", () => {
    const { container } = render(
      <FileInput
        onChangeHandler={jest.fn()}
        element={<div />}
        allowedFileTypes={["image/png"]}
      />,
    )
    const fileInput = container.querySelector('input[type="file"]')
    expect(fileInput).toBeInTheDocument()
  })

  describe("when no file is selected", () => {
    it("does not call onchange", async () => {
      const onChangeHandler = jest.fn()
      const { container } = render(
        <FileInput
          onChangeHandler={onChangeHandler}
          element={<div />}
          allowedFileTypes={["image/png"]}
        />,
      )
      const button = container.getElementsByTagName("input")[0]
      fireEvent.change(button, {
        target: {
          files: [],
        },
      })

      await userEvent.click(button)

      expect(onChangeHandler).not.toHaveBeenCalled()
    })
  })

  describe("when files are selected", () => {
    it("calls onchange", async () => {
      const onChangeHandler = jest.fn()
      const { container } = render(
        <FileInput
          onChangeHandler={onChangeHandler}
          element={<div />}
          allowedFileTypes={["image/png"]}
        />,
      )
      const files = [
        new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
      ]
      const button = container.getElementsByTagName("input")[0]
      fireEvent.change(button, {
        target: {
          files: files,
        },
      })
      await userEvent.click(button)
      expect(onChangeHandler).toHaveBeenCalledTimes(1)
      expect(onChangeHandler).toHaveBeenCalledWith(files)
    })
  })
})
