import { forwardRef } from 'react';
import { styled, th } from '@xstyled/styled-components';
import { darken } from 'polished';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type DestructiveButtonProps = BaseButtonProps & React.ComponentPropsWithRef<'button'>;

export const DestructiveButton = forwardRef<HTMLButtonElement, DestructiveButtonProps>(({
  children, ...rest
}, ref) => (
  <BaseButton
    color="destructiveForeground"
    bg="destructive"
    opacity={{ '&:disabled': '0.8' }}
    ref={ref}
    {...rest}
  >
    {children}
  </BaseButton>
));
