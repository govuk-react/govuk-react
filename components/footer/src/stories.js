import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Footer, {
  FooterWithMetaLinks,
  FooterWithMetaCustom,
  FooterWithMetaLinksAndCustom,
  FooterWithNavigation,
  FooterWithNavigationAndMeta,
} from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Page/Footer', module);
const examples = storiesOf('Page/Footer/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => <Footer />);

examples.add('With Meta Links', () => <FooterWithMetaLinks />);

examples.add('With Meta Custom', () => <FooterWithMetaCustom />);

examples.add('With Meta Links and Custom', () => <FooterWithMetaLinksAndCustom />);

examples.add('With Navigation', () => <FooterWithNavigation />);

examples.add('With Navigation and Meta', () => <FooterWithNavigationAndMeta />);
