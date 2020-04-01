import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';
import ListItem from '@govuk-react/list-item';

import OrderedList from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/OrderedList', module);
const examples = storiesOf('Typography/OrderedList/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <OrderedList>
    <ListItem>Lorem ipsum dolor sit.</ListItem>
    <ListItem>Consectetur adipiscing elit.</ListItem>
    <ListItem>Curabitur et libero nec.</ListItem>
  </OrderedList>
));

examples.add('OrderedList with alpha', () => (
  <OrderedList listStyleType="lower-alpha">
    <ListItem>Cras nec quam ut lorem.</ListItem>
    <ListItem>Curabitur porta elit ut ante vehicula.</ListItem>
    <ListItem>Proin ac molestie ligula, non blandit libero.</ListItem>
  </OrderedList>
));

examples.add('OrderedList with roman', () => (
  <OrderedList listStyleType="lower-roman">
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <ListItem>Vestibulum ante ipsum.</ListItem>
    <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>
  </OrderedList>
));

examples.add('OrderedList with bullet with nested number list', () => (
  <OrderedList listStyleType="bullet">
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <OrderedList listStyleType="number">
      <ListItem>Vestibulum ante ipsum.</ListItem>
      <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    </OrderedList>
    <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>
  </OrderedList>
));

examples.add('OrderedList with no decoration', () => (
  <OrderedList listStyleType="none">
    <ListItem>Lorem ipsum dolor sit.</ListItem>
    <ListItem>Consectetur adipiscing elit.</ListItem>
    <ListItem>Curabitur et libero nec.</ListItem>
  </OrderedList>
));
