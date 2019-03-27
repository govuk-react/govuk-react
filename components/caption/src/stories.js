import React from 'react';
import { CAPTION_SIZES, HEADING_SIZES, TYPOGRAPHY_SCALE } from '@govuk-react/constants';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Heading from '@govuk-react/heading';

import Caption, { CaptionWithKnobs } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Caption', module);
const examples = storiesOf('Typography/Caption/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));
examples.addDecorator(withKnobs);

stories.add('Component default', () => <CaptionWithKnobs />);

const arrTypography = Object.keys(TYPOGRAPHY_SCALE);
const captionOptions = [...Object.keys(CAPTION_SIZES), ...arrTypography];
const headingOptions = [...Object.keys(HEADING_SIZES), ...arrTypography];

examples.add('Placed with a heading component', () => (
  <div>
    <Caption size={select('size', captionOptions, 'XL')}>{text('children', 'Supporting heading text')}</Caption>
    <Heading size={select('heading size', headingOptions, 'XL')}>{text('heading', 'Main heading text')}</Heading>
  </div>
));

examples.add('Placed inside a heading component', () => (
  <div>
    <Heading size={select('heading size', headingOptions, 'XL')}>
      <Caption size={select('size', captionOptions, 'XL')}>{text('children', 'Supporting heading text')}</Caption>
      {text('heading', 'Main heading text')}
    </Heading>
  </div>
));

examples.add('Showing all standard caption sizes, with headings', () => (
  <div>
    <Caption size="XL">Supporting heading size XL</Caption>
    <Heading size="XL">Main heading size XL</Heading>
    <Caption size="L">Supporting heading size L</Caption>
    <Heading size="L">Main heading size L</Heading>
    <Caption size="M">Supporting heading size M</Caption>
    <Heading size="M">Main heading size M</Heading>
  </div>
));
