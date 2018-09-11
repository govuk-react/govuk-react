import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import SupportingHeader from '.';

const exampleHeading = 'Heading text';

const SupportingHeaderWithKnobs = () => (
  <SupportingHeader>{text('children', exampleHeading)}</SupportingHeader>
);

export default SupportingHeader;

export {
  exampleHeading,
  SupportingHeaderWithKnobs,
};
