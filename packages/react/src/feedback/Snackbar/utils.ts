import { IntercardinalPoints } from '../../types';

export const createId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const getPosition = (position: IntercardinalPoints): {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  flexDirection: 'column' | 'column-reverse';
} => {
  switch (position) {
    case 'NE':
      return {
        top: 0,
        right: 0,
        flexDirection: 'column',
      };
    case 'NW':
      return {
        top: 0,
        left: 0,
        flexDirection: 'column',
      };
    case 'SE':
      return {
        right: 0,
        bottom: 0,
        flexDirection: 'column-reverse',
      };
    case 'SW':
      return {
        left: 0,
        bottom: 0,
        flexDirection: 'column-reverse',
      };
  }
};
