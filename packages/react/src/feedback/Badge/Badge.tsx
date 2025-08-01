import {  x } from '@xstyled/styled-components';
import { Box } from '../../data';
import { Position, WithChildren } from '../../types';

export type BadgeProps = {
  position?: Position;
  tag: React.ReactNode;
  destructive?: boolean;
} & WithChildren;

const getPosition = (position: Position) => {
  switch (position) {
    case 'N':
      return {
        top: 0,
        right: '50%',
        transform: 'translateY(-50%) translateX(50%)',
      };
    case 'NE':
      return {
        top: 0,
        right: 0,
        transform: 'translateY(-50%) translateX(50%)',
      };
    case 'E':
      return {
        top: '50%',
        right: 0,
        transform: 'translateY(-50%) translateX(50%)',
      };
    case 'NW':
      return {
        top: 0,
        left: 0,
        transform: 'translateY(-50%) translateX(-50%)',
      };
    case 'SE':
      return {
        right: 0,
        bottom: 0,
        transform: 'translateY(50%) translateX(50%)',
      };
    case 'S':
      return {
        left: '50%',
        top: '50%',
        transform: 'translateY(50%) translateX(-50%)',
      };
    case 'SW':
      return {
        left: 0,
        bottom: 0,
        transform: 'translateY(50%) translateX(-50%)',
      };
    case 'W':
      return {
        right: 0,
        top: 0,
        transform: 'translateY(50%) translateX(-50%)',
      };
  }
};

type BadgeItemProps = {
  position: Position;
  destructive: boolean;
  children?: React.ReactNode;
};

const BadgeItem: React.FC<BadgeItemProps> = ({ position, destructive, children }) => {
  const positionStyles = getPosition(position);

  return (
    <x.div
      position="absolute"
      borderRadius={8}
      fontSize={0}
      lineHeight={0}
      textAlign="center"
      color={destructive ? 'destructiveForeground' : 'primaryForeground'}
      bg={destructive ? 'destructive' : 'primary'}
      minWidth="fit-content"
      w={{ '':5, ':empty': 1 }}
      padding="calc(0.25rem / 2) 2"
      h={{ '': 'initial', ':empty': 2 }}
      zIndex={9999}
      {...positionStyles}
    >
      {children}
    </x.div>
  );
};

export const Badge: React.FC<BadgeProps> = ({ position = 'NE', children, tag, destructive = false }) => (
  <Box display="inline-block" position="relative" w="fit-content">
    <BadgeItem position={position} destructive={destructive}>
      {tag}
    </BadgeItem>
    {children}
  </Box>
);
