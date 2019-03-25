import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Breadcrumbs from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Navigation/Breadcrumbs', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Breadcrumbs>
    <Breadcrumbs.Link href="/section">Section</Breadcrumbs.Link>
    <Breadcrumbs.Link href="/section/sub-section">Sub-section</Breadcrumbs.Link>
    Current page
  </Breadcrumbs>
));
