import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Heading, { H1, H2, H3, H4, H5, H6 } from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Heading', module);
const examples = storiesOf('Typography/Heading/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Heading size={text('size', 'LARGE')}>{text('Children', 'Heading text')}</Heading>
));

examples.add('Shortcuts H1-H6', () => (
  <div>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
  </div>
));
examples.add('Differing sizes', () => (
  <div>
    <H6 size={80}>h6 with XXLARGE style</H6>
    <Heading as="h2" size={16}>
      h2 with XSMALL style
    </Heading>
    <H3 size="LARGE">H3 with size large</H3>
  </div>
));
examples.add('Props pass through', () => (
  <div>
    <Heading onClick={action('heading-click')}>Click me</Heading>
  </div>
));
