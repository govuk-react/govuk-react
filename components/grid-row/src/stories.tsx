import type { Story } from '@storybook/react';

import * as React from 'react';
import styled from 'styled-components';
import GridCol from '@govuk-react/grid-col';

import { GridRow } from '.';

export default {
  title: 'Page & Layout/Grid row',
  id: 'grid-row',
  component: GridRow,
};

const Content = styled('div')({
  textIndent: '-999em',
  backgroundColor: '#7DADD3',
  backgroundImage: 'repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)',
});
Content.displayName = 'div';

export const Default: Story = (args) => (
  <GridRow {...args}>
    <GridCol>
      <Content>Example</Content>
    </GridCol>
    <GridCol>
      <Content>Example</Content>
    </GridCol>
  </GridRow>
);
