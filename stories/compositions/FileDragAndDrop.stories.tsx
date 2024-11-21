import React from "react"
import { type Meta, type StoryObj } from "@storybook/react"
import { FileDragAndDrop } from "~/components/FileDragAndDrop"

const meta = {
  title: "Compositions/FileDragAndDrop",
  component: FileDragAndDrop,
} satisfies Meta<typeof FileDragAndDrop>
export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    onFilesChange: (files) => console.log("onFilesChange", { files }),
    onErrors: (str) => console.log("onErrors", { str }),
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <p className="mt-4 text-primary-600 text-center">
          This component uses the FileInput component
        </p>
      </div>
    ),
  ],
}
