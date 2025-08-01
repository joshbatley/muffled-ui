import { StoryObj } from '@storybook/react';
import { UserIcon } from '@heroicons/react/24/solid';
import { Badge } from '@muffled-ui/react';
import { Box } from '@muffled-ui/react';

export default {
  title: 'Feedback/Badge',
  component: Badge,
  args: {
    tag: '100+',
  },
};

export const Showcase: StoryObj<typeof Badge> = {
  render: ({ ...rest }: any) => (
    <Box w="50%" mt="10" mx="auto">
      <Box mt="4" display="grid" justifyItems="start" gridTemplateColumns="repeat(4, 1fr)" gridTemplateRows="repeat(2, 1fr)" gap="10px">
        <Badge position="NW" {...rest}>
          <Box p="2" borderRadius="4" border="border.1" bg="background" w="40px">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
        <Badge position="N" {...rest}>
          <Box p="2" borderRadius="4" border="border.1" bg="background" w="40px">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
        <Badge position="NE" {...rest}>
          <Box p="2" borderRadius="4" border="border.1" bg="background" w="40px">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
        <Badge position="E" {...rest}>
          <Box p="2" borderRadius="4" border="border.1" bg="background" w="40px">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
        <Badge position="W" {...rest}>
          <Box p="2" borderRadius="4" border="border.1" bg="background" w="40px">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
        <Badge position="SW" {...rest}>
          <Box p="2" borderRadius="4" border="border.1" bg="background" w="40px">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
        <Badge position="S" {...rest}>
          <Box p="2" borderRadius="4" border="border.1" bg="background" w="40px">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
        <Badge position="SE" {...rest}>
          <Box p="2" borderRadius="4" border="border.1" bg="background" w="40px">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
      </Box>
    </Box>
  ),
};
