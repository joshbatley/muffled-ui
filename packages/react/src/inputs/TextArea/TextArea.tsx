import { x } from '@xstyled/styled-components';
import type {
  ColorProps, SpaceProps, LayoutProps, BoxShadowProps, BordersProps, TypographyProps, SizingProps,
} from '@xstyled/styled-components';
import { forwardRef } from 'react';

export type TextAreaProps = ColorProps & SpaceProps & LayoutProps & BoxShadowProps
  & BordersProps & TypographyProps & SizingProps
  & React.ComponentPropsWithRef<'textarea'>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ ...rest }, ref) => (
  <x.textarea
    ref={ref}
    boxShadow="base.0"
    border="border.1"
    padding={2}
    w="100%"
    minHeight={16}
    bg="background"
    fontSize={1}
    lineHeight={1}
    borderRadius={3}
    outline={{ '&:focus': '2px solid transparent' }}
    outlineOffset={{ '&:focus': '2px' }}
    borderColor={{ '&:focus': 'primary' }}
    zIndex={{ '&:focus': 10 }}
    {...rest}
  />
));
