import styled, { x } from '@xstyled/styled-components';
import { Box } from '../../data';

export type BaseControlProps = {
  labelText?: string;
  icon: React.ReactElement;
  rounded?: boolean;
} & React.ComponentPropsWithRef<'input'>;

const Label = styled.label<{ disabled: boolean; checked?: boolean; }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
  svg {
    color: transparent;
    z-index: 10;
    position: relative;
  }
  div > svg {
    color: background;
  }

  :hover div  {
    background: foreground;
  }

  :hover div > svg {
    color: input;
  }
`;

export const BaseControl: React.FC<BaseControlProps> = ({
  labelText, icon, rounded = false, disabled = false, ...rest
}) => (
  <Label disabled={disabled} checked={rest.checked}>
      <x.div
        position="relative"
        w="4"
        h="4"
        border="border.1"
        bg="background"
        overflow="hidden"
        boxShadow="base.1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr="2"
        borderRadius={rounded ? '8' : '2'}
        opacity={disabled ? 0.5 : 1}
      >
        <x.input display="none" disabled={disabled} {...rest}></x.input>
        <Box bg={rest.checked ? 'primary' : 'background'} w="100%" h="100%" position="absolute" />
        <Box color={ disabled ? 'mutedForeground' : 'foreground' }>{icon}</Box>
      </x.div>
    {labelText}
  </Label>
);


