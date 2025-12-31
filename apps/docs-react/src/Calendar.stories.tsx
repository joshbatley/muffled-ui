import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react";

import { Calendar } from "@muffled-ui/react"

const meta = {
  title: "react/Calendar",
  component: Calendar,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow-sm" />
    )
  },
}

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<{ from?: Date; to?: Date } | undefined>()
    return (
      <Calendar mode="range" selected={range as any} onSelect={setRange as any} numberOfMonths={2} />
    )
  },
}
