import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BLACK } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import { SPACING_POINTS } from '@govuk-react/constants';
import { link, typography } from '@govuk-react/lib';

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
      // TODO use an equivalent of govuk-shape-arrow here
      // @include govuk-shape-arrow($direction: left, $base: 10px, $height: 6px);
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderColor: 'transparent',
      clipPath: 'polygon(0% 50%, 100% 100%, 100% 0%)',
      borderWidth: '5px 6px 5px 0',
      borderRightColor: `${BLACK}`,

      content: "''",
      position: 'absolute',
      top: '-1px',
      bottom: '1px',
      left: 0,
      margin: 'auto',
    },
  },
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
const BackLink = ({ onClick, ...props }) => (
  <Anchor onClick={onClick} {...props} />
);

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

export default withWhiteSpace()(BackLink);
