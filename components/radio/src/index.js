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
    width: '33px',
    height: '33px',
    border: '2px solid black',
    borderRadius: '50%',
    background: 'transparent',
  },
  ':after': {
    content: "''",
    position: 'absolute',
    top: '8px',
    left: '8px',
    width: 0,
    height: 0,
    border: '8.5px solid',
    borderRadius: '50%',
    opacity: 0,
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Radio name="group1">Radio button text example</Radio>
 * ```
 *
 * Radio stacked
 * ```jsx
 *  <div>
 *    <Radio name="group1">Waste from animal carcasses</Radio>
 *    <Radio name="group1">Waste from mines or quarries</Radio>
 *    <Radio name="group1">Farm or agricultural waste</Radio>
 *  </div>
 * ```
 *
 * Radio inline
 * ```jsx
 *  <div>
 *    <Radio name="group1" inline>
 *      Yes
 *    </Radio>
 *    <Radio name="group1" inline>
 *      No
 *    </Radio>
 *  </div>
 * ```
 *
 * Radio disabled
 * ```jsx
 *  <div>
 *    <Radio name="group1" disabled="disabled">
 *      Disabled checkbox option
 *    </Radio>
 *  </div>
 *  ```
 *
 * Radio preselected
 * ```jsx
 *  <div>
 *    <Radio name="group1" checked>
 *      Farm or agricultural waste
 *    </Radio>
 *  </div>
 * ```
 *
 * Radio preselected & disabled
 * ```jsx
 *  <div>
 *    <Radio name="group1" disabled="disabled" checked>
 *      Farm or agricultural waste
 *    </Radio>
 *  </div>
 * ```
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
 */
const Radio = ({
  inline, children, className, ...input
}) => (
  <Label inline={inline} className={className}>
    <Input type="radio" {...input} />
    <LabelText>{children}</LabelText>
  </Label>
);

Radio.defaultProps = {
  inline: false,
  className: undefined,
};

Radio.propTypes = {
  inline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace({ marginBottom: 2 })(Radio);
