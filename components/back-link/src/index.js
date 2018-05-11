// References:
// https://github.com/alphagov/govuk-frontend/tree/master/src/components/back-link

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

// const Button
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

const BackLink = ({ children, className, goBack }) => (
  <Anchor className={className} onClick={goBack}>{children}</Anchor>
);

BackLink.propTypes = {
  /**
   * Generally the text that will appear in the back link
   */
  children: PropTypes.node.isRequired,
  /**
   * A function that is called on click
   */
  goBack: PropTypes.func, // TODO: rename onClick
  className: PropTypes.string,
};

BackLink.defaultProps = {
  goBack: undefined,
  className: undefined,
};

export default withWhiteSpace({ marginBottom: 3 })(BackLink);
