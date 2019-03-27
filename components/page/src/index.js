// Tracking:
// https://design-system.service.gov.uk/styles/page-template/
// https://design-system.service.gov.uk/styles/layout/#page-wrappers
// https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_main-wrapper.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_width-container.scss

import React from 'react';
import PropTypes from 'prop-types';
import SkipLink from '@govuk-react/skip-link';
import TopNav from '@govuk-react/top-nav';
// import Footer from '@govuk-react/footer';

import Main from './atoms/main';
import WidthContainer from './atoms/width-container';

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import BackLink from '@govuk-react/back-link';
 * import { H1 } from '@govuk-react/heading';
 *
 * <Page beforeChildren={<BackLink href="#" />}>
 *   <H1>Page title</H1>
 * </Page>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/page-template/
 * - https://design-system.service.gov.uk/styles/layout/#page-wrappers
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_main-wrapper.scss
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_width-container.scss
 */
const Page = ({ header, footer, children, id, beforeChildren, main: MainComponent, container: Container }) => (
  <React.Fragment>
    <SkipLink href={`#${id}`} />
    {header}
    <Container>
      {beforeChildren}
      <MainComponent id={id}>{children}</MainComponent>
    </Container>
    {footer}
  </React.Fragment>
);

Page.propTypes = {
  /**
   * Page contents
   */
  children: PropTypes.node,
  /**
   * ID for page content
   */
  id: PropTypes.string,
  /**
   * Override the default page header component.
   */
  header: PropTypes.node,
  /**
   * Override the default page footer component.
   */
  footer: PropTypes.node,
  /**
   * Override the default wrapper component for main page content
   */
  main: PropTypes.func,
  /**
   * Content that needs to appear outside the main page wrapper (see `main`).
   * For example: A back link component, breadcrumbs, phase banner component
   */
  beforeChildren: PropTypes.node,
  /**
   * Override the default page container component.
   * `beforeChildren` and `children` (wrapped in `main`) will be placed inside this component.
   */
  container: PropTypes.func,
};

Page.Main = Main;
Page.WidthContainer = WidthContainer;

Page.defaultProps = {
  children: undefined,
  id: 'content',
  header: <TopNav />,
  footer: undefined, // <Footer />, // TODO: add Footer component once built
  main: Page.Main,
  beforeChildren: undefined,
  container: Page.WidthContainer,
};

export default Page;
