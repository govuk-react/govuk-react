import React from 'react';
import { storiesOf } from '@storybook/react';

import UnorderedList from '.';

storiesOf('UnorderedList', module).add('UnorderedList default', () => (
  <UnorderedList>
    <li>UnorderedList example</li>
  </UnorderedList>
));

storiesOf('UnorderedList', module).add('UnorderedList with square', () => (
  <UnorderedList listStyleType="square">
    <li>UnorderedList example</li>
  </UnorderedList>
));

storiesOf('UnorderedList', module).add(
  'UnorderedList with no decoration',
  () => (
    <UnorderedList listStyleType="none">
      <li>UnorderedList example</li>
    </UnorderedList>
  ),
);
