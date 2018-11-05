// Tracking:
// https://design-system.service.gov.uk/styles/page-template/
// https://design-system.service.gov.uk/styles/layout/#page-wrappers
// https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_main-wrapper.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_width-container.scss

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import TopNav from '@govuk-react/top-nav';
// import Footer from '@govuk-react/footer';

import Main from './atoms/main';
import WidthContainer from './atoms/width-container';

const PageWrapper = styled('div')();

// TODO: replace with actual footer component once built
// const Footer = styled('footer')({
//   width: '100%',
//   height: '80px',
//   borderTop: '1px solid #a1acb2',
//   backgroundColor: '#dee0e2',
// });

const Page = ({ header, footer, children }) => (
  <PageWrapper>
    {header}
    <WidthContainer>
      {children}
    </WidthContainer>
    {footer}
  </PageWrapper>
);

Page.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
};

Page.defaultProps = {
  children: undefined,
  header: <TopNav />,
  footer: undefined, // <Footer />, // TODO: add Footer component once built
};

Page.Main = Main;
// if WidthContainer is exported, should be combined with a use case and story
// Page.WidthContainer = WidthContainer;

export default Page;
