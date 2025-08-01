import { Box, BoxProps } from '../../data';
import { WithChildren } from '../../types';

export const CenteredWidget: React.FC<BoxProps & WithChildren> = ({ children, ...rest }) => (
  <Box display="flex" alignItems="center" justifyItems="center" h="100vh">
    <Box m="0 auto" w="36rem" {...rest as any}>{children}</Box>
  </Box>
);
