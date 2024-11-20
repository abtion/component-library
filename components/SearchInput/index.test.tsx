import userEvent from "@testing-library/user-event"
import React from "react"
import { act, render, waitFor } from "@testing-library/react"
import SearchInput from "."

describe(SearchInput, () => {
  it("returns the search on enter", async () => {
    const mockFn = jest.fn()
    const { container } = render(
      <SearchInput searchPhrase={mockFn} initialValue="" />
    )

    const input = container.querySelector(".SearchInput__input")
    if (input)
      await act(async () => {
        await userEvent.type(input, "Search type phrase")
        await userEvent.type(input, "{enter}")
      })

    expect(mockFn).toHaveBeenLastCalledWith("Search type phrase")
  })

  it("returns the search on click", async () => {
    const mockFn = jest.fn()
    const { container } = render(
      <SearchInput searchPhrase={mockFn} initialValue="" />
    )

    const input = container.querySelector(".SearchInput__input")
    if (input)
      await act(async () => {
        await userEvent.type(input, "Search click phrase")
      })

    const magnifier = container.querySelector(".SearchInput__magnifier")
    if (magnifier) await userEvent.click(magnifier)

    await waitFor(() => {
      expect(mockFn).toHaveBeenLastCalledWith("Search click phrase")
    })
  })
})
