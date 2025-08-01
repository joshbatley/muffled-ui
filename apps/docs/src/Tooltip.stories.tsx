import { StoryObj } from '@storybook/react';
import { Box, Tooltip } from '@muffled-ui/react';
import { directionSelect } from './presets';

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    tooltip: "i'm the tooltip",
    as: 'div',
  },
  argTypes: {
    direction: directionSelect,
  },
};

export const Showcase: StoryObj<typeof Tooltip> = {
  render: ({ ...rest }: any) => (
    <Box
      spaceY="2"
      display="grid"
      h="100vh"
      style={{ placeContent: 'center' }}
    >
      <Tooltip {...rest}>
        <Box m="5">This is wrapped</Box>
      </Tooltip>
    </Box>
  ),
};
