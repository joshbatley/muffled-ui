import { x } from '@xstyled/styled-components';
import { forwardRef } from 'react';

export const TableBody = forwardRef<HTMLTableSectionElement, React.ComponentPropsWithRef<'tbody'>>((props, ref) => (
  <x.tbody
    ref={ref}
    bg="background"
    borderColor={{ '> :not([hidden]) ~ :not([hidden])': 'border' }}
    borderTopWidth={{ '> :not([hidden]) ~ :not([hidden])': '1px' }}
    {...props}
  />
));
