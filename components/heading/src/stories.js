import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Heading, { H1, H2, H3, H4, H5, H6 } from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Heading', module);
const examples = storiesOf('Typography/Heading/Examples', module);
const headingRanges = {
  range: true,
  min: 1,
  max: 6,
  step: 1,
};

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (<Heading level={number('level', 2, headingRanges)}>{text('Children', 'Heading text')}</Heading>));

examples.add('Levels 1-6', () => (
  <div>
    <Heading level={1}>A 48px Bold heading</Heading>
    <Heading level={2}>A 36px Bold heading</Heading>
    <Heading level={3}>A 24px Bold heading</Heading>
    <Heading level={4}>A 19px Bold heading</Heading>
    <Heading level={5}>h5</Heading>
    <Heading level={6}>h6</Heading>
  </div>
));
examples.add('Shortcuts 1-6', () => (
  <div>
    <H1>h1</H1>
    <H2>h2</H2>
    <H3>h3</H3>
    <H4>h4</H4>
    <H5>h5</H5>
    <H6>h6</H6>
  </div>
));
examples.add('Differing sizes', () => (
  <div>
    <Heading level={6} size={80}>
      h6 with XXLARGE style
    </Heading>
    <Heading level={2} size={16}>
      h2 with XSMALL style
    </Heading>
    <H3 size="LARGE">h3 with size large</H3>
  </div>
));
examples.add('Props pass through', () => (
  <div>
    <Heading onClick={action('heading-click')}>Click me</Heading>
  </div>
));
