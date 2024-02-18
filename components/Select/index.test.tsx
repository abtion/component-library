import React from "react"
import {
  findAllByText,
  findByText,
  fireEvent,
  getAllByText,
  getByText,
  render,
} from "@testing-library/react"
import Select from "."

const keyDownEvent = {
  key: "ArrowDown",
}

export async function selectOption(
  container: HTMLElement,
  optionText: string,
  initialText = "Select..."
) {
  const placeholder = await findByText(container, initialText)
  fireEvent.keyDown(placeholder, keyDownEvent)
  await findByText(container, optionText)
  fireEvent.click(getByText(container, optionText))
}

export async function selectSameOption(
  container: HTMLElement,
  optionText: string
) {
  const placeholder = getByText(container, optionText)
  fireEvent.keyDown(placeholder, keyDownEvent)
  await findAllByText(container, optionText)
  fireEvent.click(getAllByText(container, optionText)[1])
}

describe(Select, () => {
  it("returns the selected element", async () => {
    const options = [
      {
        value: "value1",
        label: "label1",
      },
      {
        value: "value2",
        label: "label2",
      },
      {
        value: "value3",
        label: "label3",
      },
    ]
    const mockSetActive = jest.fn()
    const { getByTestId } = render(
      <Select options={options} setActive={mockSetActive} />
    )

    await selectOption(getByTestId("infare-select"), "label2", "label1")

    expect(mockSetActive).toHaveBeenCalledWith({
      value: "value2",
      label: "label2",
    })
  })
})
