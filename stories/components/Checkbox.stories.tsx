import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Checkbox, { CheckboxProps } from "~/components/Checkbox"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Checkbox 🚧",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

const baseProps: Partial<CheckboxProps> = {
  checked: false,
  disabled: false,
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...baseProps,
}

export const CheckboxWithLabel = (): JSX.Element => (
  <label>
    <Checkbox className="mr-2 align-middle" />
    <span className="select-none align-middle">Checkbox label</span>
  </label>
)
