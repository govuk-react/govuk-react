import type { Story } from '@storybook/react';

import * as React from 'react';

import ListItem from '@govuk-react/list-item';

import { OrderedList } from '.';

export default {
  title: 'Typography/Ordered list',
  id: 'ordered-list',
  component: OrderedList,
};

const Template: Story<React.ComponentProps<typeof OrderedList>> = (args) => <OrderedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <ListItem>Lorem ipsum dolor sit.</ListItem>,
    <ListItem>Consectetur adipiscing elit.</ListItem>,
    <ListItem>Curabitur et libero nec.</ListItem>,
  ],
};

export const OrderedListWithAlpha = Template.bind({});
OrderedListWithAlpha.args = {
  listStyleType: 'lower-alpha',
  children: [
    <ListItem>Cras nec quam ut lorem.</ListItem>,
    <ListItem>Curabitur porta elit ut ante vehicula.</ListItem>,
    <ListItem>Proin ac molestie ligula, non blandit libero.</ListItem>,
  ],
};

export const OrderedListWithRoman = Template.bind({});
OrderedListWithRoman.args = {
  listStyleType: 'lower-roman',
  children: [
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>,
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>,
    <ListItem>Vestibulum ante ipsum.</ListItem>,
    <ListItem>Maecenas cursus rutrum nunc.</ListItem>,
    <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>,
  ],
};

export const OrderedListWithBulletWithNestedNumberList = Template.bind({});
OrderedListWithBulletWithNestedNumberList.args = {
  listStyleType: 'bullet',
  children: [
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>,
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>,
    <OrderedList listStyleType="number">
      <ListItem>Vestibulum ante ipsum.</ListItem>
      <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    </OrderedList>,
    <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>,
  ],
};

export const OrderedListWithNoDecoration = Template.bind({});
OrderedListWithNoDecoration.args = {
  listStyleType: 'none',
  children: [
    <ListItem>Lorem ipsum dolor sit.</ListItem>,
    <ListItem>Consectetur adipiscing elit.</ListItem>,
    <ListItem>Curabitur et libero nec.</ListItem>,
  ],
};
