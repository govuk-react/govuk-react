import * as React from 'react';

import { Footer } from '.';
import {
  FooterWithCustomWidth,
  FooterWithCopyright,
  FooterWithMetaLinks,
  FooterWithMetaCustom,
  FooterWithMetaLinksAndCustom,
  FooterWithNavigation,
  FooterWithNavigationAndMeta,
} from './fixtures';

export default {
  title: 'Page & Layout/Footer',
  id: 'footer',
  component: Footer,
};

export const Default: React.FC = (args) => <Footer {...args} />;

export const WithCustomWidthContainerNoWidthLimit = FooterWithCustomWidth;
export const WithCopyright = FooterWithCopyright;
export const WithMetaLinks = FooterWithMetaLinks;
export const WithMetaCustom = FooterWithMetaCustom;
export const WithMetaLinksAndCustom = FooterWithMetaLinksAndCustom;
export const WithNavigation = FooterWithNavigation;
export const WithNavigationAndMeta = FooterWithNavigationAndMeta;
