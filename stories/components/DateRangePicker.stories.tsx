import React from "react"
import { type Meta, type StoryObj } from "@storybook/react"
import DateRangePicker from "~/components/DateRangePicker"

const meta = {
  title: "Toolbox/DateRangePicker",
  component: DateRangePicker,
} satisfies Meta<typeof DateRangePicker>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    onClose: () => console.log("onClose"),
  },
  decorators: [
    (Story) => (
      <div className="w-full flex items-center justify-center">
        <div className="relative w-16">
          anchor
          <Story />
        </div>
      </div>
    ),
  ],
}
