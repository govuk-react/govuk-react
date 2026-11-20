import type { Preview } from '@storybook/react-vite';
import 'govuk-frontend/dist/govuk/govuk-frontend.min.css';
import '../../primitives/src/styles.css';
import '../../govuk-react/src/styles.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Example Application',
          'Form',
          'Typography',
          'Page & Layout',
          'Navigation',
          'Utility',
          'Docs',
        ],
      },
    },
  },
};

export default preview;
