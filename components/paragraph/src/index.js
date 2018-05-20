import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withWhiteSpace } from '@govuk-react/hoc';

import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

/**
 *
 * Simple Usage
 * ```js
 * <Paragraph>Lorem ipsum</Paragraph>
 * ```
 *
 * As supporting text
 * ```js
 * <Paragraph supportingText>Lorem ipsum</Paragraph>
 * ```
 *
 * References;
 * https://govuk-elements.herokuapp.com/typography/#typography-body-copy
 *
 * TODO:
 * - Add test for supporting text
 * - Add story & test with example children that have a link and bold node
 *
 */
const StyledParagraph = styled('p')(
  {
    fontFamily: NTA_LIGHT,
    marginTop: 0,
  },
  ({ supportingText }) => ({
    fontSize: supportingText ? FONT_SIZE.SIZE_14 : FONT_SIZE.SIZE_16,
    lineHeight: supportingText ? LINE_HEIGHT.SIZE_14 : LINE_HEIGHT.SIZE_16,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: supportingText ? FONT_SIZE.SIZE_16 : FONT_SIZE.SIZE_19,
      lineHeight: supportingText ? LINE_HEIGHT.SIZE_16 : LINE_HEIGHT.SIZE_19,
    },
  }),
);

const Paragraph = ({ children, ...rest }) => (
  <StyledParagraph {...rest}>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  /**
   * Paragraph content
   */
  children: PropTypes.node,
  /**
   * Is this paragraph supporting text for another paragraph or component
   */
  supportingText: PropTypes.bool,
};

Paragraph.defaultProps = {
  children: '',
  supportingText: false,
};

export default withWhiteSpace({ marginBottom: 5 })(Paragraph);
