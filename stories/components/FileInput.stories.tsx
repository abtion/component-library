import { type Meta, type StoryObj } from "@storybook/react"
import React from "react"
import Button from "~/components/Button"
import FileInput, { FileInputProps } from "~/components/FileInput"

const meta = {
  title: "Toolbox/FileInput",
  component: FileInput,
} satisfies Meta<typeof FileInput>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    className: "hidden",
    element: (
      <Button variant="primary" size="md" onClick={() => console.log("click")}>
        Add Attachments
      </Button>
    ),
  } as FileInputProps,
}

export const Text: StoryObj<typeof meta> = {
  args: {
    ...Default.args,
    element: <div>Add Attachments</div>,
  } as FileInputProps,
}

export const Disabled: StoryObj<typeof meta> = {
  args: {
    ...Text.args,
    disabled: true,
  } as FileInputProps,
}
