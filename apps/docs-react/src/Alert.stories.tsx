import type { Meta, StoryObj } from "@storybook/react-vite"

import { Alert, AlertTitle, AlertDescription } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Alert",
  component: Alert,
  tags: [],
  parameters: { layout: "centered" },
  args: {
    children: (
      <>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>This is an alert message.</AlertDescription>
      </>
    ),
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Destructive: Story = {
  args: { variant: "destructive" },
}
