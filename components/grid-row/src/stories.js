import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from '@govuk-react/layout';
import GridRow from '.';

const stories = storiesOf('Layout/GridRow', module);

stories.add('GridRow', () => (
  <Layout>
    <GridRow>GridRow example. Please see Layout for visual examples</GridRow>
  </Layout>
));
