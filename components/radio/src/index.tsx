/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/radios/_radios.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
 */
import type { WithWhiteSpaceProps, ComponentSizeVariant } from '@govuk-react/lib';

import * as React from 'react';
import styled from 'styled-components';
import { FOCUS_COLOUR } from 'govuk-colours';
import { spacing, typography } from '@govuk-react/lib';
import HintText from '@govuk-react/hint-text';

import {
  BORDER_WIDTH_FORM_ELEMENT,
  FOCUS_WIDTH,
  FOCUS_WIDTH_RAW,
  FONT_SIZE,
  MEDIA_QUERIES,
  SPACING_POINTS,
} from '@govuk-react/constants';

const radioSize = SPACING_POINTS[7];
const radioSizeSmall = 24;
const labelPaddingLeftRight = SPACING_POINTS[3];
// When the default focus width is used on a curved edge it looks visually smaller.
// So for the circular radios we bump the default to make it look visually consistent.
const RADIOS_FOCUS_WIDTH = `${FOCUS_WIDTH_RAW + 1}px`;

const Label = styled('label')<{ inline?: boolean } & WithWhiteSpaceProps & Pick<RadioProps, 'sizeVariant'>>(
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
  ({ sizeVariant }) =>
    sizeVariant === 'SMALL' && {
      span: {
        padding: '12px 15px 13px 0',
        fontSize: FONT_SIZE.SIZE_16,
        [MEDIA_QUERIES.LARGESCREEN]: {
          fontSize: FONT_SIZE.SIZE_19,
          padding: `10px 15px 10px 1px`,
        },
        ':after': {
          top: 15,
          left: 7,
          borderWidth: 5,
        },
        ':before': {
          top: 8,
          width: radioSizeSmall,
          height: radioSizeSmall,
        },
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
    background: 'currentColor',
    opacity: 0,
  },
});

const StyledRadioHint = styled(HintText)({
  display: 'block',
  paddingLeft: labelPaddingLeftRight,
  paddingRight: labelPaddingLeftRight,
});

/**
 * Use the radios component when users can only select one option from a list.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/radio
 * - https://design-system.service.gov.uk/components/radios/
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ inline = false, children, className, hint, sizeVariant = 'MEDIUM', ...input }: RadioProps, ref) => (
    <Label inline={inline} className={className} sizeVariant={sizeVariant}>
      <Input type="radio" ref={ref} {...input} />
      <LabelText>{children}</LabelText>
      {hint && <StyledRadioHint>{hint}</StyledRadioHint>}
    </Label>
  )
);

Radio.displayName = 'Radio';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint?: React.ReactNode;
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
  sizeVariant?: `${ComponentSizeVariant.MEDIUM}` | `${ComponentSizeVariant.SMALL}`;
}

export default Radio;
