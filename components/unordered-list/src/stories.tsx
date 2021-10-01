import * as React from 'react';

import ListItem from '@govuk-react/list-item';
import OrderedList from '@govuk-react/ordered-list';
import { UnorderedList } from '.';

export default {
  title: 'Typography/Unordered list',
  component: UnorderedList,
};

export const Default: React.FC = () => (
  <UnorderedList>
    <ListItem>Lorem ipsum dolor sit.</ListItem>
    <ListItem>Consectetur adipiscing elit.</ListItem>
    <ListItem>Curabitur et libero nec.</ListItem>
  </UnorderedList>
);
export const UnorderedListWithSquare: React.FC = () => (
  <UnorderedList listStyleType="square">
    <ListItem>Cras nec quam ut lorem.</ListItem>
    <ListItem>Curabitur porta elit ut ante vehicula.</ListItem>
    <ListItem>Proin ac molestie ligula, non blandit libero.</ListItem>
  </UnorderedList>
);
export const UnorderedListWithBulletWithNestedLists: React.FC = () => (
  <UnorderedList listStyleType="bullet">
    <ListItem>Bullet list</ListItem>
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <UnorderedList listStyleType="bullet">
      <ListItem>Bullet list</ListItem>
      <ListItem margin={4}>Vestibulum ante ipsum.</ListItem>
      <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    </UnorderedList>
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <UnorderedList listStyleType="none">
      <ListItem>No type set list</ListItem>
      <ListItem>Vestibulum ante ipsum.</ListItem>
      <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    </UnorderedList>
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <UnorderedList listStyleType="square">
      <ListItem>Square list</ListItem>
      <ListItem>Vestibulum ante ipsum.</ListItem>
      <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    </UnorderedList>
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <OrderedList>
      <ListItem>Square ordered list</ListItem>
      <ListItem>Vestibulum ante ipsum.</ListItem>
    </OrderedList>
    <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>
  </UnorderedList>
);
export const UnorderedListWithNoDecoration: React.FC = () => (
  <UnorderedList listStyleType="none">
    <ListItem>In nisi lectus, mollis sed neque.</ListItem>
    <ListItem>Pellentesque habitant morbi tristique senectus et netus et malesuada.</ListItem>
    <ListItem>Vestibulum ante ipsum.</ListItem>
    <ListItem>Maecenas cursus rutrum nunc.</ListItem>
    <ListItem>Nullam laoreet turpis eu odio gravida.</ListItem>
  </UnorderedList>
);
