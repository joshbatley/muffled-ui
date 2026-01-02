import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, ButtonGroup, ButtonGroupText, ButtonGroupSeparator } from '@muffled-ui/react'

const meta = {
  title: 'react/ButtonGroup',
  component: ButtonGroup,
  tags: [],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">One</Button>
      <Button variant="outline">Two</Button>
      <Button variant="outline">Three</Button>
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
