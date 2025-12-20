import type { Preview } from "@storybook/react-vite";
import { themes } from "storybook/theming";

// @ts-expect-error it works
import LogoLight from '/src/assets/logo-light.svg';
// @ts-expect-error it works
import LogoDark from '/src/assets/logo-dark.svg';
import {ThemeWrapper} from "./ThemeWrapper.tsx";

import "@muffled-ui/ui-web/globals.css"

const preview: Preview = {
  decorators: ThemeWrapper,
  parameters: {
    darkMode: {
      dark: { ...themes.dark, brandImage: LogoDark, },
      light: { ...themes.light, brandImage: LogoLight, }
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
