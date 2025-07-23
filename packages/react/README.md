<p align="center">
  <img src="/public/logo-dark.svg#gh-dark-mode-only" height="128"/>
  <img src="/public/logo-light.svg#gh-light-mode-only" height="128"/>
</p>
<div align="center">

[![Build][build-image]][build-url] [![NPM Version][version-image]][version-url] [![License][license-image]][license-url] [![Bundle Size][size-image]][size-url]

[build-image]: https://img.shields.io/github/actions/workflow/status/joshbatley/muffled-ui/publish-npm.yml

[build-url]: https://github.com/joshbatley/muffled-ui/actions

[version-image]: https://img.shields.io/npm/v/@muffled-ui/react

[version-url]: https://www.npmjs.com/package/@muffled-ui/react

[license-image]: https://img.shields.io/github/license/joshbatley/muffled-ui

[license-url]: https://github.com/joshbatley/muffled-ui/blob/main/LICENSE

[size-image]: https://img.shields.io/bundlephobia/min/%40muffled-ui%2Freact%40latest

[size-url]: https://bundlephobia.com/package/@muffled-ui/react

</div>

## Getting Started

### Installation

Follow these steps to add Muffled UI to your React project:

#### Install Muffled UI

```bash
# Using npm
npm install @muffled-ui/react

# Using yarn
yarn add @muffled-ui/react

# Using pnpm
pnpm add @muffled-ui/react
```

### Usage

Import and use components in your React application:

```jsx
import {Button, Card, Input} from '@muffled-ui/react';

function MyComponent() {
  return (
    <Card>
      <CardContent>
        <h2>Login Form</h2>
      </CardContent>
      <CardContent>
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <Button variant="primary">
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
}
```

## Package used

- React - Framework of choice
- Typescript - Types!!!
- Heroicons - for the few icons needed
- Downshift - a easy to use API for our select element
- React-datepicker - for the datepicker api
- Date-fns - the datepicker date library of choice
- Prism-react-renderer & react-simple-code-editor - for the code editor and syntax highlighter
- React-dropzone - for the file uploader
- React-spring - for any animation/transitions
- React-popper - for tooltip and popover API
- Storybooks - for the docs

## License

This library is MIT licensed.
