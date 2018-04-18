import { configure } from '@storybook/react';
import 'react-chromatic/storybook-addon';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
