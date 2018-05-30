import React from 'react';
import { storiesOf } from '@storybook/react';
import { asAnchor } from '@govuk-react/hoc';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import PhaseBanner from '.';
import ReadMe from '../README.md';

const AnchorLink = asAnchor('a');

const stories = storiesOf('Misc/PhaseBanner', module);
const examples = storiesOf('Misc/PhaseBanner/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Alpha phase tag', () => (
  <PhaseBanner level="alpha">
    This part of GOV.UK is being rebuilt &#8211;{' '}
    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
  </PhaseBanner>
));

examples.add('Beta phase tag', () => (
  <PhaseBanner level="beta">
    This part of GOV.UK is being rebuilt &#8211;{' '}
    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
  </PhaseBanner>
));
