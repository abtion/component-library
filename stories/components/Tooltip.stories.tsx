import { type Meta, type StoryObj } from "@storybook/react"
import React from "react"
import { Tooltip, TooltipProps } from "~/components/Tooltip"

const meta = {
  title: "Toolbox/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    children: "tool",
    tip: "To see the tip!",
    className: "whitespace-nowrap",
  } as TooltipProps,
  decorators: [
    (Story) => (
      <div className="mt-10">
        Please hover the{" "}
        <b>
          <Story />
        </b>
      </div>
    ),
  ],
}
