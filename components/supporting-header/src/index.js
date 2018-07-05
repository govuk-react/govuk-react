import styled from 'react-emotion';
import React from 'react';
import PropTypes from 'prop-types';
import { GREY_1 } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const StyledHeader = styled('span')({
  fontFamily: NTA_LIGHT,
  fontSize: FONT_SIZE.SIZE_20,
  lineHeight: LINE_HEIGHT.SIZE_20,
  color: GREY_1,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_27,
    lineHeight: LINE_HEIGHT.SIZE_27,
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <SupportingHeader>Heading text</SupportingHeader>
 * ```
 *
 * With another header
 * ```jsx
 * import { H1 } from '@govuk-react/header';
 *
 * <SupportingHeader>Supporting header text</SupportingHeader>
 * <H1>Main header text</H1>
 * ```
 *
 * ### References
 * - https://govuk-elements.herokuapp.com/typography/
 */
const SupportingHeader = props => <StyledHeader {...props} />;

SupportingHeader.propTypes = {
  /** Text to be rendered as a supporting header */
  children: PropTypes.string.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(SupportingHeader);
