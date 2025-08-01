import { x } from '@xstyled/styled-components';
import { forwardRef } from 'react';

export const TableCell = forwardRef<HTMLTableCellElement, React.ComponentPropsWithRef<'td'>>((props, ref) => (
  <x.td
    ref={ref}
    padding="0.625rem 3"
    {...props}
  />
));
