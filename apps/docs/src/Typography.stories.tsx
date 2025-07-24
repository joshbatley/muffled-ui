import { StoryObj } from '@storybook/react';
import { Text, Title, Box } from '@muffled-ui/react';

export default {
  title: 'Data/Typography',
  args: {
    children: 'My Text element',
  },
  argTypes: {
    as: {
      options: ['p', 'span', 'b'],
    },
  },
};

export const Typography: StoryObj<typeof Text> = {
  render: ({ children, as }: any) => (<>
    <Text as={as}>{children}</Text>
    <br />
    <Text as={as} mono>
      {children}
    </Text>
  </>),
};



export const Titles: StoryObj<typeof Title> = {
  render: ({ children }) => (
    <Box spaceYBetween="2">
      <Title as="h1">{children}</Title>
      <Title as="h2">{children}</Title>
      <Title as="h3">{children}</Title>
      <Title as="h4">{children}</Title>
      <Title as="h5">{children}</Title>
      <Title as="h6">{children}</Title>
    </Box>
  ),
};
