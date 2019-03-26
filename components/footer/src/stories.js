import React from 'react';
import { storiesOf } from '@storybook/react';
// TODO: remove comments for documentation once docs have been generated
// import { WithDocsCustom } from '@govuk-react/storybook-components';

import Footer from '.';

// import ReadMe from '../README.md';

const stories = storiesOf('Footer', module);

stories.add(
  'Component default',
  // WithDocsCustom(
  //   ReadMe,
    () => (
      <Footer>Footer example</Footer>
    ),
  // ),
);
