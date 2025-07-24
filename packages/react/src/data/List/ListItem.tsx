import { Text } from '../../data/Typography';

export const ListItem: React.FC<React.ComponentPropsWithRef<'li'>> = ({ children, ...rest }) => (
  <Text as="li" {...rest}>{children}</Text>
);
