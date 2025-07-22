/** @type { import('@storybook/react').Preview } */

import { muffledUI, usemuffledSettings } from '@muffled-ui/react'
import { UPDATE_DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';
import { darkTheme, lightTheme } from './themes';
import { addons } from '@storybook/preview-api';
import React from 'react';

const channel = addons.getChannel();

const Comp: React.FC<{ isDark?: boolean, children: any }> = ({ children, isDark }) => {
  const { theme, setTheme } = usemuffledSettings();

  React.useEffect(() => {
    channel.emit(UPDATE_DARK_MODE_EVENT_NAME, theme === 'Dark' ? 'dark' : 'light');
  }, [theme])

  React.useEffect(() => {
    setTheme(isDark ? 'Dark' : 'Light');
  }, [isDark])

  return (
    <div>{children}</div>
  )
}

const decorators = [
  (Story: any, context: any) => {
    if (!document.getElementById('portal-root')) {
      let portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal-root')
      document.body.appendChild(portalRoot);
    }
    const isDark = useDarkMode();

    return (
      <muffledUI>
        <Comp isDark={isDark}>
          {Story()}
        </Comp>
      </muffledUI>
    )
  },
];


const preview = {
  decorators: decorators,
  parameters: {
    darkMode: {
      light: lightTheme,
      dark: darkTheme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export default preview;
