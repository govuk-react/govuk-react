/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/error-message/_error-message.scss
 */
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

/**
 * Follow the [validation pattern](https://design-system.service.gov.uk/patterns/validation/) and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/error-text
 * - https://design-system.service.gov.uk/components/error-message/
 */
export const ErrorText = styled('span')(
  typography.font({ size: 19, weight: 'bold' }),
  {
    display: 'block',
    // NB non-responsive spacing
    marginBottom: SPACING_POINTS[3],
    clear: 'both',
    color: ERROR_COLOUR,
  },
  spacing.withWhiteSpace()
);
ErrorText.displayName = 'ErrorText';

export default ErrorText;
