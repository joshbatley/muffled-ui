import { StoryObj } from '@storybook/react';
import { ThemeSwitch, ThemeButton, OutlineButton, Box } from '@muffled-ui/react';

export default {
  title: 'Utils/Theme Toggle',
  component: ThemeSwitch,
};

export const Switch: StoryObj<typeof ThemeSwitch> = {
  render: () => <ThemeSwitch />,
};

export const Button: StoryObj<typeof ThemeButton> = {
  render: () => <Box display="flex" spaceX="2">
    <ThemeButton />
    <OutlineButton>Profile</OutlineButton>
  </Box>,
};

