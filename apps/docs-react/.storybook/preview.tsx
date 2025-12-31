import type { Preview } from "@storybook/react-vite";
import { themes } from "storybook/theming";
import {ThemeWrapper} from "./ThemeWrapper.tsx";

// @ts-expect-error it works
import LogoLight from '/src/assets/logo-light.svg';
// @ts-expect-error it works
import LogoDark from '/src/assets/logo-dark.svg';

import '@muffled-ui/react/styled.css'


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


const preview: Preview = {
  decorators: ThemeWrapper,
  parameters: {
    darkMode: {
      classTarget: 'html',
      dark: darkTheme,
      light: lightTheme
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
