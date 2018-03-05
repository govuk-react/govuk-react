import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from '@govuk-react/layout';
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

import SearchBox from '.';

storiesOf('SearchBox', module).add('SearchBox', () => (
  <Layout>
    <GridRow>
      <GridCol>
        <SearchBox placeholder="Search GOV.UK">SearchBox example</SearchBox>
      </GridCol>
    </GridRow>
  </Layout>
));
