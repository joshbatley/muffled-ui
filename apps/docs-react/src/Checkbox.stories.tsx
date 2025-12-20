import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox, Label } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    const id = "terms"
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Checkbox id={id} />
        <Label htmlFor={id}>Accept terms and conditions</Label>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const id = "disabled"
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Checkbox id={id} disabled />
        <Label htmlFor={id}>Disabled</Label>
      </div>
    )
  },
}
