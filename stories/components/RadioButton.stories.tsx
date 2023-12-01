import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import RadioButton, { RadioButtonProps } from "~/components/RadioButton"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/🚧 RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
)

const baseProps: Partial<RadioButtonProps> = {
  checked: false,
  disabled: false,
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...baseProps,
}

export const RadioButtonWithLabel = (): JSX.Element => (
  <label>
    <RadioButton className="mr-2 align-middle" />
    <span className="select-none align-middle">RadioButton label</span>
  </label>
)
