import { forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ButtonProps = {
  active?: boolean;
} & BaseButtonProps & React.ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, disabled, active, color, ...rest }, ref) => (
  <BaseButton
    ref={ref}
    bg={{ '': (active ? 'accent' : 'transparent' ), '&:hover': 'accent' } }
    color={disabled ? 'mutedForeground' : 'foreground'}
    opacity={{ '&:hover': active ? 0.9 : 1 }}
    disabled={disabled}
    {...rest}
  >
    {children}
  </BaseButton>
));

