import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "@muffled-ui/react"

const meta = {
  title: "react/Separator",
  component: Separator,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <div>Above</div>
      <Separator />
      <div>Below</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "stretch", gap: 12, height: 80 }}>
      <div>Left</div>
      <Separator orientation="vertical" />
      <div>Right</div>
    </div>
  ),
}
