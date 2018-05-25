import React from 'react';
import { storiesOf } from '@storybook/react';

import ListItem from '.';

const stories = storiesOf('Typography/ListItem', module);

stories.add('ListItem', () => (
  <ListItem>ListItem example</ListItem>
));
