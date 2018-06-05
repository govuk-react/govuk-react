import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const StyledInput = styled('input')(
  {
    boxSizing: 'border-box',
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontWeight: 400,
    textTransform: 'none',
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: LINE_HEIGHT.SIZE_19,
      width: '50%',
    },
    width: '100%',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    ':focus': {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0,
    },
  },
  ({ error, errorColor }) => ({
    border: error ? `4px solid ${errorColor || ERROR_COLOUR}` : undefined,
  }),
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Input />
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/
 *
 * ### TODO:
 * - Remove `errorColor` and provide examples on how to extend the component
 */
const Input = ({ type, ...props }) => <StyledInput type={type} {...props} />;

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  /**
   * HTML `<Input />` type
   */
  type: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 0 })(Input);
