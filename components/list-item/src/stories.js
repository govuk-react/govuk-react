import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withDocs } from 'storybook-readme';

import ListItem from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/ListItem', module);

stories.addDecorator(withDocs(ReadMe));
stories.addDecorator(withKnobs);

stories.add('ListItem', () => (
  <ListItem>{text('Children', 'List item example')}</ListItem>
));
