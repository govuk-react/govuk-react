import type { Story } from '@storybook/react';

import * as React from 'react';

import { Panel } from '.';

export default {
  title: 'Page & Layout/Panel',
  id: 'panel',
  component: Panel,
};

const Template: Story<React.ComponentProps<typeof Panel>> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Application complete',
};

export const PanelWithHeaderAndHtmlBody = Template.bind({});
PanelWithHeaderAndHtmlBody.args = {
  title: 'Application complete',
  children: ['Your reference number', <br />, <strong>HDJ2123F</strong>],
};
