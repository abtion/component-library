import { type StoryObj } from "@storybook/react"
import DatePicker, { DatePickerProps, Mode } from "~/components/DatePicker"

const meta = {
  component: DatePicker,
}
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    mode: Mode.single,
  } as DatePickerProps,
}
