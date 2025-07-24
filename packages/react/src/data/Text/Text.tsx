import styled from 'styled-components';
import { color, ColorProps, typography, TypographyProps as Q } from 'styled-system';

export type TextProps = {
  mono?: boolean;
} & ColorProps & Q;

export const Text = styled.p<TextProps>`
  font-family: ${({ mono, theme }) => mono ? theme.fonts.mono : ''};
  ${color}
  ${typography}
`;
