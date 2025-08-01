import { x } from '@xstyled/styled-components';
import { Text } from '../../data';
import { WithChildren } from '../../types';

export type ChipProps = {
  destructive?: boolean;
} & WithChildren;

type ContainerProps = {
  destructive?: boolean;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ destructive, children }) => (
  <x.div
    borderRadius={3}
    display="inline-flex"
    justifyContent="center"
    alignItems="center"
    w="fit-content"
    padding="calc(0.25rem / 2) 2"
    fontSize={0}
    lineHeight={0}
    fontWeight={700}
    color={destructive ? 'destructiveForeground' : 'primaryForeground'}
    bg={destructive ? 'destructive' : 'primary'}
    marginLeft={{ '> :not([hidden]) ~ :not([hidden])':'0.5rem' }}
  >
    {children}
  </x.div>
);

export const Chip: React.FC<ChipProps> = ({
  destructive, children,
}) => (
  <Container destructive={destructive}>
    <Text>{children}</Text>
  </Container>
);

