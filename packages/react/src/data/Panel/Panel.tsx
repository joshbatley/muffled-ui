import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box';

export const Panel = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    ref={ref}
    borderRadius={4}
    border="border.1"
    bg="offsetBackground"
    {...props}
  />
));
