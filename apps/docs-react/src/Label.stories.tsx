import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label, Input } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Label",
  component: Label,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    const id = "label-input"
    return (
      <div style={{ display: "grid", gap: 8, width: 320 }}>
        <Label htmlFor={id}>Email</Label>
        <Input id={id} placeholder="you@example.com" />
      </div>
    )
  },
}
