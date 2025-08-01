import { Text } from '../../data/Text';
import type {
  BackgroundsProps, BordersProps,
  CursorProps,
  FontSizeProps,
  LineHeightProps,
  SpaceProps,
} from '@xstyled/styled-components';

type ListItemProps = React.ComponentPropsWithRef<'li'> & BackgroundsProps & SpaceProps & CursorProps & FontSizeProps & LineHeightProps & BordersProps;

export const ListItem: React.FC<ListItemProps> = ({ children, ...rest }) => (
  <Text as="li" {...rest}>{children}</Text>
);
