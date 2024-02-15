import React from "react"
import { type Meta, type StoryObj } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"
import Card, { CardProps } from "~/components/Card"
import EnvelopeIcon from "@heroicons/react/20/solid/EnvelopeIcon"

const meta = {
  component: Card,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Card>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    icon: <EnvelopeIcon />,
    name: "name",
    description: "this is a description",
    isDark: false,
    learnMoreUrl: "some.url",
    children: <p>Card content</p>,
  } as CardProps,
}
