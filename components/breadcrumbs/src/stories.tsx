import type { Story } from '@storybook/react';

import * as React from 'react';

import { Breadcrumbs } from '.';

export default {
  title: 'Navigation/Breadcrumbs',
  id: 'breadcrumbs',
  component: Breadcrumbs,
};

export const Default: Story = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Link href="/section">Section</Breadcrumbs.Link>
    <Breadcrumbs.Link href="/section/sub-section">Sub-section</Breadcrumbs.Link>
    Current page
  </Breadcrumbs>
);
