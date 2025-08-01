import { x } from '@xstyled/styled-components';

export const UnorderedList: React.FC<React.ComponentPropsWithRef<'ul'>> = (props) => (
  <x.ul
    listStyleType="disc"
    listStylePosition="inside"
    {...props}
  />
);
