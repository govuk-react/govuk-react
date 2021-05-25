import React from 'react';
import styled from 'styled-components';
import GridCol from '@govuk-react/grid-col';

import GridRow from '.';

export default {
  title: 'Layout/GridRow',
  component: GridRow,
};

const Content = styled('div')({
  textIndent: '-999em',
  backgroundColor: '#7DADD3',
  backgroundImage: 'repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)',
});

export const Default = () => (
  <GridRow>
    <GridCol>
      <Content>Example</Content>
    </GridCol>
  </GridRow>
);
