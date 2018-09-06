import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReadMeHidePreview } from '@govuk-react/storybook-components';
import 'normalize.css';
import './styles.css';
import ReadMe from '../../../../README.md';

if (!navigator.userAgent.match(/Chromatic/)) {
  const stories = storiesOf(' Welcome', module);
  stories.addDecorator(ReadMeHidePreview(ReadMe));
  stories.add('to govuk-react', () => <div />);
}
const req = require.context('../../../../', true, /(packages|components)\/[^/]+\/src\/([^/]+\/)*stories.js$/);
req.keys().forEach(req);
