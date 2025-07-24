import { StoryObj } from '@storybook/react';
import { Box, Text } from '@muffled-ui/react';
import { Backdrop } from '@muffled-ui/react';

export default {
  title: 'Utils/Backdrop',
  component: Backdrop,
};

export const Showcase: StoryObj<typeof Backdrop> = {
  render: () => {
    return (
      <Backdrop onClick={() => { }}>
        <Box bg="background" height="40%" width="40%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" spaceYBetween="5">
          <Text>Escape key or click the backdrop</Text>
        </Box>
      </Backdrop>
    );
  },
};
