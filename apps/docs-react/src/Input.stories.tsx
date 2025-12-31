import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "@muffled-ui/react"

const meta = {
  title: "react/Input",
  component: Input,
  tags: [],
  parameters: { layout: "centered" },
  args: {
    placeholder: "Type here",
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true, value: "Disabled" },
}

export const Invalid: Story = {
  args: { "aria-invalid": true, defaultValue: "Invalid value" },
}
