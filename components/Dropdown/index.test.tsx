import React from "react"
import Dropdown from "."
import userEvent from "@testing-library/user-event"
import { act, render, waitFor } from "@testing-library/react"

describe(Dropdown, () => {
  const dummyObject = [
    {
      key: "1",
      text: "activeElement",
    },
    {
      key: "2",
      text: "otherElement",
    },
  ]
  it("renders with the options provided", async () => {
    const { getByText } = render(
      <Dropdown
        active={{ key: "1", text: "activeElement" }}
        onClickAction={jest.fn()}
        options={dummyObject}
      />
    )

    const dropdown = getByText("activeElement")

    await act(async () => await userEvent.click(dropdown))

    expect(getByText("otherElement")).toBeInTheDocument()
  })

  it("calls the action function with selected element", async () => {
    const mockedFunction = jest.fn()
    const active = dummyObject[0]
    const { getByText } = render(
      <Dropdown
        active={active}
        onClickAction={mockedFunction}
        options={dummyObject}
      />
    )

    const dropdown = getByText(active.text)
    await act(async () => await userEvent.click(dropdown))

    const otherElement = getByText(dummyObject[1].text)
    await act(async () => await userEvent.click(otherElement))

    await waitFor(() => {
      expect(mockedFunction).toHaveBeenCalledWith(dummyObject[1])
    })
  })

  it("highlights the active element", async () => {
    const mockedFunction = jest.fn()
    const active = dummyObject[1]
    const { container, getByText } = render(
      <Dropdown
        active={active}
        onClickAction={mockedFunction}
        options={dummyObject}
      />
    )

    const dropdown = getByText(active.text)

    await act(async () => await userEvent.click(dropdown))
    await waitFor(() => {
      const otherElement = container.querySelector(".Dropdown__active")
      expect(otherElement).toContainHTML(active.text)
    })
  })
})
