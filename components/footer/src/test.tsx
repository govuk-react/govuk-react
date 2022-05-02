import * as React from 'react';
import { mount } from 'enzyme';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERIES, GUTTER } from '@govuk-react/constants';

import { Footer } from '.';
import crest from './govuk-crest.png';

const withRoutes = (component) => (
  <BrowserRouter>
    {component}
    <Routes>
      <Route path="/footer-nav-item-2" element={<>Footer Navigation item 2</>} />
      <Route path="/footer-meta-item-2" element={<>Footer Meta item 2</>} />
    </Routes>
  </BrowserRouter>
);

const FooterExample: React.FC = () => <Footer />;
export default FooterExample;

const copyright = {
  text: 'Crown copyright',
  link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
  image: {
    src: crest,
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
  <>
    {metaLinks}
    {metaCustom}
  </>
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

const FooterWithCustomWidth: React.FC = () => <Footer container={WideContainer} />;

const FooterWithCopyright: React.FC = () => <Footer copyright={copyright} />;

const FooterWithMetaLinks: React.FC = () => withRoutes(<Footer meta={metaLinks} />);

const FooterWithSingleMetaLink: React.FC = () =>
  withRoutes(
    <Footer
      meta={
        <Footer.MetaLinks heading="Support links">
          <Footer.Link href="/">Item 1</Footer.Link>
        </Footer.MetaLinks>
      }
    />
  );

const FooterWithMetaCustom: React.FC = () => <Footer meta={metaCustom} />;

const FooterWithMetaLinksAndCustom: React.FC = () => withRoutes(<Footer meta={metaLinksAndCustom} />);

const FooterWithSingleNavigationLink: React.FC = () => (
  <Footer>
    <Footer.Navigation>
      <Footer.NavigationLinks heading="Single column list">
        <Footer.Link href="/">Navigation item 1</Footer.Link>
      </Footer.NavigationLinks>
    </Footer.Navigation>
  </Footer>
);

const FooterWithNavigation: React.FC = () => withRoutes(<Footer>{navigation}</Footer>);

const FooterWithNavigationAndMeta: React.FC = () => withRoutes(<Footer meta={metaLinksAndCustom}>{navigation}</Footer>);

const FooterWithCustomLicence: React.FC = () => (
  <Footer
    licence={
      <span>
        All content is available under the{' '}
        <Footer.Link href="https://creativecommons.org/licenses/by/4.0/" rel="license">
          Creative Commons Attribution 4.0 International Licence
        </Footer.Link>
        , except where otherwise stated
      </span>
    }
  />
);

const FooterWithNoLicense: React.FC = () => <Footer licence={false} />;

describe('Footer', () => {
  it('matches default snapshot', () => {
    expect(mount(<Footer />)).toMatchSnapshot('Footer');
  });

  it('matches with custom width snapshot', () => {
    expect(mount(<FooterWithCustomWidth />)).toMatchSnapshot('FooterWithCustomWidth');
  });

  it('matches with copyright snapshot', () => {
    expect(mount(<FooterWithCopyright />)).toMatchSnapshot('FooterWithCopyright');
  });

  it('matches with single meta link snapshot', () => {
    expect(mount(<FooterWithSingleMetaLink />)).toMatchSnapshot('FooterWithSingleMetaLink');
  });

  it('matches with meta links snapshot', () => {
    expect(mount(<FooterWithMetaLinks />)).toMatchSnapshot('FooterWithMetaLinks');
  });

  it('matches with meta custom snapshot', () => {
    expect(mount(<FooterWithMetaCustom />)).toMatchSnapshot('FooterWithMetaCustom');
  });

  it('matches with meta links and custom snapshot', () => {
    expect(mount(<FooterWithMetaLinksAndCustom />)).toMatchSnapshot('FooterWithMetaLinksAndCustom');
  });

  it('matches with single navigation link snapshot', () => {
    expect(mount(<FooterWithSingleNavigationLink />)).toMatchSnapshot('FooterWithSingleNavigationLink');
  });

  it('matches with navigation snapshot', () => {
    expect(mount(<FooterWithNavigation />)).toMatchSnapshot('FooterWithNavigation');
  });

  it('matches with navigation and meta snapshot', () => {
    expect(mount(<FooterWithNavigationAndMeta />)).toMatchSnapshot('FooterWithNavigationAndMeta');
  });

  it('matches with custom licence', () => {
    expect(mount(<FooterWithCustomLicence />)).toMatchSnapshot('FooterWithCustomLicence');
  });

  it('matches with no licence', () => {
    expect(mount(<FooterWithNoLicense />)).toMatchSnapshot('FooterWithNoLicense');
  });
});
