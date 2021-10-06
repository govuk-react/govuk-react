/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_main-wrapper.scss
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_width-container.scss
 */
import * as React from 'react';
import SkipLink from '@govuk-react/skip-link';
import TopNav from '@govuk-react/top-nav';
// import Footer from '@govuk-react/footer';

import Main from './atoms/main';
import WidthContainer from './atoms/width-container';

/**
 * Use this template to keep your pages consistent with the rest of GOV.UK.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/page
 * - https://design-system.service.gov.uk/styles/page-template/
 * - https://design-system.service.gov.uk/styles/layout/#page-wrappers
 */
export const Page: PageType = ({
  header,
  footer,
  children,
  id,
  beforeChildren,
  main: MainComponent,
  container: Container,
}: PageProps) => (
  <>
    <SkipLink href={`#${id}`} />
    {header}
    <Container>
      {beforeChildren}
      <MainComponent id={id}>{children}</MainComponent>
    </Container>
    {footer}
  </>
);

export interface PageType extends React.FC<PageProps> {
  Main: typeof Main;
  WidthContainer: typeof WidthContainer;
}
export interface PageProps {
  /**
   * Page contents
   */
  children?: React.ReactNode;
  /**
   * ID for page content
   */
  id?: string;
  /**
   * Override the default page header component.
   */
  header?: React.ReactNode;
  /**
   * Override the default page footer component.
   */
  footer?: React.ReactNode;
  /**
   * Override the default wrapper component for main page content
   */
  main?: React.ElementType;
  /**
   * Content that needs to appear outside the main page wrapper (see `main`).
   * For example: A back link component, breadcrumbs, phase banner component
   */
  beforeChildren?: React.ReactNode;
  /**
   * Override the default page container component.
   * `beforeChildren` and `children` (wrapped in `main`) will be placed inside this component.
   */
  container?: React.ElementType;
}

Page.Main = Main;
Page.WidthContainer = WidthContainer;

Page.defaultProps = {
  children: undefined,
  id: 'content',
  header: <TopNav />,
  footer: undefined,
  main: Page.Main,
  beforeChildren: undefined,
  container: Page.WidthContainer,
};

Page.displayName = 'Page';

export default Page;
