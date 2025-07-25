import { StoryObj } from '@storybook/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Breadcrumbs } from '@muffled-ui/react';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
};

export const Showcase: StoryObj<typeof Breadcrumbs> = {
  render: ({ ...rest }) => (
    <Breadcrumbs {...rest}>
      <a href="#">muffled</a>
      <a href="#">Navigation</a>
      <a href="#">Breadcrumbs</a>
    </Breadcrumbs>
  ),
};

export const CustomDividers: StoryObj<typeof Breadcrumbs> = {
  render: ({ ...rest }) => (
    <Breadcrumbs
      dividerIcon={<ChevronRightIcon width="16px" height="16px" />}
      {...rest}
    >
      <a href="#">With</a>
      <a href="#">A</a>
      <a href="#">Custom</a>
    </Breadcrumbs>
  ),
};

export const CollaspsedBreadcrumbs: StoryObj<typeof Breadcrumbs> = {
  render: ({ ...rest }) => (
    <Breadcrumbs maxItems={4} {...rest}>
      <a href="#">With hidden</a>
      <a href="#">now</a>
      <a href="#">you</a>
      <a href="#">see</a>
      <a href="#">me</a>
      <a href="#">Items</a>
    </Breadcrumbs>
  ),
};
