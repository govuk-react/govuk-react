import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from '@govuk-react/list-item';

import OrderedList from '.';

storiesOf('OrderedList', module).add('OrderedList default', () => (
  <OrderedList>
    <ListItem>OrderedList example</ListItem>
  </OrderedList>
));

storiesOf('OrderedList', module).add('OrderedList with alpha', () => (
  <OrderedList listStyleType="lower-alpha">
    <ListItem>OrderedList example</ListItem>
  </OrderedList>
));

storiesOf('OrderedList', module).add('OrderedList with roman', () => (
  <OrderedList listStyleType="lower-roman">
    <ListItem>OrderedList example</ListItem>
  </OrderedList>
));

storiesOf('OrderedList', module).add(
  'OrderedList with no decoration',
  () => (
    <OrderedList listStyleType="none">
      <ListItem>OrderedList example</ListItem>
    </OrderedList>
  ),
);
