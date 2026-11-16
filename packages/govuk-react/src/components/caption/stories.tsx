/* eslint-disable react/prop-types */
import type { StoryFn } from '@storybook/react';
import * as React from 'react';
import { CAPTION_SIZES, HEADING_SIZES, TYPOGRAPHY_SCALE } from '../../constants';
import Heading from '../../legacy/heading';

import { Caption } from '.';

export default {
  title: 'Typography/Caption',
  id: 'caption',
  component: Caption,
};

const Template: StoryFn = (args) => <Caption {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'XL',
  children: 'Heading text',
};

const arrTypography = Object.keys(TYPOGRAPHY_SCALE);
const captionOptions = [...Object.keys(CAPTION_SIZES), ...arrTypography];
const headingOptions = [...Object.keys(HEADING_SIZES), ...arrTypography];

export const PlacedWithAHeadingComponent: StoryFn = ({ size, children, headingSize, heading }) => (
  <div>
    <Caption size={size}>{children}</Caption>
    <Heading size={headingSize}>{heading}</Heading>
  </div>
);

PlacedWithAHeadingComponent.args = {
  size: 'XL',
  headingSize: 'XL',
  children: 'Supporting heading text',
  heading: 'Main heading text',
};

PlacedWithAHeadingComponent.argTypes = {
  size: {
    control: {
      type: 'select',
      options: captionOptions,
    },
  },
  headingSize: {
    control: {
      type: 'select',
      options: headingOptions,
    },
  },
};

export const PlacedInsideAHeadingComponent: StoryFn = ({ size, headingSize, children, heading }) => (
  <div>
    <Heading size={headingSize}>
      <Caption size={size}>{children}</Caption>
      {heading}
    </Heading>
  </div>
);
PlacedInsideAHeadingComponent.args = {
  size: 'XL',
  headingSize: 'XL',
  children: 'Supporting heading text',
  heading: 'Main heading text',
};

PlacedInsideAHeadingComponent.argTypes = {
  size: {
    control: {
      type: 'select',
      options: captionOptions,
    },
  },
  headingSize: {
    control: {
      type: 'select',
      options: headingOptions,
    },
  },
};

export const ShowingAllStandardCaptionSizesWithHeadings: StoryFn = (args) => (
  <>
    <Caption {...args}>Supporting heading size XL (default)</Caption>
    <Heading size="XL">Main heading size XL</Heading>
    <Caption size="L">Supporting heading size L</Caption>
    <Heading size="L">Main heading size L</Heading>
    <Caption size="M">Supporting heading size M</Caption>
    <Heading size="M">Main heading size M</Heading>
  </>
);
