import { Meta, StoryObj } from "@storybook/react"

import Duration from "~/components/Duration"

export default {
  title: "Toolbox/Duration",
  component: Duration,
} as Meta<typeof Duration>

type Story = StoryObj<typeof Duration>

const startDate = new Date(Date.now() - 600000)

export const Primary: Story = {
  args: {
    since: startDate,
  },
}

export const WithFormat: Story = {
  args: {
    since: startDate,
    format: "hh:mm:ss",
  },
}

export const WithUpperLimit: Story = {
  args: {
    since: new Date(),
    format: "s",
    upperLimitMs: 5000,
  },
}
