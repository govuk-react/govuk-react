import { configure } from '@storybook/react';
import 'react-chromatic/storybook-addon';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'govuk-react',
  sortStoriesByKind: true,
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
