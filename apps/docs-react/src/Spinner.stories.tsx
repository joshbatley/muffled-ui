import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from '@muffled-ui/react'

const meta = {
  title: 'react/Spinner',
  component: Spinner,
  tags: [],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}
