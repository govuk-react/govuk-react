import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';
import Link from '@govuk-react/link';

import PhaseBanner from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Misc/PhaseBanner', module);
const examples = storiesOf('Misc/PhaseBanner/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <PhaseBanner level="alpha">
    This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
  </PhaseBanner>
));

examples.add('Beta phase tag', () => (
  <PhaseBanner level="beta">
    This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
  </PhaseBanner>
));
