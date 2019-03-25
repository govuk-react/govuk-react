import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';
import Link from '@govuk-react/link';

import ListItem from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/ListItem', module);
const examples = storiesOf('Typography/ListItem/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => <ListItem>{text('Children', 'List item example')}</ListItem>);

examples.add('With anchor', () => (
  <ListItem>
    <Link href="https://www.google.com/">{text('Children', 'List item example')}</Link>
  </ListItem>
));
