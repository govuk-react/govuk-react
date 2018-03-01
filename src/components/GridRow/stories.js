import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from '../Layout';
import GridRow from '.';

storiesOf('GridRow', module).add('GridRow', () => (
  <Layout>
    <GridRow>GridRow example. Please see Layout for visual examples</GridRow>
  </Layout>
));
