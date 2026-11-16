import type { StoryFn } from '@storybook/react';

import * as React from 'react';

import UnorderedList from '../unordered-list';
import Link from '../link';

import { ListItem } from '.';

export default {
  title: 'Typography/List item',
  id: 'list-item',
  component: ListItem,
};
const Template: StoryFn = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'List item example',
};
Default.decorators = [(story) => <UnorderedList>{story()}</UnorderedList>];

export const WithAnchor = Template.bind({});

WithAnchor.args = {
  children: <Link href="https://design-system.service.gov.uk">List item example</Link>,
};
