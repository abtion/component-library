import React from "react"
import { StoryFn, Meta } from "@storybook/react"

import Modal from "~/components/Modal"
import ModalContent from "~/components/ModalContent"
import ModalTop from "~/components/ModalTop"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/🔎 ModalContent",
  component: ModalContent,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as Meta<typeof ModalContent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Modal> = (args) => (
  <Modal size="md">
    <ModalTop>Top</ModalTop>
    <ModalContent {...args} />
  </Modal>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: "Content",
}
