import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withWhiteSpace } from '@govuk-react/hoc';
import { FOCUS_COLOUR } from 'govuk-colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
  BORDER_WIDTH,
  FOCUS_WIDTH,
  BORDER_WIDTH_FORM_ELEMENT,
} from '@govuk-react/constants';

const govukCheckboxSize = '40px';

const StyledCheckbox = styled('label')({
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
  },
  display: 'block',
  position: 'relative',
  minHeight: govukCheckboxSize,
  padding: `0 0 0 ${govukCheckboxSize}`,
  clear: 'left',
});

const StyledInput = styled('input')(
  {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: govukCheckboxSize,
    height: govukCheckboxSize,
    opacity: 0,
    ':checked + span:after': {
      opacity: 1,
    },
    ':focus + span:before': {
      outline: `${FOCUS_WIDTH} solid transparent`,
      outlineOffset: FOCUS_WIDTH,
      boxShadow: `0 0 0 ${FOCUS_WIDTH} ${FOCUS_COLOUR}`,
    },
  },
  ({ disabled }) => ({
    cursor: disabled ? 'default' : 'pointer',
    ' + span': {
      opacity: disabled ? '.5' : '1',
      pointerEvents: disabled ? 'none' : 'auto',
    },
  }),
);

const StyledLabel = styled('span')({
  display: 'inline-block',
  cursor: 'pointer',
  padding: `8px ${SPACING.SCALE_3} ${SPACING.SCALE_1}`,
  '::before': {
    content: "''",
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: govukCheckboxSize,
    height: govukCheckboxSize,
    border: `${BORDER_WIDTH_FORM_ELEMENT} solid black`,
    background: 'transparent',
  },
  '::after': {
    content: "''",
    position: 'absolute',
    top: '11px',
    left: '9px',
    width: '18px',
    height: '7px',
    transform: 'rotate(-45deg)',
    border: 'solid',
    borderWidth: `0 0 ${BORDER_WIDTH} ${BORDER_WIDTH}`,
    borderTopColor: 'transparent',
    background: 'transparent',
    opacity: 0,
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Checkbox>Text displayed next to checkbox</Checkbox>
 * ```
 *
 * With disabled state
 * ```jsx
 * <Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
 * ```
 *
 * Checkbox preselected
 * ```jsx
 * <Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
 * ```
 *
 * Checkbox preselected & disabled
 * ```jsx
 * <Checkbox disabled="disabled" defaultChecked>Farm or agricultural waste</Checkbox>
 * ```
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkboxes/_checkboxes.scss
 *
 */
const Checkbox = ({
  children, className, ...props
}) => (
  <StyledCheckbox className={className}>
    <StyledInput type="checkbox" {...props} />
    <StyledLabel>{children}</StyledLabel>
  </StyledCheckbox>
);

Checkbox.defaultProps = {
  className: undefined,
};

Checkbox.propTypes = {
  /**
   * Text content for checkbox
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS Classname for outermost container
   */
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 2 })(Checkbox);
