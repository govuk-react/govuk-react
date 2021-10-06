import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';

/**
 * Styled text to use as a label for a form input.
 *
 * This is not a label element by default as it is assumed it will be wrapped with Label component.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/label-text
 */
export const LabelText = styled('span')(
  typography.font({ size: 19 }),
  typography.textColour,
  {
    display: 'block',
    clear: 'none',
    paddingBottom: '2px',
  },
  spacing.withWhiteSpace({ marginBottom: 0 })
);
LabelText.displayName = 'LabelText';

export default LabelText;
