import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup, RadioGroupItem, Label } from '@muffled-ui/react'

const meta = {
  title: 'react/RadioGroup',
  component: RadioGroup,
  tags: [],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <RadioGroupItem id="r1" value="option-1" />
        <Label htmlFor="r1">Option 1</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <RadioGroupItem id="r2" value="option-2" />
        <Label htmlFor="r2">Option 2</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <RadioGroupItem id="r3" value="option-3" />
        <Label htmlFor="r3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}
