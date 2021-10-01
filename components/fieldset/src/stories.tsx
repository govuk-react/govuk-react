import type { Story } from '@storybook/react';

import * as React from 'react';

import { Fieldset } from '.';

export default {
  title: 'Form/Fieldset',
  component: Fieldset,
};

export const Default: Story = (args: { children: string; size: string; isPageHeading: boolean }) => (
  <Fieldset>
    <Fieldset.Legend {...args} />
  </Fieldset>
);
Default.args = {
  children: 'Example legend',
  size: 'LARGE',
  isPageHeading: false,
};

export const LegendAsPageHeading: Story = () => (
  <Fieldset>
    <Fieldset.Legend size="XLARGE" isPageHeading>
      Legend as page heading
    </Fieldset.Legend>
  </Fieldset>
);
