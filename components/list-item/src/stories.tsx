import type { Story } from '@storybook/react';

import * as React from 'react';

import { UnorderedList, Link } from 'govuk-react';

import { ListItem } from '.';

export default {
  title: 'Typography/List item',
  id: 'list-item',
  component: ListItem,
};
const Template: Story = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'List item example',
};
Default.decorators = [(story) => <UnorderedList>{story()}</UnorderedList>];

export const WithAnchor = Template.bind({});

WithAnchor.args = {
  children: <Link href="https://design-system.service.gov.uk">List item example</Link>,
};
