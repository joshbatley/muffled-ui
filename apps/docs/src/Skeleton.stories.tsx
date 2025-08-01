import { StoryObj } from '@storybook/react';
import { Box, Skeleton, Text, Title } from '@muffled-ui/react';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    varient: { table: { disable: true } },
  },
  parameters: {
    backgrounds: { default: 'White' },
  },
};

export const Circle: StoryObj<typeof Skeleton> = {
  render: ({ ...rest }) => (
    <Skeleton variant="circle" w="50" h="50" {...rest} />
  ),
};

export const Rectangle: StoryObj<typeof Skeleton> = {
  render: ({ ...rest }) => (
    <Skeleton variant="rectangle" w="50" h="50" {...rest} />
  ),
};

export const TextStory: StoryObj<typeof Skeleton> = {
  render: ({ ...rest }) => (
    <Box
      spaceY="6"
      display="inline-flex"
      flexDirection="column"
      w="100%"
    >
      <Title as="h1">
        <Skeleton mr="1" w="25%" variant="text" {...rest} />
        <span>Heading 1</span>
      </Title>

      <Title as="h2">
        <Skeleton w="25%" mr="1" variant="text" {...rest} />
        <span>Heading 2</span>
      </Title>

      <Title as="h3">
        <Skeleton w="25%" mr="1" variant="text" {...rest} />
        <span>Heading 3</span>
      </Title>

      <Title as="h4">
        <Skeleton w="25%" mr="1" variant="text" {...rest} />
        <span>Heading 4</span>
      </Title>

      <Title as="h5">
        <Skeleton w="25%" mr="1" variant="text" {...rest} />
        <span>Heading 5</span>
      </Title>

      <Title as="h6">
        <Skeleton w="25%" mr="1" variant="text" {...rest} />
        <span>Heading 6</span>
      </Title>

      <Text>
        <Skeleton w="25%" mr="1" variant="text" {...rest} />
        <span>Text</span>
      </Text>
    </Box>
  ),
};
