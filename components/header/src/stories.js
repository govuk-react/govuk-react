import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Header from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Header', module);
const headingRanges = {
  range: true,
  min: 1,
  max: 6,
  step: 1,
};

stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Header level={number('level', 2, headingRanges)}>{text('Children', 'Heading text')}</Header>
));
