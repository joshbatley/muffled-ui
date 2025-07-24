import { useState } from 'react';
import { StoryObj } from '@storybook/react';
import { Box, Pagination } from '@muffled-ui/react';

export default {
  title: 'Data/Pagination',
  component: Pagination,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Showcase: StoryObj<typeof Pagination> = {
  render: () => {
    let [skip, setSkip] = useState(0);

    return (
      <Box>
          <Pagination
            limit={10}
            skip={skip}
            setSkip={setSkip}
            itemCount={100}
          />
          <Pagination limit={10} skip={skip} setSkip={setSkip} itemCount={5} />
      </Box>
    );
  },
};
