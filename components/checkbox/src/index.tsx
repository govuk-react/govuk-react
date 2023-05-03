/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/checkboxes/_checkboxes.scss
 */

import * as React from 'react';
import styled from 'styled-components';
import HintText from '@govuk-react/hint-text';
import { FOCUS_COLOUR } from 'govuk-colours';
import {
  BORDER_WIDTH,
  BORDER_WIDTH_FORM_ELEMENT,
  FOCUS_WIDTH,
  SPACING_POINTS,
  MEDIA_QUERIES,
  FONT_SIZE,
} from '@govuk-react/constants';
import { spacing, typography, WithWhiteSpaceProps } from '@govuk-react/lib';
import type { ComponentSizeVariant } from '@govuk-react/lib';

const checkboxSize = SPACING_POINTS[7];
const checkboxSizeSmall = SPACING_POINTS[5];
const labelPaddingLeftRight = SPACING_POINTS[3];

const StyledCheckbox = styled('label')<Pick<CheckboxProps, 'sizeVariant'> & WithWhiteSpaceProps>(
  typography.font({ size: 19 }),
  {
    display: 'block',
    position: 'relative',
    minHeight: checkboxSize,
    padding: `0 0 0 ${checkboxSize}px`,
    clear: 'left',
  },
  ({ sizeVariant }) =>
    sizeVariant === 'SMALL' && {
      paddingRight: 22,
      span: {
        padding: '12px 15px 13px 0',
        fontSize: FONT_SIZE.SIZE_16,
        [MEDIA_QUERIES.LARGESCREEN]: {
          fontSize: FONT_SIZE.SIZE_19,
          padding: `10px 15px 10px 1px`,
        },
        ':before': {
          width: checkboxSizeSmall,
          height: checkboxSizeSmall,
          top: 8,
        },
        ':after': {
          top: 15,
          left: 6,
          width: 11,
          height: 4.5,
          borderWidth: '0 0 3px 3px',
        },
      },
    },
  spacing.withWhiteSpace({ marginBottom: 2 })
);

const StyledInput = styled('input')(
  {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: checkboxSize,
    height: checkboxSize,
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
  })
);

const StyledLabel = styled('span')({
  display: 'inline-block',
  cursor: 'pointer',
  padding: `8px ${labelPaddingLeftRight}px ${SPACING_POINTS[1]}px`,
  MsTouchAction: 'manipulation',
  touchAction: 'manipulation',
  '::before': {
    content: "''",
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: checkboxSize,
    height: checkboxSize,
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

const StyledCheckboxHint = styled(HintText)({
  display: 'block',
  paddingLeft: labelPaddingLeftRight,
  paddingRight: labelPaddingLeftRight,
});

/**
 * Let users select one or more options by using the checkboxes component.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/checkbox
 * - https://design-system.service.gov.uk/components/checkboxes/
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, className, hint, sizeVariant, ...props }: CheckboxProps, ref) => (
    <StyledCheckbox className={className} sizeVariant={sizeVariant}>
      <StyledInput type="checkbox" {...props} ref={ref} />
      <StyledLabel>{children}</StyledLabel>
      {hint && <StyledCheckboxHint>{hint}</StyledCheckboxHint>}
    </StyledCheckbox>
  )
);
Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  hint: undefined,
  className: undefined,
  sizeVariant: 'MEDIUM',
};

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint?: React.ReactNode;
  /**
   * Text content for checkbox
   */
  children: React.ReactNode;
  /**
   * CSS Classname for outermost container
   */
  className?: string;

  /**
   * Size of checkbox
   */
  sizeVariant?: `${ComponentSizeVariant.MEDIUM}` | `${ComponentSizeVariant.SMALL}`;
}

export default Checkbox;
