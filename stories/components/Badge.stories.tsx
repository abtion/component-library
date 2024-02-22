import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Badge, { BadgeProps } from "~/components/Badge"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

const sharedProps: Partial<BadgeProps> = {
  size: "lg",
  text: "Badge text",
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Info = Template.bind({})
Info.args = {
  ...sharedProps,
  variant: "info",
}

export const Success = Template.bind({})
Success.args = {
  ...sharedProps,
  variant: "success",
}

export const Warning = Template.bind({})
Warning.args = {
  ...sharedProps,
  variant: "warning",
}

export const Danger = Template.bind({})
Danger.args = {
  ...sharedProps,
  variant: "danger",
}

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
