import type { Meta, StoryObj } from "@storybook/react-vite"

import { Switch, Label } from "@muffled-ui/react"

const meta = {
  title: "react/Switch",
  component: Switch,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Switch id="notif" />
      <Label htmlFor="notif">Enable notifications</Label>
    </div>
  ),
}
