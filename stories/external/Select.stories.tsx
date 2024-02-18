import { type Meta, type StoryObj } from "@storybook/react"
import Select, { SelectProps } from "~/components/Select"

const meta = {
  component: Select,
  argTypes: {
    setActive: { action: true },
  },
} satisfies Meta<typeof Select>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    options: [
      { value: "value1", label: "label1" },
      { value: "value2", label: "label2" },
    ],
  } as SelectProps,
}
