import { type Meta, type StoryObj } from "@storybook/react"
import SearchInput, { SearchInputProps } from "~/components/SearchInput"

const meta = {
  title: "Toolbox/SearchInput",
  component: SearchInput,
} satisfies Meta<typeof SearchInput>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    initialValue: "",
    placeholder: "Search",
  } as SearchInputProps,
}

export const InitialValue: StoryObj<typeof meta> = {
  args: {
    initialValue: "Initial value",
    placeholder: "Search",
  } as SearchInputProps,
}
