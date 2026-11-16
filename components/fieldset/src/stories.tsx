import type { StoryFn } from '@storybook/react';

import * as React from 'react';

import { Fieldset } from '.';

export default {
  title: 'Form/Fieldset',
  id: 'fieldset',
  component: Fieldset,
};

export const Default: StoryFn = (args: { children: string; size: string; isPageHeading: boolean }) => (
  <Fieldset>
    <Fieldset.Legend {...args} />
  </Fieldset>
);
Default.args = {
  children: 'Example legend',
  size: 'LARGE',
  isPageHeading: false,
};

export const LegendAsPageHeading: StoryFn<React.ComponentProps<typeof Fieldset.Legend>> = (args) => (
  <Fieldset>
    <Fieldset.Legend {...args} />
  </Fieldset>
);

LegendAsPageHeading.args = {
  size: 'XLARGE',
  isPageHeading: true,
  children: 'Legend as page heading',
};
