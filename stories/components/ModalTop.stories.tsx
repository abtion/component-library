import React from "react"
import { StoryFn, Meta } from "@storybook/react"

import Modal from "~/components/Modal/src"
import ModalTop from "~/components/ModalTop/src"
import ModalContent from "~/components/ModalContent/src"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/🔎 ModalTop",
  component: ModalTop,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as Meta<typeof ModalTop>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Modal> = (args) => (
  <Modal size="md">
    <ModalTop {...args} />
    <ModalContent>Content</ModalContent>
  </Modal>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: "Top",
}
