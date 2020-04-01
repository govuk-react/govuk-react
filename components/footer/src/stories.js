import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Footer, {
  FooterWithCustomWidth,
  FooterWithCopyright,
  FooterWithMetaLinks,
  FooterWithMetaCustom,
  FooterWithMetaLinksAndCustom,
  FooterWithNavigation,
  FooterWithNavigationAndMeta,
} from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Page/Footer', module);
const examples = storiesOf('Page/Footer/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <Footer />);

examples.add('With Custom width container (no width limit) ', () => <FooterWithCustomWidth />);

examples.add('With Copyright', () => <FooterWithCopyright />);

examples.add('With Meta Links', () => <FooterWithMetaLinks />);

examples.add('With Meta Custom', () => <FooterWithMetaCustom />);

examples.add('With Meta Links and Custom', () => <FooterWithMetaLinksAndCustom />);

examples.add('With Navigation', () => <FooterWithNavigation />);

examples.add('With Navigation and Meta', () => <FooterWithNavigationAndMeta />);
