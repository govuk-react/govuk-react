import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FOCUS_COLOUR } from 'govuk-colours';
import { spacing, typography } from '@govuk-react/lib';
import HintText from '@govuk-react/hint-text';
import {
  BORDER_WIDTH_FORM_ELEMENT,
  FOCUS_WIDTH,
  FOCUS_WIDTH_RAW,
  MEDIA_QUERIES,
  SPACING_POINTS,
} from '@govuk-react/constants';

const radioSize = SPACING_POINTS[7];
const labelPaddingLeftRight = SPACING_POINTS[3];
// When the default focus width is used on a curved edge it looks visually smaller.
// So for the circular radios we bump the default to make it look visually consistent.
const RADIOS_FOCUS_WIDTH = `${FOCUS_WIDTH_RAW + 1}px`;

const Label = styled('label')(
  typography.font({ size: 19 }),
  {
    display: 'block',
    position: 'relative',
    minHeight: radioSize,
    padding: `0 0 0 ${radioSize}px`,
    clear: 'left',
  },
  ({ inline }) =>
    inline && {
      [MEDIA_QUERIES.LARGESCREEN]: {
        float: 'left',
        clear: 'none',
        marginRight: SPACING_POINTS[4],
      },
    },
  spacing.withWhiteSpace({ marginBottom: 2 })
);

const Input = styled('input')(
  {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: radioSize,
    height: radioSize,
    cursor: 'pointer',
    opacity: 0,
    ':checked + span::after': {
      opacity: 1,
    },
    ':focus + span::before': {
      outline: `${FOCUS_WIDTH} solid transparent`,
      outlineOffset: FOCUS_WIDTH,
      boxShadow: `0 0 0 ${RADIOS_FOCUS_WIDTH} ${FOCUS_COLOUR}`,
    },
  },
  ({ disabled }) => ({
    cursor: disabled ? 'auto' : 'pointer',
    ' + span': {
      opacity: disabled ? '.5' : '1',
      pointerEvents: disabled ? 'none' : 'auto',
    },
  })
);

const LabelText = styled('span')({
  display: 'inline-block',
  marginBottom: 0,
  padding: `8px ${labelPaddingLeftRight}px ${SPACING_POINTS[1]}px`,
  cursor: 'pointer',
  MsTouchAction: 'manipulation',
  touchAction: 'manipulation',
  ':before': {
    content: "''",
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: radioSize,
    height: radioSize,
    border: `${BORDER_WIDTH_FORM_ELEMENT} solid black`,
    borderRadius: '50%',
    background: 'transparent',
  },
  ':after': {
    content: "''",
    position: 'absolute',
    top: SPACING_POINTS[2],
    left: SPACING_POINTS[2],
    width: 0,
    height: 0,
    border: `${SPACING_POINTS[2]}px solid`,
    borderRadius: '50%',
    opacity: 0,
  },
});

const StyledRadioHint = styled(HintText)({
  display: 'block',
  paddingLeft: labelPaddingLeftRight,
  paddingRight: labelPaddingLeftRight,
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
 * Radio with hint text
 * ```jsx
 * <div>
 *   <Radio
 *    name="group1"
 *    hint="You'll have a user ID if you've registered for Self Assessment or filed a tax return
 *          online before."
 *   >
 *     Sign in with Government Gateway
 *   </Radio>
 * </div>
 * ```
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
 */
const Radio = ({ inline, children, className, hint, ...input }) => (
  <Label inline={inline} className={className}>
    <Input type="radio" {...input} />
    <LabelText>{children}</LabelText>
    {hint && <StyledRadioHint>{hint}</StyledRadioHint>}
  </Label>
);

Radio.defaultProps = {
  hint: undefined,
  inline: false,
  className: undefined,
};

Radio.propTypes = {
  hint: PropTypes.node,
  inline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Radio;
