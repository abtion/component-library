import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Loader from "~/components/Loader"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/🔎 Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const WithoutText = Template.bind({})

export const WithText = Template.bind({})
WithText.args = {
  text: "Loading...",
}

export const StyledSpinner = Template.bind({})
StyledSpinner.args = {
  text: "Loading...",
  spinnerClassName: "text-primary",
}

export const StyledText = Template.bind({})
StyledText.args = {
  text: "just a moment...",
  textClassName: "italic",
}
