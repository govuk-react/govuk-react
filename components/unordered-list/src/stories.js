import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from '@govuk-react/list-item';

import UnorderedList from '.';

storiesOf('UnorderedList', module).add('UnorderedList default', () => (
  <UnorderedList>
    <ListItem>UnorderedList example</ListItem>
  </UnorderedList>
));

storiesOf('UnorderedList', module).add('UnorderedList with square', () => (
  <UnorderedList listStyleType="square">
    <ListItem>UnorderedList example</ListItem>
  </UnorderedList>
));

storiesOf('UnorderedList', module).add(
  'UnorderedList with no decoration',
  () => (
    <UnorderedList listStyleType="none">
      <ListItem>UnorderedList example</ListItem>
    </UnorderedList>
  ),
);
