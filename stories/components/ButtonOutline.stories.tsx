import React from "react"
import { StoryFn, Meta } from "@storybook/react"
import ButtonOutline, { ButtonOutlineProps } from "~/components/ButtonOutline"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/ButtonOutline",
  component: ButtonOutline,
} as Meta<typeof ButtonOutline>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ButtonOutline> = (args) => (
  <ButtonOutline {...args} />
)

const sharedProps: Partial<ButtonOutlineProps> = {
  children: "Button text",
  size: "md",
  disabled: false,
  onClick: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log("onClick work finished")
  },
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
  ...sharedProps,
  variant: "primary",
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
