<img width="100" alt="logo" src="./assets/click-react-ui-kit.svg" />

# WebView UI Kit

![npm version](https://img.shields.io/npm/v/webview-ui-kit)  
![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

WebView UI Kit is a React component library designed specifically for WebView-based applications. It provides a set of customizable, production-ready UI components and a live Storybook for development and documentation.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Component Structure](#component-structure)
- [Styling](#styling)
- [Development](#development)
- [Contributing](#contributing)
- [Authors](#authors)
- [Design](#design)
- [License](#license)

---

## Features

- ✅ Fully typed with TypeScript
- ✅ SCSS modules support
- ✅ Live component playground via Storybook
- ✅ Peer dependencies on React 19
- ✅ Permissively licensed (MIT) for commercial use

---

## Demo

Run the Storybook server locally to explore all components and their variants:

```bash
npm run storybook
```
---
## Installation

Install the package from npm:

```bash

npm install webview-ui-kit
# or
pnpm add webview-ui-kit
```

---

## Usage
Import only the components you need:

```typescript jsx
import React from 'react';
import { Button, Input } from 'webview-ui-kit';

export const Example = () => (
  <>
    <Button onClick={() => alert('Clicked!')}>Click me</Button>
    <Input placeholder="Type here..." />
  </>
);
```

---

## Styling

Import base styles once in your application’s entry point:
```typescript jsx
import 'webview-ui-kit/fonts.css';
import 'webview-ui-kit/styles';
```
---

## Development

Clone the repo and install dependencies:

git clone https://github.com/click-uz/webview-ui-kit.git
cd webview-ui-kit
npm install

- Run Storybook: npm run storybook
- Build library: npm run build
- Lint & format: npm run lint / npm run format
- Type check: npm run typecheck

---

## Contributing

We welcome contributions! Please follow these steps:
	1.	Fork the repository.
	2.	Create a feature branch:

git checkout -b feat/my-component

3. Make your changes and add tests if applicable.
4. Ensure linting and type checks pass:

```bash
npm run lint
npm run typecheck
```


5. Commit your work and push to your fork.
6. Open a pull request describing your changes.

Please read our CODE_OF_CONDUCT.md before contributing.

---

## License

MIT License
© 2025 Click.uz

See [LICENSE](./LICENSE.md) for full details.