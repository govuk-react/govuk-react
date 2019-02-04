// Tracking:
// https://design-system.service.gov.uk/styles/page-template/
// https://design-system.service.gov.uk/styles/layout/#page-wrappers
// https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_main-wrapper.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_width-container.scss

import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '@govuk-react/top-nav';
// import Footer from '@govuk-react/footer';

import Main from './atoms/main';
import WidthContainer from './atoms/width-container';

// const PageWrapper = styled('div')({});

// TODO: replace with actual footer component once built
// const Footer = styled('footer')({
//   width: '100%',
//   height: '80px',
//   borderTop: '1px solid #a1acb2',
//   backgroundColor: '#dee0e2',
// });

const Page = ({
  header, footer, children, beforeChildren, main, container,
}) => (
  <React.Fragment>
    {header}
    {container({
        children: main({ children, beforeChildren }),
    })}
    {footer}
  </React.Fragment>
);

/**
 * Mainly reference:
 * https://design-system.service.gov.uk/styles/page-template/
 * But using 'children' instead of 'content'
 */
Page.propTypes = {
  /**
   * Add content that needs to appear centered in the `<main>` element
   */
  children: PropTypes.node,
  /**
   * Override the default header (top nav) component.
   */
  header: PropTypes.node,
  /**
   * Override the default footer component.
   */
  footer: PropTypes.node,
  /**
   * Render props for the main section, provides chilren and beforeChildren props
   */
  main: PropTypes.func,
  /**
   * Add content that needs to appear outside `<main>` element.
   * For example: The back link component, phase banner component
   */
  beforeChildren: PropTypes.node,
  /**
   * Render props to allow the width container element to be overriden
   */
  container: PropTypes.func,
};

Page.defaultProps = {
  children: undefined,
  header: <TopNav />,
  footer: undefined, // <Footer />, // TODO: add Footer component once built
  // TODO: what to do about this linting rule?
  // eslint-disable-next-line react/prop-types
  main: ({ children, beforeChildren }) => (
    <React.Fragment>
      {beforeChildren}
      <Page.Main>
        {children}
      </Page.Main>
    </React.Fragment>
  ),
  beforeChildren: undefined,
  // TODO: what to do about this linting rule?
  // eslint-disable-next-line react/prop-types
  container: ({ children }) => <WidthContainer>{children}</WidthContainer>,
};

Page.Main = Main;
Page.WidthContainer = WidthContainer;

export default Page;
