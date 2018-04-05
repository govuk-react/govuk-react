// https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { YELLOW } from 'govuk-colours';

const Label = glamorous.label(
  {
    display: 'block',
    position: 'relative',
    padding: '0 0 0 38px',
  },
  ({ inline }) => ({
    float: inline ? 'left' : undefined,
    clear: inline ? 'none' : undefined,
    marginRight: inline ? '30px' : '0',
    marginBottom: inline ? '0' : undefined,
  }),
);

const Input = glamorous.input({
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
  ':checked + span::after': {
    opacity: 1,
  },
  ':focus + span::before': {
    boxShadow: `0 0 0 4px ${YELLOW}`,
  },
});

const LabelText = glamorous.span({
  fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.25',
  cursor: 'pointer',
  padding: '8px 10px 9px 12px',
  display: 'block',
  ':before': {
    content: ' ',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '2.10526em',
    height: '2.10526em',
    border: '2px solid black',
    borderRadius: '50%',
    background: 'transparent',
  },
  ':after': {
    content: ' ',
    position: 'absolute',
    top: '0.52632em',
    left: '0.52632em',
    width: 0,
    height: 0,
    border: '0.52632em solid',
    borderRadius: '50%',
    opacity: 0,
  },
});

const Radio = ({
  inline,
  children,
  className,
  ...input
}) => (
  <Label className={className} inline={inline}>
    <Input type="radio" {...input} />
    <LabelText>{children}</LabelText>
  </Label>
);

Radio.defaultProps = {
  inline: undefined,
  className: undefined,
};

Radio.propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Radio;
