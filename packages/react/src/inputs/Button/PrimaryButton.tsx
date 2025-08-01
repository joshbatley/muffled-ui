import { forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type PrimaryButtonProps = BaseButtonProps & React.ComponentPropsWithRef<'button'>;

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(({
  children, ...rest
}, ref) => (
  <BaseButton
    color="background"
    bg="primary"
    ref={ref}
    opacity={{ '&:hover': 0.8, '&:disabled': 0.8 }}
    {...rest}
  >
    {children}
  </BaseButton>
));
