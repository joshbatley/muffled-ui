import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button, ButtonGroup, ButtonGroupText, ButtonGroupSeparator } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}

export const WithTextAndSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Actions</ButtonGroupText>
      <Button>Save</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Cancel</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  ),
}
