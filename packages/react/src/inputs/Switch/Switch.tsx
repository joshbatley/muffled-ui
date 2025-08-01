import { x, useTheme } from '@xstyled/styled-components';
import { Box } from '../../data';

export type SwitchProps = React.ComponentPropsWithRef<'input'>;

export const Switch: React.FC<SwitchProps> = ({ disabled = false, ...rest }) => (
  <x.label position="relative" display="inline-flex" alignItems="center" cursor={disabled ? 'not-allowed' : 'pointer'} h="4" w="8" opacity={disabled ? 0.4 : 1}>
    <x.input display="none" type="checkbox" disabled={disabled} {...rest} />
    <Box
      w="100%"
      h="4"
      borderRadius="8"
      position="absolute"
      boxSizing="initial"
      bg={rest.checked ? 'primary' : 'border'}
      border={rest.checked ? 'primary.1' : 'border.1' }
      borderWidth="2"
    />
    <x.div
      bg="background"
      position="absolute"
      borderRadius="8"
      boxShadow="base.1"
      right={rest.checked ? 'calc(0% - 1px)' : 'calc(100% - 2px)'}
      transitionProperty="all"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      transitionDuration="150ms"
      transform={rest.checked ?  'translateX(0%)' : 'translateX(100%)'}
      w="4"
      h="100%"
    />
  </x.label>
);
