import React from 'react';

import Link from '@govuk-react/link';

import { PhaseBanner } from '.';

export default {
  title: 'Typography/Phase banner',
  component: PhaseBanner,
};

export const Default: React.FC = () => (
  <PhaseBanner level="alpha">
    This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
  </PhaseBanner>
);

export const BetaPhaseTag: React.FC = () => (
  <PhaseBanner level="beta">
    This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
  </PhaseBanner>
);
