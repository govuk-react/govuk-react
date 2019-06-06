import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERIES, GUTTER } from '@govuk-react/constants';

import Footer from '.';
import crest from './govuk-crest.png';

const withRoutes = component => (
  <BrowserRouter>
    {component}
    <Route path="/footer-nav-item-2" render={() => 'Footer Navigation item 2'} />
    <Route path="/footer-meta-item-2" render={() => 'Footer Meta item 2'} />
  </BrowserRouter>
);

export default () => <Footer />;

const copyright = {
  text: 'Crown copyright',
  link:
    'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
  image: {
    source: crest,
    height: 102,
    width: 125,
  },
};

const metaLinks = (
  <Footer.MetaLinks heading="Support links">
    <Footer.Link href="/">Item 1</Footer.Link>
    <Footer.Link to="/footer-meta-item-2" as={Link}>
      Item 2 (Router Link)
    </Footer.Link>
    <Footer.Link href="/">Item 3</Footer.Link>
  </Footer.MetaLinks>
);

const metaCustom = (
  <Footer.MetaCustom>
    Built by the <Footer.Link href="/">Government Digital Service</Footer.Link>
  </Footer.MetaCustom>
);

const metaLinksAndCustom = (
  <React.Fragment>
    {metaLinks}
    {metaCustom}
  </React.Fragment>
);

const navigation = (
  <Footer.Navigation>
    <Footer.NavigationLinks heading="Two column list" listColumns={2}>
      <Footer.Link href="/">Navigation item 1</Footer.Link>
      <Footer.Link to="/footer-nav-item-2" as={Link}>
        Navigation item 2 (Router Link)
      </Footer.Link>
      <Footer.Link href="/">Navigation item 3</Footer.Link>
      <Footer.Link href="/">Navigation item 4</Footer.Link>
      <Footer.Link href="/">Navigation item 5</Footer.Link>
      <Footer.Link href="/">Navigation item 6</Footer.Link>
    </Footer.NavigationLinks>
    <Footer.NavigationLinks heading="Single column list">
      <Footer.Link href="/">Navigation item 1</Footer.Link>
      <Footer.Link href="/">Navigation item 2</Footer.Link>
      <Footer.Link href="/">Navigation item 3</Footer.Link>
    </Footer.NavigationLinks>
  </Footer.Navigation>
);

const WideContainer = styled(Footer.WidthContainer)({
  maxWidth: 'inherit',
  [MEDIA_QUERIES.MAX]: {
    margin: `0 ${GUTTER}`,
  },
});

export const FooterWithCustomWidth = () => <Footer container={WideContainer} />;

export const FooterWithCopyright = () => <Footer copyright={copyright} />;

export const FooterWithMetaLinks = () => withRoutes(<Footer meta={metaLinks} />);

export const FooterWithSingleMetaLink = () =>
  withRoutes(
    <Footer
      meta={
        <Footer.MetaLinks heading="Support links">
          <Footer.Link href="/">Item 1</Footer.Link>
        </Footer.MetaLinks>
      }
    />
  );

export const FooterWithMetaCustom = () => <Footer meta={metaCustom} />;

export const FooterWithMetaLinksAndCustom = () => withRoutes(<Footer meta={metaLinksAndCustom} />);

export const FooterWithSingleNavigationLink = () => (
  <Footer>
    <Footer.Navigation>
      <Footer.NavigationLinks heading="Single column list">
        <Footer.Link href="/">Navigation item 1</Footer.Link>
      </Footer.NavigationLinks>
    </Footer.Navigation>
  </Footer>
);

export const FooterWithNavigation = () => withRoutes(<Footer>{navigation}</Footer>);

export const FooterWithNavigationAndMeta = () => withRoutes(<Footer meta={metaLinksAndCustom}>{navigation}</Footer>);
