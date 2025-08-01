import { x } from '@xstyled/styled-components';
import type { ColorProps, TypographyProps, OpacityProps, SizingProps } from '@xstyled/styled-components';
import { AsProp, WithChildren } from '../../types';

export type TextProps = {
  mono?: boolean;
  as?: AsProp;
} & ColorProps & TypographyProps & OpacityProps & WithChildren & SizingProps;

export const Text: React.FC<TextProps> = ({ mono, ...rest }) => (
  <x.p fontFamily={mono ? 'mono' : undefined} {...rest} />
);
