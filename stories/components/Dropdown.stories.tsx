import { type Meta, type StoryObj } from "@storybook/react"
import Dropdown, { DropdownProps, Sizes } from "~/components/Dropdown"

const meta = {
  title: "Toolbox/Dropdown",
  component: Dropdown,
  argTypes: {
    onClickAction: { action: true },
  },
} satisfies Meta<typeof Dropdown>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    active: { key: "1", text: "25" },
    options: [
      { key: "1", text: "25" },
      { key: "2", text: "50" },
      { key: "3", text: "100" },
      { key: "4", text: "150" },
    ],
    size: Sizes.Medium,
  } as DropdownProps,
}
