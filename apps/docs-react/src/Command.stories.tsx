import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
} from '@muffled-ui/react'

const meta = {
  title: 'react/Command',
  component: Command,
  tags: [],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Inline: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Docs</CommandItem>
            <CommandItem>
              Open Settings
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            <CommandItem>Docs</CommandItem>
            <CommandItem>GitHub</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
}

export const InDialog: Story = {
  render: () => (
    <CommandDialog>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Quick Actions">
          <CommandItem>New file</CommandItem>
          <CommandItem>New project</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
}
