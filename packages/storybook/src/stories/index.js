import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';
import StoryPreview from './story-preview';

import 'normalize.css';
import './styles.css';
import ReadMe from '../../../../README.md';

if (!navigator.userAgent.match(/Chromatic/)) {
  const stories = storiesOf(' Welcome', module);
  stories.addDecorator(addReadme);
  stories.addParameters({
    readme: {
      content: ReadMe,
      StoryPreview: () => null,
    },
  });
  stories.add('to govuk-react', () => <div />);
}

configureReadme({ StoryPreview });
