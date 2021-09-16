import React from 'react';

import ListItem from '@govuk-react/list-item';

import { OrderedList } from '.';

export default {
  title: 'Typography/Ordered list',
  component: OrderedList,
};

export const Default: React.FC = () => (
  <OrderedList>
    <ListItem>Lorem ipsum dolor sit.</ListItem>
    <ListItem>Consectetur adipiscing elit.</ListItem>
    <ListItem>Curabitur et libero nec.</ListItem>
  </OrderedList>
);

export const OrderedListWithAlpha: React.FC = () => (
  <OrderedList listStyleType="lower-alpha">
    <ListItem>Cras nec quam ut lorem.</ListItem>
    <ListItem>Curabitur porta elit ut ante vehicula.</ListItem>
    <ListItem>Proin ac molestie ligula, non blandit libero.</ListItem>
  </OrderedList>
);

export const OrderedListWithRoman: React.FC = () => (
  <OrderedList listStyleType="lower-roman">
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <ListItem>Vestibulum ante ipsum.</ListItem>
    <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>
  </OrderedList>
);

export const OrderedListWithBulletWithNestedNumberList: React.FC = () => (
  <OrderedList listStyleType="bullet">
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <OrderedList listStyleType="number">
      <ListItem>Vestibulum ante ipsum.</ListItem>
      <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    </OrderedList>
    <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>
  </OrderedList>
);

export const OrderedListWithNoDecoration: React.FC = () => (
  <OrderedList listStyleType="none">
    <ListItem>Lorem ipsum dolor sit.</ListItem>
    <ListItem>Consectetur adipiscing elit.</ListItem>
    <ListItem>Curabitur et libero nec.</ListItem>
  </OrderedList>
);
