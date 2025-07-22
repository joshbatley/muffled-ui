import { StoryObj } from '@storybook/react';
import { Box } from '@muffled-ui/react';
import { Checkbox } from '@muffled-ui/react';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
};

export const Showcase: StoryObj<typeof Checkbox> = {
  render: () => (
    <Box spaceYBetween="3">
      <Checkbox labelText="Checkbox" />
      <Checkbox checked labelText="Checked Checkbox" />
      <Checkbox disabled labelText="Disabled Checkbos" />
      <Checkbox checked disabled labelText="Checked Disabled Checkbox" />
    </Box>
  ),
};
