import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { BLACK, YELLOW } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const Anchor = styled('button')({
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 400,
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
  display: 'inline-block',
  position: 'relative',
  marginTop: '15px',
  paddingLeft: '14px',
  border: 0,
  color: `${BLACK}`,
  borderBottom: `1px solid ${BLACK}`,
  textDecoration: 'none',
  '::before': {
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
  ':focus': {
    backgroundColor: `${YELLOW}`,
    outline: `3px solid ${YELLOW}`,
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```js
 * <BackLink>Back</BackLink>
 * ```
 * 
 * With custom click handler
 * ```js
 * <BackLink onClick={this.myCustomFunction}>Back</BackLink>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/back-link
 *
 */
const BackLink = ({ children, className, onClick }) => (
  <Anchor className={className} onClick={onClick}>{children}</Anchor>
);

BackLink.propTypes = {
  /**
   * Text that will appear in the back link
   */
  children: PropTypes.string,
  /**
   * Custom function to run when the `onClick` event is fired
   */
  onClick: PropTypes.func,
  className: PropTypes.string,
};

BackLink.defaultProps = {
  onClick: undefined,
  className: undefined,
  children: 'Back',
};

export default withWhiteSpace({ marginBottom: 3 })(BackLink);
