import '../src/fonts.css';
import '../src/global.css';

import type { Decorator, Preview } from '@storybook/react';

export const tags: Preview['tags'] = ['autodocs'];

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';
  document.documentElement.setAttribute('data-theme', theme);

  return Story(context.args);
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          '🏠 Welcome',
          'Buttons',
          'FormControls',
          'Foundations',
          'Navigation',
          'DataDisplay',
          'Feedback',
          'Surfaces',
        ],
      },
      controls: { expanded: true },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme switcher',
      default: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'light-premium', 'dark', 'dark-premium'],
        showName: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
