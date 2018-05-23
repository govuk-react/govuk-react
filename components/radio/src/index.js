// https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { YELLOW } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import { NTA_LIGHT } from '@govuk-react/constants';

const Label = styled('label')(
  {
    display: 'block',
    position: 'relative',
    padding: '0 0 0 38px',
  },
  ({ inline }) => ({
    float: inline ? 'left' : undefined,
    clear: inline ? 'none' : undefined,
    marginRight: inline ? '30px' : '0',
  }),
);

const Input = styled('input')(
  {
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
    ':checked + span::after': {
      opacity: 1,
    },
    ':focus + span::before': {
      boxShadow: `0 0 0 4px ${YELLOW}`,
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

const LabelText = styled('span')({
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.25',
  cursor: 'pointer',
  padding: '8px 10px 9px 12px',
  display: 'block',
  ':before': {
    content: "''",
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
    content: "''",
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
  inline, children, disabled, checked, value, name, input, ...props
}) => (
  <Label inline={inline} {...props}>
    <Input type="radio" checked={checked} disabled={disabled} name={name} {...input} value={value} />
    <LabelText>{children}</LabelText>
  </Label>
);

Radio.defaultProps = {
  inline: false,
  disabled: '',
  checked: undefined,
  value: undefined,
  name: '',
  input: {
    name: '',
    onBlur: () => {},
    onFocus: () => {},
    onChange: () => {},
    value: '',
  },
};

Radio.propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
  }),
};

export default withWhiteSpace({ marginBottom: 2 })(Radio);
