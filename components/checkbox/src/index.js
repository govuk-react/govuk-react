// https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkboxes/_checkboxes.scss

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
} from '@govuk-react/constants';

const StyledCheckbox = styled('label')({
  display: 'block',
  position: 'relative',
  padding: '0 0 0 38px',
});

const StyledInput = styled('input')({
  position: 'absolute',
  cursor: 'pointer',
  left: 0,
  top: 0,
  width: '38px',
  height: '38px',
  zIndex: 1,
  margin: 0,
  zoom: 1,
  opacity: 0,
  '[disabled]': {
    cursor: 'auto',
  },
  '[disabled] + span': {
    opacity: '.4',
    cursor: 'auto',
    pointerEvents: 'none',
  },
  ':checked + span:after': {
    opacity: 1,
  },
  ':focus + span:before': {
    boxShadow: `0 0 0 4px ${YELLOW}`,
  },
});

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
  padding: '8px 10px 9px 12px',
  display: 'block',
  color: `${BLACK}`,
  '::before': {
    content: '\'\'',
    display: 'block',
    border: `2px solid ${BLACK}`,
    background: 'transparent',
    width: '34px',
    height: '34px',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  '::after': {
    content: '\'\'',
    border: 'solid',
    borderWidth: '0 0 5px 5px',
    background: 'transparent',
    borderTopColor: 'transparent',
    width: '17px',
    height: '7px',
    position: 'absolute',
    top: '10px',
    left: '8px',
    transform: 'rotate(-45deg)',
    zoom: 1,
    opacity: 0,
  },
});

const Checkbox = ({
  children,
  className,
  inline,
  ...input
}) => (
  <StyledCheckbox className={className} inline={inline}>
    <StyledInput type="checkbox" {...input} />
    <StyledLabel>{children}</StyledLabel>
  </StyledCheckbox>
);

Checkbox.defaultProps = {
  className: undefined,
  inline: undefined,
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

export default withWhiteSpace({ marginBottom: 2 })(Checkbox);
