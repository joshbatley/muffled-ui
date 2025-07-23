import { themes } from '@storybook/theming';
import LogoLight from '../public/logo-light.svg';
import LogoDark from '../public/logo-dark.svg';

export const lightTheme = {
  ...themes.light,
  base: 'light',
  brandTitle: 'Muffled UI',
  brandUrl: 'https://github.com/joshbatley/muffled-ui',
  brandImage: LogoLight,
  appBg: 'hsl(0, 0%, 100%)',
  appContentBg: 'hsl(0, 0%, 100%)',
  barBg: 'hsl(0, 0%, 100%)',
}

export const darkTheme = {
  ...themes.dark,
  base: 'dark',
  brandTitle: 'Muffled UI',
  brandUrl: 'https://github.com/joshbatley/muffled-ui',
  brandImage: LogoDark,
  appBg: 'hsl(220, 15%, 10%)',
  appContentBg: 'hsl(220, 15%, 10%)',
  barBg: 'hsl(220, 15%, 10%)',
};
