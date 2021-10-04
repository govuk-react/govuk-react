import type { Story } from '@storybook/react';

import * as React from 'react';
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

import { Main } from '.';

export default {
  title: 'Page & Layout/Main',
  id: 'main',
  component: Main,
};

export const Default: Story = (args) => (
  <Main {...args}>
    <GridRow>
      <GridCol setWidth="one-half">
        Aliquip et Lorem aliquip voluptate. In laborum dolor fugiat mollit exercitation occaecat deserunt sunt quis.
        Duis eu veniam id minim culpa velit ullamco eiusmod cillum in aute voluptate consequat. Officia tempor qui Lorem
        labore qui Lorem.
      </GridCol>
      <GridCol setWidth="one-half">
        Duis magna consectetur pariatur ea consequat ipsum nisi sint commodo. Quis ut ipsum aliqua ea laboris amet ea
        aliqua eu dolor cupidatat aute officia. Esse ad ea eu mollit reprehenderit est aliquip.
      </GridCol>
    </GridRow>
  </Main>
);
