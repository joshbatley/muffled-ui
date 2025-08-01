import { x } from '@xstyled/styled-components';

export const OrderedList: React.FC<React.ComponentPropsWithRef<'ol'>> = (props) => (
  <x.ol
    listStyleType="decimal"
    listStylePosition="inside"
    {...props}
  />
);
