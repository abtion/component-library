import { type Meta, type StoryObj } from "@storybook/react"
import { CodeInput } from "~/components/CodeInput"

const meta = {
  title: "Toolbox/CodeInput",
  component: CodeInput,
} satisfies Meta<typeof CodeInput>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    deliveryMethod: "SMS",
    listenForOTC: false,
  },
}
