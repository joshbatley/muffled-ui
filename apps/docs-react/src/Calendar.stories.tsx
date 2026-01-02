import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Calendar } from '@muffled-ui/react'

const meta = {
  title: 'react/Calendar',
  component: Calendar,
  tags: [],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow-sm" />
    )
  },
}

export const Range: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [range, setRange] = useState<{ from?: Date, to?: Date } | undefined>()
    return (
      <Calendar mode="range" selected={range as any} onSelect={setRange as any} numberOfMonths={2} />
    )
  },
}
