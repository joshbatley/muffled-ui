import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "@muffled-ui/react"

const meta = {
  title: "react/Skeleton",
  component: Skeleton,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Examples: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-6 w-64" />
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Skeleton className="h-10 w-10 rounded-full" />
        <div style={{ display: "grid", gap: 8 }}>
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  ),
}
