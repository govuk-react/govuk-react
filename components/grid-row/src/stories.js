import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Layout from '@govuk-react/layout';
import GridRow from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Layout/GridRow', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('GridRow', () => (
  <Layout>
    <GridRow>GridRow example. Please see Layout for visual examples</GridRow>
  </Layout>
));
