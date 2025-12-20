import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="icon" aria-label="Icon size">★</Button>
      <Button {...args} size="icon-sm" aria-label="Icon small">★</Button>
      <Button {...args} size="icon-lg" aria-label="Icon large">★</Button>
    </div>
  ),
}

export const AsChildLink: Story = {
  render: () => (
    <Button asChild variant="link">
      <a href="#">Anchor as Button</a>
    </Button>
  ),
}
