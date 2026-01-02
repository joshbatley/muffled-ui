import type { StorybookConfig } from '@storybook/react-vite'

import { dirname } from 'path'

import { fileURLToPath } from 'url'

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const isProd = process.env.NODE_ENV === 'production'

const managerHead = (head: string | undefined) => `
  ${head}
  <link rel="icon" href="/muffled-favicon.svg" type="image/svg+xml" sizes="any">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styled.css">
`

const managerHeadProd = (head: string | undefined) => `
  ${managerHead(head)}
  <base href="/react/">
`

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@vueless/storybook-dark-mode'),
  ],
  staticDirs: ['../public'],
  framework: getAbsolutePath('@storybook/react-vite'),
  managerHead: head => isProd ? managerHeadProd(head) : managerHead(head),
}

export default config
