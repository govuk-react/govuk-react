import { addDecorator, addParameters, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import 'storybook-chromatic';

addDecorator(
  withOptions({
    name: 'govuk-react',
    sortStoriesByKind: true,
    url: 'https://github.com/govuk-react/govuk-react'
  })
);

addParameters({
  chromatic: { viewports: [320, 1200] },
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
