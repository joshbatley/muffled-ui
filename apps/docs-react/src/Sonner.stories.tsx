import type { Meta, StoryObj } from "@storybook/react-vite"

import { Toaster, Button } from "@muffled-ui/ui-web"
import { toast } from "sonner"

const meta = {
  title: "ui-web/Sonner",
  component: Toaster,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <Button onClick={() => toast("Hello there")}>Toast</Button>
        <Button onClick={() => toast.success("Saved!")}>Success</Button>
        <Button onClick={() => toast.error("Something went wrong")}>Error</Button>
      </div>
      <Toaster richColors />
    </div>
  ),
}
