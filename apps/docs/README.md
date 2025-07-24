# Muffled UI Documentation

This is the Storybook documentation site for Muffled UI, a React component library. The documentation provides examples, usage guidelines, and API references for all the components in the library.

## Getting Started

To run the documentation site locally:

```bash
# Using pnpm
pnpm dev

# Using yarn
yarn dev

# Using npm
npm run dev
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the Storybook documentation.

## Features

- **Component Showcase**: Interactive examples of all Muffled UI components
- **API Documentation**: Detailed API references for each component
- **Theme Customization**: Examples of how to customize the components
- **Accessibility Guidelines**: Information about the accessibility features of each component
- **Dark Mode Support**: Toggle between light and dark mode to see how components appear in different themes

## Adding Documentation

To add or update documentation for a component:

1. Create or modify the story file in the appropriate directory
2. Add examples showcasing different variants and use cases
3. Include proper documentation using Storybook's documentation format
4. Test the documentation by running the Storybook server locally

## Building for Production

To build the documentation site for production:

```bash
# Using pnpm
pnpm build

# Using yarn
yarn build

# Using npm
npm run build
```

This will generate static files in the `dist` directory that can be deployed to any static hosting service.
