import React from 'react';
import { CAPTION_SIZES, HEADING_SIZES, TYPOGRAPHY_SCALE } from '@govuk-react/constants';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import Heading from '@govuk-react/heading';

import { CaptionWithKnobs } from './fixtures';
import Caption from '.';

export default {
  title: 'Typography/Caption',
  component: Caption,
  decorators: [withKnobs],
};

export const Default: React.FC = () => <CaptionWithKnobs />;

const arrTypography = Object.keys(TYPOGRAPHY_SCALE);
const captionOptions = [...Object.keys(CAPTION_SIZES), ...arrTypography];
const headingOptions = [...Object.keys(HEADING_SIZES), ...arrTypography];

export const PlacedWithAHeadingComponent: React.FC = () => (
  <div>
    <Caption size={select('size', captionOptions, 'XL')}>{text('children', 'Supporting heading text')}</Caption>
    <Heading size={select('heading size', headingOptions, 'XL')}>{text('heading', 'Main heading text')}</Heading>
  </div>
);

export const PlacedInsideAHeadingComponent: React.FC = () => (
  <div>
    <Heading size={select('heading size', headingOptions, 'XL')}>
      <Caption size={select('size', captionOptions, 'XL')}>{text('children', 'Supporting heading text')}</Caption>
      {text('heading', 'Main heading text')}
    </Heading>
  </div>
);

export const ShowingAllStandardCaptionSizesWithHeadings: React.FC = () => (
  <div>
    <Caption size="XL">Supporting heading size XL</Caption>
    <Heading size="XL">Main heading size XL</Heading>
    <Caption size="L">Supporting heading size L</Caption>
    <Heading size="L">Main heading size L</Heading>
    <Caption size="M">Supporting heading size M</Caption>
    <Heading size="M">Main heading size M</Heading>
  </div>
);
