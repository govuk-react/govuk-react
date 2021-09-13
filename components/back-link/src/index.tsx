import React from 'react';
import styled from 'styled-components';
import { BLACK } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { link, shape, spacing, typography } from '@govuk-react/lib';

const Anchor = styled('a')(
  typography.font({ size: 16 }),
  link.common(),
  link.styleText,
  {
    display: 'inline-block',
    position: 'relative',
    // margins here are not responsive, hence why they're not specified using withWhiteSpace
    marginTop: SPACING_POINTS[3],
    marginBottom: SPACING_POINTS[3],
    paddingLeft: '14px',
    textDecoration: 'none',
    '&[href]': {
      borderBottom: `1px solid ${BLACK}`,
    },
    '::before': {
      ...shape.arrow({ direction: 'left', base: 10, height: 6 }),

      content: "''",
      position: 'absolute',
      top: '-1px',
      bottom: '1px',
      left: 0,
      margin: 'auto',
    },
  },
  spacing.withWhiteSpace()
);

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { BackLink } from 'govuk-react'
 *
 * <BackLink>Back</BackLink>
 * ```
 *
 * With custom click handler
 *
 * ```jsx
 * <BackLink onClick={this.myCustomFunction}>Back</BackLink>
 * ```
 *
 * With `href` attribute
 *
 * ```jsx
 * <BackLink href='#'>Back</BackLink>
 * ```
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/back-link
 *
 */
const BackLink = (props: BackLinkProps) => <Anchor {...props} />;

interface BackLinkProps {
  /** Text that will appear in the back link */
  children?: string;
  /**
   * Custom function to run when the `onClick` event is fired
   */
  onClick?: (...args: unknown[]) => unknown;
  href?: string;
  as?: React.ElementType;
  to?: string;
}

BackLink.defaultProps = {
  children: 'Back',
  onClick: undefined,
  href: undefined,
  as: undefined,
  to: undefined,
};

export default BackLink;
