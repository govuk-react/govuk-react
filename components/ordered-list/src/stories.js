import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from '@govuk-react/list-item';

import OrderedList from '.';

const stories = storiesOf('Typography/OrderedList', module);

stories.add('OrderedList default', () => (
  <OrderedList>
    <ListItem>Lorem ipsum dolor sit.</ListItem>
    <ListItem>Consectetur adipiscing elit.</ListItem>
    <ListItem>Curabitur et libero nec.</ListItem>
  </OrderedList>
));

stories.add('OrderedList with alpha', () => (
  <OrderedList listStyleType="lower-alpha">
    <ListItem>Cras nec quam ut lorem.</ListItem>
    <ListItem>Curabitur porta elit ut ante vehicula.</ListItem>
    <ListItem>Proin ac molestie ligula, non blandit libero.</ListItem>
  </OrderedList>
));

stories.add('OrderedList with roman', () => (
  <OrderedList listStyleType="lower-roman">
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <ListItem>Vestibulum ante ipsum.</ListItem>
    <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>
  </OrderedList>
));

stories.add(
  'OrderedList with no decoration',
  () => (
    <OrderedList listStyleType="none">
      <ListItem>Lorem ipsum dolor sit.</ListItem>
      <ListItem>Consectetur adipiscing elit.</ListItem>
      <ListItem>Curabitur et libero nec.</ListItem>
    </OrderedList>
  ),
);
