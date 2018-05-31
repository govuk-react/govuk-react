import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ListItem from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/ListItem', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => (
  <ListItem>{text('Children', 'List item example')}</ListItem>
));
