import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';
import { FOOTER_BACKGROUND, FOOTER_TEXT, FOOTER_BORDER_TOP } from 'govuk-colours';

import WidthContainer from './atoms/width-container';
import Navigation from './atoms/navigation';
import Link from './atoms/link';
import SectionBreak from './atoms/section-break';
import MetaCustom from './atoms/meta-custom';

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
  spacing.withWhiteSpace({ padding: { size: 7, direction: 'top' } }),
  spacing.withWhiteSpace({ padding: { size: 5, direction: 'bottom' } })
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Footer />
 * ```
 *
 * Footer with navigation.  There is also the option to provide footer links with, or without React/Reach Router.
 * ```jsx
 * import { Link } from 'react-router-dom';
 *
 * <Footer>
 *   <Footer.Navigation>
 *     <Footer.NavigationLinks heading="Two column list" listColumns="2">
 *       <Footer.Link href="/">Navigation item 1</Footer.Link>
 *       <Footer.Link to="/footer-nav-item-2" as={Link}>Navigation item 2 (Router Link)</Footer.Link>
 *       <Footer.Link href="/">Navigation item 3</Footer.Link>
 *       <Footer.Link href="/">Navigation item 4</Footer.Link>
 *       <Footer.Link href="/">Navigation item 5</Footer.Link>
 *       <Footer.Link href="/">Navigation item 6</Footer.Link>
 *     </Footer.NavigationLinks>
 *     <Footer.NavigationLinks heading="Single column list">
 *       <Footer.Link href="/">Navigation item 1</Footer.Link>
 *       <Footer.Link href="/">Navigation item 2</Footer.Link>
 *       <Footer.Link href="/">Navigation item 3</Footer.Link>
 *     </Footer.NavigationLinks>
 *   </Footer.Navigation>
 * </Footer>
 * ```
 *
 * Footer with links in meta area
 * ```jsx
 * <Footer meta={
 *     <Footer.MetaLinks heading="Support links">
 *       <Footer.Link href="/">Item 1</Footer.Link>
 *       <Footer.Link to="/footer-meta-item-2" as={Link}>Item 2 (Router Link)</Footer.Link>
 *       <Footer.Link href="/">Item 3</Footer.Link>
 *     </Footer.MetaLinks>
 *   }
 * />
 * ```
 *
 * Footer with custom content in meta area
 * ```jsx
 * <Footer meta={
 *     <Footer.MetaCustom>
 *       Built by the <Footer.Link href="/">Government Digital Service</Footer.Link>
 *     </Footer.MetaCustom>
 *   }
 * />
 * ```
 *
 * NB <Footer.Link /> is styled extention of @govuk-react/link
 *
 * ### References:
 * - https://design-system.service.gov.uk/components/footer/
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/footer/template.njk
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/footer/_footer.scss
 *
 */
const Footer = ({ children, meta }) => (
  <FooterContainer role="contentinfo">
    <WidthContainer>
      {children && (
        <React.Fragment>
          {children}
          <SectionBreak />
        </React.Fragment>
      )}
      <MetaContainer>{meta}</MetaContainer>
    </WidthContainer>
  </FooterContainer>
);

Footer.propTypes = {
  /**
   * Footer navigation links
   */
  children: PropTypes.node,
  /**
   * Meta text and links
   */
  meta: PropTypes.node,
};

Footer.defaultProps = {
  children: undefined,
  meta: undefined,
};

Footer.Link = Link;
Footer.Navigation = Navigation;
Footer.NavigationLinks = NavigationLinks;
Footer.MetaLinks = MetaLinks;
Footer.MetaCustom = MetaCustom;

export default Footer;
