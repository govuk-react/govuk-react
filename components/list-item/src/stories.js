import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';
import { asAnchor } from '@govuk-react/hoc';

import ListItem from '.';
import ReadMe from '../README.md';

const AnchorTag = asAnchor('a');
const stories = storiesOf('Typography/ListItem', module);
const examples = storiesOf('Typography/ListItem/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => (
  <ListItem>{text('Children', 'List item example')}</ListItem>
));

examples.add('With anchor', () => (
  <ListItem>
    <AnchorTag href="https://www.google.com/">{text('Children', 'List item example')}</AnchorTag>
  </ListItem>
));
