import { x } from '@xstyled/styled-components';
import { forwardRef } from 'react';

export type TableRowProps = {
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
} & React.ComponentPropsWithRef<'tr'>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ active, onClick, ...props }, ref) => (
  <x.tr
    ref={ref}
    cursor={typeof onClick === 'function' || active ? 'pointer' : undefined}
    bg={{ '': active ? 'accent' : undefined, '&:hover': typeof onClick === 'function' ? 'accent' : undefined }}
    onClick={onClick}
    {...props}
  />
));
