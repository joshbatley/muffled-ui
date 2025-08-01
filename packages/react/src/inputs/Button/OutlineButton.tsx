import { forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type OutlineButtonProps = BaseButtonProps & React.ComponentPropsWithRef<'button'>;

export const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(({ children, ...rest }, ref) => (
  <BaseButton
    bg="background"
    boxShadow="base.0"
    border="border.1"
    color="foreground"
    lineHeight="18px"
    opacity={{ '&:disabled': '0.4' }}
    ref={ref}
    {...rest}
  >
    {children}
  </BaseButton>
));
