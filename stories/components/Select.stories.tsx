import React from "react"
import { type Meta, type StoryObj } from "@storybook/react"
import Select, { SelectProps } from "~/components/Select"

const meta = {
  title: "Toolbox/Select",
  component: Select,
} satisfies Meta<typeof Select>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    options: [
      { value: "value1", label: "label1" },
      { value: "value2", label: "label2" },
      { value: "value3", label: "label3" },
      { value: "value4", label: "label4" },
    ],
  } as SelectProps,
  decorators: [
    (Story) => (
      <div className="mb-32">
        <Story />
      </div>
    ),
  ],
}

export const Multiple: StoryObj<typeof meta> = {
  args: {
    isMulti: true,
    options: [
      { value: "value1", label: "label1" },
      { value: "value2", label: "label2" },
      { value: "value3", label: "label3" },
      { value: "value4", label: "label4" },
    ],
  } as SelectProps,
  decorators: [
    (Story) => (
      <div className="mb-32">
        <Story />
      </div>
    ),
  ],
}

export const Disabled: StoryObj<typeof meta> = {
  args: {
    isDisabled: true,
    options: [
      { value: "value1", label: "label1" },
      { value: "value2", label: "label2" },
      { value: "value3", label: "label3" },
      { value: "value4", label: "label4" },
    ],
  } as SelectProps,
  decorators: [(Story) => <Story />],
}
