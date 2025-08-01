import styled, { x } from '@xstyled/styled-components';
import { Box } from '../../data';

export type SwitchProps = React.ComponentPropsWithRef<'input'>;

const Backing = styled(Box)<{ checked?: boolean }>`
  box-shadow: ${({ checked, theme }) => checked ? theme.colors.primary + ' 0 0 0 2px' : theme.colors.input + ' 0 0 0 2px'}
`;

export const Switch: React.FC<SwitchProps> = ({ disabled = false, ...rest }) => (
  <x.label position="relative" display="inline-flex" alignItems="center" cursor={disabled ? 'not-allowed' : 'pointer'} h="4" w="8" opacity={disabled ? 0.4 : 1}>
    <x.input display="none" type="checkbox" disabled={disabled} {...rest} />
    <Backing
      w="100%"
      h="4"
      borderRadius="8"
      position="absolute"
      bg={rest.checked ? 'primary' : 'input'}
      checked={rest.checked} />
    <x.div
      bg="background"
      position="absolute"
      borderRadius="8"
      boxShadow="base.1"
      right={rest.checked ? '0%' : '100%'}
      transitionProperty="all"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      transitionDuration="150ms"
      transform={rest.checked ?  'translateX(0%)' : 'translateX(100%)'}
      w="4"
      h="4"
    />
  </x.label>
);
