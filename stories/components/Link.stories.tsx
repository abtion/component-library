import React from "react"
import { StoryFn, Meta } from "@storybook/react"

import Link, { LinkProps } from "~/components/Link"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/✅ Link",
  component: Link,
} as Meta<typeof Link>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Link> = (args) => <Link {...args} />

const sharedProps: Partial<LinkProps> = {
  size: "bs",
  text: "Link text",
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Info = Template.bind({})
Info.args = {
  ...sharedProps,
}

export const Neutral = Template.bind({})
Neutral.args = {
  ...sharedProps,
  variant: "neutral",
}

export const NeutralLight = Template.bind({})
NeutralLight.args = {
  ...sharedProps,
  variant: "neutral-light",
}

export const NeutralDark = Template.bind({})
NeutralDark.args = {
  ...sharedProps,
  variant: "neutral-dark",
}

export const Underline = Template.bind({})
Underline.args = {
  ...sharedProps,
  underline: true,
}
