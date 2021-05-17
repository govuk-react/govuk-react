import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
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
