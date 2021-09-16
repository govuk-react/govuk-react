import React from 'react';
import styled from 'styled-components';
import { SPACING_POINTS } from '@govuk-react/constants';
import { link, typography, visuallyHidden } from '@govuk-react/lib';

export const SkipLink = styled('a')<SkipLinkProps>(
  visuallyHidden.focusable(),
  link.common(),
  link.styleText,
  typography.responsive(16),
  {
    display: 'block',
    padding: `${SPACING_POINTS[2]}px ${SPACING_POINTS[3]}px`,
    '@supports (padding:max(calc(0px)))': {
      paddingRight: `max(${SPACING_POINTS[3]}px, calc(${SPACING_POINTS[3]}px + env(safe-area-inset-right)))`,
      paddingLeft: `max(${SPACING_POINTS[3]}px, calc(${SPACING_POINTS[3]}px + env(safe-area-inset-left)))`,
    },
  }
);

/**
 *
 * ### Usage
 *
 * Use the skip link component to help keyboard-only users skip to the main content on a page.
 *
 * Simple
 *
 * ```jsx
 * import { SkipLink } from 'govuk-react'
 *
 * <SkipLink href="#main-content">Skip to main content</SkipLink>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/components/skip-link/
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/skip-link
 */
const SkipLinkDocumented: React.FC<SkipLinkProps> = (props: SkipLinkProps) => <SkipLink {...props} />;

SkipLinkDocumented.defaultProps = {
  children: 'Skip to main content',
  href: '#content',
};

interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
}

SkipLink.defaultProps = SkipLinkDocumented.defaultProps;

export { SkipLinkDocumented };
export default SkipLink;
