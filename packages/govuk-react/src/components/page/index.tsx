import * as React from 'react';

import { SkipLink } from '../skip-link';
import { WidthContainer } from '../width-container';
import { MainWrapper } from '../main-wrapper';
import { Header as TemplateHeader, Footer as TemplateFooter } from 'govuk-frontend-react/template';

export type PageProps = {
  /** Page contents, rendered inside the main wrapper. */
  children?: React.ReactNode;
  /** Id of the main wrapper, which the skip link points to. */
  id?: string;
  /** Page header, such as `Header.Composite` or `ServiceNavigation`. */
  header?: React.ReactNode;
  /** Page footer, such as `Footer.Composite`. */
  footer?: React.ReactNode;
  /** Content outside the main wrapper but inside the width container, such as a back link, breadcrumbs or phase banner. */
  beforeChildren?: React.ReactNode;
  /** Text for the skip link. */
  skipLinkText?: React.ReactNode;
};

/**
 * Lays out the body of a GOV.UK page: skip link, header and footer landmarks, width container and main wrapper.
 * For custom layouts, compose `SkipLink`, `WidthContainer` and `MainWrapper` directly.
 *
 * - https://design-system.service.gov.uk/styles/page-template/
 * - https://design-system.service.gov.uk/styles/layout/#page-wrappers
 */
export function Page({
  header,
  footer,
  children,
  id = 'main-content',
  beforeChildren,
  skipLinkText = 'Skip to main content',
}: PageProps) {
  return (
    <>
      <SkipLink href={`#${id}`}>{skipLinkText}</SkipLink>
      {header && <TemplateHeader>{header}</TemplateHeader>}
      <WidthContainer>
        {beforeChildren}
        <MainWrapper id={id}>{children}</MainWrapper>
      </WidthContainer>
      {footer && <TemplateFooter>{footer}</TemplateFooter>}
    </>
  );
}
