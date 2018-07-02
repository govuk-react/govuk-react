import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';
import GridCol from '@govuk-react/grid-col';

import GridRow from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Layout/GridRow', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Fragment>
    <GridRow>
      <GridCol hideContent>
        Example
      </GridCol>
    </GridRow>
  </Fragment>
));
