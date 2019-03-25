import React, { Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';
import GridCol from '@govuk-react/grid-col';

import GridRow from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Layout/GridRow', module);

stories.addDecorator(withDocsCustom(ReadMe));

const Content = styled('div')({
  textIndent: '-999em',
  backgroundColor: '#7DADD3',
  backgroundImage: 'repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)',
});

stories.add('Component default', () => (
  <Fragment>
    <GridRow>
      <GridCol>
        <Content>Example</Content>
      </GridCol>
    </GridRow>
  </Fragment>
));
