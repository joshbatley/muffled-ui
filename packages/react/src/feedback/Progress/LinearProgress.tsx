import { x } from '@xstyled/styled-components';
import { Box } from '../../data';

export type LinearProgressProps = {
  height?: string | number;
  percentage?: number;
};

export const LinearProgress: React.FC<LinearProgressProps> = ({ height = 5, percentage = 0 }) => (
  <Box overflow="hidden" w="100%" position="relative" borderRadius="8" style={{ height }}>
    <x.div
      borderRadius={8}
      w="100%"
      h="100%"
      position="absolute"
      top="0px"
      right="0px"
      bottom="0px"
      left="0px"
      opacity="0.1"
      bg="foreground"
    />
    <x.div
      borderRadius={2}
      h="100%"
      w={`${percentage}%`}
      position="absolute"
      top="0px"
      right="0px"
      bottom="0px"
      left="0px"
      bg="foreground"
    />
  </Box>
);

