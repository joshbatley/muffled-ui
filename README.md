<p align="center">
  <img src="/public/logo-dark.svg#gh-dark-mode-only" height="128"/>
  <img src="/public/logo-light.svg#gh-light-mode-only" height="128"/>
</p>

<div align="center">

[![License][license-image]][license-url]

[license-image]: https://img.shields.io/github/license/joshbatley/muffled-ui
[license-url]: https://github.com/joshbatley/muffled-ui/blob/main/LICENSE

</div>

# Muffled UI

Muffled UI is a React component library providing a set of accessible and customizable UI components for modern web applications.

## Features

- 🚀 **React Components**: A collection of reusable React components
- 📚 **Storybook Documentation**: Comprehensive documentation with Storybook
- 🧩 **Modular**: Use only the components you need
- 📱 **Responsive**: Designed to work on all device sizes
- ♿ **Accessible**: Built with accessibility in mind

## Project Structure

This project is organized as a monorepo using pnpm workspaces:

### Packages

- [React](/packages/react) - The main React UI component library

### Apps

- [Docs](/apps/docs) - Storybook documentation site for the components
- [Web](/apps/web) - Demo application showcasing the components

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm 9.1.4 or higher

### Installation

Install the Muffled UI package:

```bash
# Using npm
npm install @muffled-ui/react

# Using yarn
yarn add @muffled-ui/react

# Using pnpm
pnpm add @muffled-ui/react
```

### Usage

```jsx
import { Button } from '@muffled-ui/react';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click Me
    </Button>
  );
}
```

## Development

To develop Muffled UI locally:

```bash
# Clone the repository
git clone https://github.com/joshbatley/muffled-ui.git
cd muffled-ui

# Install dependencies
pnpm install

# Start the documentation site (Storybook)
pnpm dev
```

## License

This project is MIT licensed.
