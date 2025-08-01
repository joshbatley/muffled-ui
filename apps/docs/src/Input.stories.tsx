import { StoryObj } from '@storybook/react';
import { CodeBracketIcon, LockClosedIcon, CalendarIcon, EyeIcon } from '@heroicons/react/24/solid';
import {
  Box,
  ClickableElement,
  Password as PasswordComp,
  Text,
  Input,
  NumberField,
} from '@muffled-ui/react';

export default {
  title: 'Inputs/Input',
  component: Input,
  args: {
    placeholder: 'Email',
  },
};

const Before = ({ ...rest }) => (
  <ClickableElement px="3" py="2" onClick={() => alert('boo')} {...rest}>
    https://
  </ClickableElement>
);
const After = ({ ...rest }) => (
  <Box px="3" py="2">
    <Text {...rest}>.com</Text>
  </Box>
);

export const Showcase: StoryObj<typeof Input> = {
  render: ({ ...rest }) => <Box w="320px"><Input {...rest} /></Box>,
};

export const WithIcons: StoryObj<typeof Input> = {
  render: ({ ...rest }) => (
    <Box spaceY="2" w="320px">
      <Input prefixMarkIcon={<CalendarIcon width={16} />} {...rest} />
      <Input suffixMarkIcon={<CodeBracketIcon width={16} />} {...rest} />
      <Input
        prefixMarkIcon={<LockClosedIcon width={16} />}
        suffixMarkIcon={<CodeBracketIcon width={16} />}
        {...rest}
      />
    </Box>
  ),
};

export const WithAddons: StoryObj<typeof Input> = {
  render: ({ ...rest }) => (
    <Box spaceY="2" w="320px">
      <Input before={<Before />} {...rest} />
      <Input after={<After />} {...rest} />
      <Input before={<Before />} after={<After />} {...rest} />
    </Box>
  ),
};

export const AsPassword: StoryObj<typeof PasswordComp> = {
  render: ({ ...rest }) => <Box w="320px"><PasswordComp {...rest} /></Box>,
};

export const AsNumber: StoryObj<typeof NumberField> = {
  render: ({ ...rest }) => <Box w="320px"><NumberField {...rest} /></Box>,
};

export const Disabled: StoryObj<typeof Input> = {
  render: ({ ...rest }) => (
    <Box spaceY="2" w="320px">
      <Input disabled {...rest} />
      <Input
        disabled
        prefixMarkIcon={<LockClosedIcon width={16} />}
        {...rest}
      />
      <Input disabled suffixMarkIcon={<EyeIcon width={16} />} {...rest} />
      <Input disabled before={<Before />} {...rest} />
      <Input disabled after={<After />} {...rest} />
      <Input disabled before={<Before />} after={<After />} {...rest} />
    </Box>
  ),
};


