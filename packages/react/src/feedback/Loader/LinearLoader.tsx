import { x } from '@xstyled/styled-components';
import { LinearSlide } from '../../utils';
import { Box } from '../../data';

export type LinearLoaderProps = {
  height?: string | number;
  destructive?: boolean;
};

export const LinearLoader: React.FC<LinearLoaderProps> = ({ height = 5, destructive = false }) => (
  <Box overflow="hidden" w="100%" position="relative" borderRadius="8" style={{ height }}>
    <x.div
      borderRadius={2}
      w="100%"
      h="100%"
      position="absolute"
      top="0px"
      right="0px"
      bottom="0px"
      left="0px"
      opacity="0.1"
      bg={destructive ? 'destructive' : 'primary'}
    />
    <LinearSlide
      width="33.333333%"
      height="100%"
      position="absolute"
      top="0px"
      right="0px"
      bottom="0px"
      left="0px"
    >
      <x.div
        borderRadius={2}
        bg={destructive ? 'destructive' : 'primary'}
        style={{ height }}
      />
    </LinearSlide>
  </Box>
);
