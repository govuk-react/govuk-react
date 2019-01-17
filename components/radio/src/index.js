import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { FOCUS_COLOUR } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  NTA_LIGHT,
  FONT_SIZE,
  MEDIA_QUERIES,
  LINE_HEIGHT,
  SPACING,
  BORDER_WIDTH_FORM_ELEMENT,
  FOCUS_WIDTH,
} from '@govuk-react/constants';

const govukRadioSize = '40px';

const Label = styled('label')(
  {
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: LINE_HEIGHT.SIZE_19,
    },
    display: 'block',
    position: 'relative',
    minHeight: govukRadioSize,
    padding: `0 0 0 ${govukRadioSize}`,
    clear: 'left',
  },
  ({ inline }) => (inline && {
    [MEDIA_QUERIES.LARGESCREEN]: {
      float: 'left',
      clear: 'none',
      marginRight: SPACING.SCALE_4,
    },
  }),
);

const Input = styled('input')(
  {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: govukRadioSize,
    height: govukRadioSize,
    cursor: 'pointer',
    opacity: 0,
    ':checked + span::after': {
      opacity: 1,
    },
    ':focus + span::before': {
      outline: `${FOCUS_WIDTH} solid transparent`,
      outlineOffset: FOCUS_WIDTH,
      boxShadow: `0 0 0 4px ${FOCUS_COLOUR}`,
    },
  },
  ({ disabled }) => ({
    cursor: disabled ? 'auto' : 'pointer',
    ' + span': {
      opacity: disabled ? '.5' : '1',
      pointerEvents: disabled ? 'none' : 'auto',
    },
  }),
);

const LabelText = styled('span')({
  display: 'inline-block',
  marginBottom: 0,
  padding: `8px ${SPACING.SCALE_3} ${SPACING.SCALE_1}`,
  cursor: 'pointer',
  ':before': {
    content: "''",
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: govukRadioSize,
    height: govukRadioSize,
    border: `${BORDER_WIDTH_FORM_ELEMENT} solid black`,
    borderRadius: '50%',
    background: 'transparent',
  },
  ':after': {
    content: "''",
    position: 'absolute',
    top: SPACING.SCALE_2,
    left: SPACING.SCALE_2,
    width: 0,
    height: 0,
    border: `${SPACING.SCALE_2} solid`,
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
