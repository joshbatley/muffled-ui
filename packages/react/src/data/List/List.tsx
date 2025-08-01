import { x } from '@xstyled/styled-components';

export const List: React.FC<React.ComponentPropsWithRef<'ul'>> = (props) => (
  <x.ul
    listStylePosition="inside"
    listStyleType="none"
    {...props}
  />
);
