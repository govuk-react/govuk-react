import React from 'react';
import PropTypes from 'prop-types';
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
    borderBottom: `1px solid ${BLACK}`,
    textDecoration: 'none',
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
 * ```jsx
 * <BackLink>Back</BackLink>
 * ```
 *
 * With custom click handler
 * ```jsx
 * <BackLink onClick={this.myCustomFunction}>Back</BackLink>
 * ```
 *
 * With `href` attribute
 * ```jsx
 * <BackLink href='#'>Back</BackLink>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/back-link
 *
 */
const BackLink = props => <Anchor {...props} />;

BackLink.propTypes = {
  /** Text that will appear in the back link */
  children: PropTypes.string,
  /**
   * Custom function to run when the `onClick` event is fired
   */
  onClick: PropTypes.func,
};

BackLink.defaultProps = {
  children: 'Back',
  onClick: undefined,
};

export default BackLink;
