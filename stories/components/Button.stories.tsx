import React from "react"
import { StoryFn, Meta } from "@storybook/react"

import Button, { ButtonProps } from "~/components/Button/src"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/✅ Button",
  component: Button,
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

const sharedProps: Partial<ButtonProps> = {
  children: "Button text",
  size: "md",
  disabled: false,
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
  ...sharedProps,
  variant: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...sharedProps,
  variant: "secondary",
}

export const Neutral = Template.bind({})
Neutral.args = {
  ...sharedProps,
  variant: "neutral",
}

export const Success = Template.bind({})
Success.args = {
  ...sharedProps,
  variant: "success",
}

export const Danger = Template.bind({})
Danger.args = {
  ...sharedProps,
  variant: "danger",
}

export const Warning = Template.bind({})
Warning.args = {
  ...sharedProps,
  variant: "warning",
}

export const Info = Template.bind({})
Info.args = {
  ...sharedProps,
  variant: "info",
}

export const Basic = Template.bind({})
Basic.args = {
  ...sharedProps,
  variant: "basic",
}
