import { addParameters, configure } from '@storybook/react';
import { configureReadme } from 'storybook-readme';
import { StoryPreview } from '@govuk-react/storybook-components';
import 'storybook-chromatic';

addParameters({
  chromatic: { viewports: [320, 1200] },
  options: {
    brandTitle: 'govuk-react',
    sortStoriesByKind: true,
    brandUrl: 'https://github.com/govuk-react/govuk-react'
  }
});

configureReadme({ StoryPreview });

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
