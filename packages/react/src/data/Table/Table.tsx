import { forwardRef } from 'react';
import { x } from '@xstyled/styled-components';
import { Box } from '../Box';

export type TableProps = {
  containerClasses?: string;
  footer?: React.ReactNode;
} & React.ComponentPropsWithRef<'table'>;

export const Table = forwardRef<HTMLTableElement, TableProps>(({ children, containerClasses, footer, ...rest }, ref) => (
  <Box>
    <x.div
      bg="background"
      border="1px solid"
      borderColor="border"
      borderRadius={3}
      style={{
        contain: 'paint',
      }}
    >
      <x.table
        ref={ref}
        w="100%"
        position="relative"
        borderCollapse="collapse"
        css={{
          '> :not([hidden]) ~ :not([hidden]) & :not(:last-child)': {
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderColor: 'border',
          },
        }}
        {...rest}
      >
        {children}
      </x.table>
    </x.div>
    {footer}
  </Box>
));
