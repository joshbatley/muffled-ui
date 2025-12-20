import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Tabs",
  component: Tabs,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Tabs defaultValue="account" style={{ width: 320 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
}
