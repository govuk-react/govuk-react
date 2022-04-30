/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/footer/template.njk
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/footer/_footer.scss
 */
import * as React from 'react';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';
import { FOOTER_BACKGROUND, FOOTER_TEXT, FOOTER_BORDER_TOP } from 'govuk-colours';

import type { CopyrightProps } from './atoms/copyright';

import WidthContainer from './atoms/width-container';
import Navigation from './atoms/navigation';
import Link from './atoms/link';
import SectionBreak from './atoms/section-break';
import MetaCustom from './atoms/meta-custom';
import Licence from './atoms/licence';

import MetaContainer from './molecules/meta-container';
import MetaLinks from './molecules/meta-links';
import NavigationLinks from './molecules/navigation-links';

const FooterContainer = styled('footer')(
  {
    borderTop: `1px solid ${FOOTER_BORDER_TOP}`,
    background: `${FOOTER_BACKGROUND}`,
    color: `${FOOTER_TEXT}`,
  },
  typography.font({ size: 16 }),
  spacing.withWhiteSpace({
    padding: [
      { size: 7, direction: 'top' },
      { size: 5, direction: 'bottom' },
    ],
  })
);

/**
 * The footer provides copyright, licensing and other information about your service and department.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/footer
 * - https://design-system.service.gov.uk/components/footer/
 *
 */
export const Footer: FooterType = ({
  children = undefined,
  container: Container = Footer.WidthContainer,
  copyright = undefined,
  meta = undefined,
  licence = <Licence />,
  ...props
}: FooterProps) => (
  <FooterContainer role="contentinfo" {...props}>
    <Container>
      {children && (
        <>
          {children}
          <SectionBreak />
        </>
      )}
      <MetaContainer copyright={copyright} licence={licence}>
        {meta}
      </MetaContainer>
    </Container>
  </FooterContainer>
);

Footer.displayName = 'Footer';

export interface FooterType extends React.FC<FooterProps> {
  Link: typeof Link;
  Navigation: typeof Navigation;
  MetaCustom: typeof MetaCustom;
  MetaLinks: typeof MetaLinks;
  NavigationLinks: typeof NavigationLinks;
  WidthContainer: typeof WidthContainer;
  Licence: typeof Licence;
}

interface FooterProps {
  /**
   * Footer navigation links
   */
  children?: React.ReactNode;
  /**
   * Override the default footer container component.
   * `children`, `copyright` and `meta` will be placed inside this component.
   */
  container?: React.ElementType;
  /**
   * Copyright information
   */
  copyright?: CopyrightProps;
  /**
   * Meta text and links
   */
  meta?: React.ReactNode;
  /**
   * Licence content
   */
  licence?: false | string | React.ReactNode;
}
Footer.Link = Link;
Footer.Navigation = Navigation;
Footer.MetaCustom = MetaCustom;
Footer.MetaLinks = MetaLinks;
Footer.NavigationLinks = NavigationLinks;
Footer.WidthContainer = WidthContainer;
Footer.Licence = Licence;

Footer.defaultProps = {
  children: undefined,
  container: Footer.WidthContainer,
  copyright: undefined,
  meta: undefined,
  licence: <Licence />,
};

export default Footer;
