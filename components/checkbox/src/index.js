import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withWhiteSpace } from '@govuk-react/hoc';
import { YELLOW, BLACK } from 'govuk-colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
  BORDER_WIDTH,
  FOCUS_WIDTH,
} from '@govuk-react/constants';

const govukCheckboxSize = '40px';

const StyledCheckbox = styled('label')({
  display: 'block',
  position: 'relative',
  minHeight: govukCheckboxSize,
  marginBottom: SPACING.SCALE_2,
  padding: `0 0 0 ${govukCheckboxSize}`,
  clear: 'left',
});

const StyledInput = styled('input')(
  {
    position: 'absolute',
    left: 0,
    top: 0,
    width: govukCheckboxSize,
    height: govukCheckboxSize,
    zIndex: 1,
    margin: 0,
    zoom: 1,
    opacity: 0,
    ':checked + span:after': {
      opacity: 1,
    },
    ':focus + span:before': {
      outline: `${FOCUS_WIDTH} solid transparent`,
      outlineOffset: FOCUS_WIDTH,
      boxShadow: `0 0 0 ${FOCUS_WIDTH} ${YELLOW}`,
    },
  },
  ({ disabled }) => ({
    cursor: disabled ? 'auto' : 'pointer',
    ' + span': {
      opacity: disabled ? '.4' : '1',
      pointerEvents: disabled ? 'none' : 'auto',
    },
  }),
);

const StyledLabel = styled('span')({
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
  },
  cursor: 'pointer',
  padding: `8px ${SPACING.SCALE_3} ${SPACING.SCALE_1}`,
  display: 'inline-block',
  color: `${BLACK}`,
  '::before': {
    content: "''",
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: govukCheckboxSize,
    height: govukCheckboxSize,
    border: `2px solid ${BLACK}`,
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
    zoom: 1,
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
